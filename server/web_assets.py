import os
from aiohttp import web
import nodes
import server


def _get_project_name(workspace_path: str) -> str:
    project_name = os.path.basename(workspace_path)
    try:
        from comfy_config import config_parser
        project_config = config_parser.extract_node_configuration(workspace_path)
        project_name = project_config.project.name
    except Exception as e:
        print(f"Could not load project config, using default name '{project_name}': {e}")
    return project_name


def register_web_assets(workspace_path: str) -> None:
    web_path = os.path.join(workspace_path, "web/align")
    manifest_path = os.path.join(workspace_path, "web/.vite/manifest.json")
    
    if not os.path.exists(web_path):
        return
    
    server.PromptServer.instance.app.add_routes([
        web.static("/align/", web_path),
    ])
 
    if os.path.exists(manifest_path):
        async def get_manifest(request):
            return web.FileResponse(manifest_path)
        server.PromptServer.instance.app.add_routes([
            web.get("/align/manifest.json", get_manifest),
        ])

    project_name = _get_project_name(workspace_path)
    nodes.EXTENSION_WEB_DIRS[project_name] = os.path.join(workspace_path, "web")