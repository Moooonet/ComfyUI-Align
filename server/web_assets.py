import os
from aiohttp import web
import nodes
import server


def _get_project_name(workspace_path: str) -> str:
    """Resolve the project name from `pyproject.toml` if available.

    Falls back to the folder basename when configuration is missing.
    """
    project_name = os.path.basename(workspace_path)
    try:
        from comfy_config import config_parser
        project_config = config_parser.extract_node_configuration(workspace_path)
        project_name = project_config.project.name
        print(f"project name read from pyproject.toml: {project_name}")
    except Exception as e:
        print(f"Could not load project config, using default name '{project_name}': {e}")
    return project_name


def register_web_assets(workspace_path: str) -> None:
    """Register static web asset routes for the Align frontend.

    - Serves `/align/` from `web/align`
    - Serves Vite manifest at `/align/manifest.json` when present
    - Serves locales under `/locales/` when present
    - Registers extension web directory for ComfyUI asset discovery
    """
    web_path = os.path.join(workspace_path, "web/align")
    manifest_path = os.path.join(workspace_path, "web/.vite/manifest.json")
    web_locales_path = os.path.join(workspace_path, "web/locales")

    print(f"ComfyUI_Align workspace path: {workspace_path}")
    print(f"Web path: {web_path}")
    print(f"Web locales path: {web_locales_path}")
    print(f"Locales exist: {os.path.exists(web_locales_path)}")

    if os.path.exists(web_path):
        # Serve compiled frontend assets
        server.PromptServer.instance.app.add_routes([
            web.static("/align/", web_path),
        ])

        # Serve Vite manifest for hashed asset resolution
        if os.path.exists(manifest_path):
            async def get_manifest(request):
                return web.FileResponse(manifest_path)

            server.PromptServer.instance.app.add_routes([
                web.get("/align/manifest.json", get_manifest),
            ])
            print("Registered manifest route at /align/manifest.json")
        else:
            print("WARNING: manifest.json not found - hashed assets may not be discoverable")

        # Serve i18n locale files, if present
        if os.path.exists(web_locales_path):
            server.PromptServer.instance.app.add_routes([
                web.static("/locales/", web_locales_path),
            ])
            print("Registered locale files route at /locales/")
        else:
            print("WARNING: Locale directory not found!")

        # Register extension web directory for ComfyUI
        project_name = _get_project_name(workspace_path)
        nodes.EXTENSION_WEB_DIRS[project_name] = os.path.join(workspace_path, "web")
    else:
        print("ComfyUI_Align: Web directory not found")