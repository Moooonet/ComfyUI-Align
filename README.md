<div align="center">
<img src="https://moooonet.github.io/assets/Comfy-Align//images/display.jpg" width="100%">
<br><br>

[![Version](https://img.shields.io/badge/Version-3.0.4-cyan)](README.md)
[![Youtube](https://img.shields.io/badge/Video-Tutorial-red)](https://youtu.be/p1niyxwsOes)

</div>

ComfyUI-Align provides a powerful set of node alignment, stretching, and color configuration tools, addressing the lack of node alignment functionality in ComfyUI

> _If this plugin has helped preserve your sanity, please consider giving a ⭐ to sustain the caffeine habit._

## Environment

- ComfyUI: Tested on version 0.3.76; theoretically supports recent and future versions.
- Python: Tested on Python 3.12
- System: Tested on Windows 11 and Ubuntu 25.10. Other Linux distributions should work; please test yourself. Theoretically supports macOS, but it’s untested due to lack of a device.

## Install

- **From ComfyUI Manager:** Search for "ComfyUI-Align" in ComfyUI Manager and install.
- **Git Clone:** Open ComfyUI directory, navigate to `custom_nodes` folder, and run:
  ```bash
  git clone https://github.com/Moooonet/ComfyUI-Align.git
  ```
- **Restart ComfyUI:** After installation, restart ComfyUI to load the new plugin.

## Settings and Usage

- **Shortcut Key:** Default is the backquote key <kbd>`</kbd>, for multi-system compatibility, the custom shortcut key is implemented using ComfyUI's native feature. Please search for "Align Panel" in Keybindings to set a custom shortcut key.

<div align="center">
  <img src="https://moooonet.github.io/assets/Comfy-Align/images/keybindings.jpg" width="100%">
</div>

- **Two Operation Modes:**
- 1. Use <kbd>`</kbd> to toggle the visibility of the alignment panel. (Backtick key, located above the Tab key)
- 2. Enable Hold Mode in Settings (hold the shortcut to show the panel; hover over a button and release the key to execute without clicking; or hold the key and click different buttons to perform multiple operations).

<div align="center">
  <img src="https://moooonet.github.io/assets/Comfy-Align/images/settings.jpg" width="100%">
</div>

## Main Features

### 1. Node and Group Alignment, Distribution, and Stretching

- **Alignment:**

  - **Left Align, Right Align, Top Align, Bottom Align:**
  - `Alt` Key: Holding <kbd>Alt</kbd> while aligning reverses the target nodes.

- **Distribution:**

  - **Horizontal Top Align Distribution:** Distribute nodes evenly horizontally first, then top-align.
  - **Vertical Center Align Distribution:** Distribute nodes evenly vertically first, then center-align.
  - **Spacing Setting:** Set spacing in the `Align` options.

- **Stretching:**
  - **Left Stretch, Right Stretch, Top Stretch, Bottom Stretch:**
  - **Horizontal Bilateral Stretch:** The widest node is the target, and other nodes stretch to the left and right of the target node, maintaining their width.
  - **Vertical Bilateral Stretch:** The tallest node is the target, and other nodes stretch to the top and bottom of the target node, maintaining their height.
  - **`Alt` Key:** Holding <kbd>Alt</kbd> while stretching reverses the target nodes.

### 2. Node and Group Color Management

- **ColorBar:**

  - 7 default colors
  - Moon icon (To open ColorPicker)
  - Clear color (clear the color of selected nodes)
  - Apply color (apply the color from presets to the corresponding nodes)

- **ColorPicker:**

  - Color selection area
  - Eyedropper tool
  - Hue slider
  - Alpha slider
  - HEX value (click to copy, double-click to edit)
  - RGBA value (click to copy, double-click to edit. Hold Ctrl to copy all values)
  - Color history
  - Color presets

- **ColorPresets:**
  - Initially, a `color_presets.json` file will be generated in the plugin root directory to store custom color presets.
  - After setting the color of nodes, click the `Save` button to save the preset.
  - Click the `Clear` button to clear all saved preset colors.
  - Click the `Apply` button to apply the colors from presets to the corresponding nodes. (The `Apply` button is located at the last position of `ColorBar`)

---

<div align="center">
   <a href="https://www.star-history.com/#Moooonet/ComfyUI-Align&Date">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Moooonet/ComfyUI-Align&type=Date&theme=dark" />
      <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Moooonet/ComfyUI-Align&type=Date" />
      <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Moooonet/ComfyUI-Align&type=Date" />
    </picture>
   </a>
</div>

---

<div align="center">
  <p>Unless explicitly authorized, integration, modification, or redistribution in any form is strictly prohibited.</p>
  <p>© 2025 Moooonet. All rights reserved.</p>
</div>
