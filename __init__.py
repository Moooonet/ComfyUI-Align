import os
import folder_paths
import nodes

from .server.web_assets import register_web_assets
from .server.color_presets_api import init_color_presets, register_color_presets_routes

NODE_CLASS_MAPPINGS = {}
__all__ = ["NODE_CLASS_MAPPINGS"]

workspace_path = os.path.dirname(__file__)
config_path = os.path.join(workspace_path, "color_presets.json")

register_web_assets(workspace_path)

init_color_presets(config_path)
register_color_presets_routes()
