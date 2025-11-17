import os
import folder_paths  # Imported for ComfyUI environment consistency
import nodes  # Used to register extension web directories

# Local server helpers
from .server.web_assets import register_web_assets
from .server.color_presets_api import init_color_presets, register_color_presets_routes

NODE_CLASS_MAPPINGS = {}
__all__ = ["NODE_CLASS_MAPPINGS"]

workspace_path = os.path.dirname(__file__)
config_path = os.path.join(workspace_path, "color_presets.json")

# Register frontend assets and helper routes (manifest, locales)
register_web_assets(workspace_path)

"""
Bootstraps Align by delegating web asset routing and API registration
to the `server` helpers package, keeping this file uncluttered.
"""

# Initialize and register the Color Presets API
init_color_presets(config_path)
register_color_presets_routes()
