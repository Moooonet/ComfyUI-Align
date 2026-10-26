import os
import json
import re
from aiohttp import web
import server

CONFIG_PATH = None


def init_color_presets(config_path: str) -> None:
    global CONFIG_PATH
    CONFIG_PATH = config_path


def _ensure_config_file() -> None:
    assert CONFIG_PATH, "CONFIG_PATH must be initialized"
    try:
        if not os.path.exists(CONFIG_PATH):
            default = {"version": 1, "nodes": []}
            with open(CONFIG_PATH, "w", encoding="utf-8") as f:
                json.dump(default, f, ensure_ascii=False, indent=2)
            print(f"Created default color presets config at {CONFIG_PATH}")
        else:
            with open(CONFIG_PATH, "r", encoding="utf-8") as f:
                data = json.load(f)
            if not isinstance(data, dict) or "nodes" not in data:
                default = {"version": 1, "nodes": []}
                with open(CONFIG_PATH, "w", encoding="utf-8") as f:
                    json.dump(default, f, ensure_ascii=False, indent=2)
                print(f"Reset malformed color presets config at {CONFIG_PATH}")
    except Exception as e:
        print(f"Failed to ensure color presets config: {e}")


def _read_config() -> dict:
    assert CONFIG_PATH, "CONFIG_PATH must be initialized"
    try:
        with open(CONFIG_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"Failed to read color presets config: {e}")
        return {"version": 1, "nodes": []}


def _write_config(data: dict) -> bool:
    assert CONFIG_PATH, "CONFIG_PATH must be initialized"
    try:
        with open(CONFIG_PATH, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Failed to write color presets config: {e}")
        return False


def _normalize_hex8(hex_str: str):
    try:
        s = str(hex_str or '').strip()
        if not s:
            return None
        if s.startswith('#'):
            s = s[1:]
        # Strip non-hex chars
        s = re.sub(r"[^A-Fa-f0-9]", "", s)
        if len(s) == 3:  # RGB
            r, g, b = s[0], s[1], s[2]
            return f"#{(r*2 + g*2 + b*2).upper()}FF"
        if len(s) == 4:  # RGBA
            r, g, b, a = s[0], s[1], s[2], s[3]
            return f"#{(r*2 + g*2 + b*2 + a*2).upper()}"
        if len(s) == 6:  # RRGGBB
            return f"#{s.upper()}FF"
        if len(s) == 8:  # RRGGBBAA
            return f"#{s.upper()}"
        return None
    except Exception:
        return None


def _normalize_name(name: str) -> str:
    try:
        base = str(name or '')
        # remove parenthetical content
        base = re.sub(r"\([^)]*\)", "", base)
        # strip non-alphanumeric characters
        return re.sub(r"[^A-Za-z0-9]", "", base)
    except Exception:
        return str(name or '')


async def get_color_presets(request):
    _ensure_config_file()
    cfg = _read_config()
    # Normalize colors defensively to maintain invariants
    normalized_nodes = []
    for n in cfg.get('nodes', []):
        try:
            t = n.get('type') or 'Unknown'
            # Filter out MarkdownNote/Note entries entirely from GET response
            tn = _normalize_name(t)
            if tn == _normalize_name('MarkdownNote') or tn == _normalize_name('Note'):
                continue
            nn = {
                'type': t,
                'color': _normalize_hex8(n.get('color')) if n.get('color') else None,
                'bgcolor': _normalize_hex8(n.get('bgcolor')) if n.get('bgcolor') else None,
            }
            normalized_nodes.append(nn)
        except Exception:
            # Skip malformed entries
            pass
    return web.json_response({
        'version': cfg.get('version', 1),
        'nodes': normalized_nodes,
    })


async def upsert_color_presets(request):
    try:
        payload = await request.json()
    except Exception as e:
        return web.json_response({ 'error': f'Invalid JSON: {e}' }, status=400)

    # Support both raw array and `{ nodes: [...] }`
    incoming = None
    if isinstance(payload, list):
        incoming = payload
    elif isinstance(payload, dict):
        incoming = payload.get('nodes')
    if not isinstance(incoming, list):
        return web.json_response({ 'error': '`nodes` must be an array' }, status=400)

    # Normalize incoming entries
    normalized_incoming = []
    for n in incoming:
        try:
            t = (n or {}).get('type') or 'Unknown'
            color = (n or {}).get('color')
            bgcolor = (n or {}).get('bgcolor')
            # Skip MarkdownNote/Note entirely
            tn = _normalize_name(t)
            if tn == _normalize_name('MarkdownNote') or tn == _normalize_name('Note'):
                continue
            entry = {
                'type': t,
                'color': _normalize_hex8(color) if color else None,
                'bgcolor': _normalize_hex8(bgcolor) if bgcolor else None,
            }
            # Only keep entries that have at least one color
            if entry['color'] or entry['bgcolor']:
                normalized_incoming.append(entry)
        except Exception:
            # Skip malformed
            pass

    _ensure_config_file()
    cfg = _read_config()
    existing = []
    for n in cfg.get('nodes', []):
        try:
            t = n.get('type') or 'Unknown'
            tn = _normalize_name(t)
            if tn == _normalize_name('MarkdownNote') or tn == _normalize_name('Note'):
                continue
            existing.append({
                'type': t,
                'color': _normalize_hex8(n.get('color')) if n.get('color') else None,
                'bgcolor': _normalize_hex8(n.get('bgcolor')) if n.get('bgcolor') else None,
            })
        except Exception:
            # Skip malformed
            pass

    existing_order = []
    seen_types = set()
    for e in existing:
        t = e.get('type') or 'Unknown'
        if t not in seen_types:
            existing_order.append(t)
            seen_types.add(t)

    existing_map = { (e.get('type') or 'Unknown'): e for e in existing }

    incoming_order = []
    incoming_map = {}
    for e in normalized_incoming:
        t = e.get('type') or 'Unknown'
        incoming_map[t] = e
        if t not in existing_map and t not in incoming_order:
            incoming_order.append(t)

    merged = []
    for t in existing_order:
        merged.append(incoming_map.get(t, existing_map.get(t)))
    for t in incoming_order:
        merged.append(incoming_map[t])

    cfg['version'] = int(cfg.get('version', 1))
    cfg['nodes'] = merged
    ok = _write_config(cfg)
    if not ok:
        return web.json_response({ 'error': 'Failed to write config' }, status=500)
    return web.json_response({ 'updated': len(normalized_incoming), 'config': cfg })


async def delete_color_preset(request):
    try:
        payload = await request.json()
        color = payload.get("color")
        req_type = payload.get("type")
    except Exception as e:
        return web.json_response({"error": f"Invalid JSON: {e}"}, status=400)

    if not color:
        return web.json_response({"error": "'color' is required"}, status=400)

    _ensure_config_file()
    cfg = _read_config()
    color_norm = str(color).strip().upper()
    if not color_norm.startswith("#"):
        color_norm = "#" + color_norm
    if len(color_norm) == 7:
        color_norm = color_norm + "FF"

    before = len(cfg.get("nodes", []))
    def norm(v):
        try:
            return _normalize_hex8(v)
        except Exception:
            return ''
    if req_type:
        new_nodes = []
        removed = 0
        for n in cfg.get("nodes", []):
            try:
                c_match = norm(n.get("color")) == color_norm or norm(n.get("bgcolor")) == color_norm
                t_match = str(n.get("type") or "Unknown") == str(req_type)
                if removed == 0 and c_match and t_match:
                    removed = 1
                    continue  # skip this one
            except Exception:
                pass
            new_nodes.append(n)
        cfg["nodes"] = new_nodes
        after = len(cfg["nodes"])
    else:
        cfg["nodes"] = [
            n for n in cfg.get("nodes", [])
            if norm(n.get("color")) != color_norm and norm(n.get("bgcolor")) != color_norm
        ]
        after = len(cfg["nodes"])
    ok = _write_config(cfg)
    if not ok:
        return web.json_response({"error": "Failed to write config"}, status=500)
    return web.json_response({"deleted": before - after, "config": cfg})


async def delete_all_color_presets(request):
    _ensure_config_file()
    cfg = _read_config()
    cfg['nodes'] = []
    ok = _write_config(cfg)
    if not ok:
        return web.json_response({"error": "Failed to write config"}, status=500)
    return web.json_response({"deleted": "all", "config": cfg})


def register_color_presets_routes() -> None:
    _ensure_config_file()
    try:
        server.PromptServer.instance.app.add_routes([
            web.get("/align/api/color_presets", get_color_presets),
            web.post("/align/api/color_presets", upsert_color_presets),
            web.delete("/align/api/color_presets", delete_color_preset),
            web.delete("/align/api/color_presets/all", delete_all_color_presets),
        ])
        print("Registered color presets API routes: GET, POST, DELETE")
    except Exception as e:
        print(f"Failed to register color presets API routes: {e}")