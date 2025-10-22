<div align="center">
<img src="https://moooonet.github.io/assets/Comfy-Align//images/panel.png" width="100%">
<br><br>

   [![English](https://img.shields.io/badge/Languages-English-blue)](README.md)
   [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-blue)](README_zh.md)
   [![submit issue](https://img.shields.io/badge/Submit-issue-cyan)](https://github.com/Moooonet/Comfy-Align/issues)
</div>

---
ComfyUI-Align provides a powerful set of node alignment, stretching, and color configuration tools, addressing the lack of node alignment functionality in ComfyUI. All features also support node groups.

When using ComfyUI's native color functionality, I noticed it colors both the node's title bar and panel. This adds "color" and "bgcolor" parameters to the corresponding nodes in the workflow, but the background of the parameters within the node remains unchanged (default dark gray). This can lead to two issues:
- Readability problems, making node titles or panel parameters difficult to read (especially with high-brightness or over-saturated colors)
- Ugly visual disharmony between parameter backgrounds and panel colors, creating aesthetically unbearable nodes

This is why this plugin's color management defaults to only changing the title bar background - making different nodes immediately distinguishable while keeping the workflow clean. This inspiration comes from Blender.

However, you can still configure how colors are applied in the settings:
- **Apply color to node header** - Apply color to the node title bar (checked by default)
- **Apply color to node panel (background)** - Apply color to the node panel (background area)

<div align="left">
  <p>
    <span>Video tutorials:</span>
    <a href="https://youtu.be/p1niyxwsOes">Youtube</a> |
    <a href="https://www.bilibili.com/video/BV1XJ53zuE2g">BiliBili</a>
  </p>
</div>

Tested on ComfyUI Desktop version and portable package - smoother than OCD grid alignment. Happy pixel-perfect aligning!

> *If this plugin successfully preserved your sanity: please leave a ⭐ (used to maintain caffeine dependency)*


## Features
The following features support both nodes and groups
- **Basic Alignment** - Align nodes or groups to top, bottom, left, or right
- **Basic Stretching** - Stretch nodes or groups to top, bottom, left, or right
- **Equal Distribution** - By default, horizontally or vertically distribute nodes or groups with equal spacing, using the leftmost node as the target
- **Dual-side Stretching** - By default, stretch nodes or groups simultaneously left-right or top-bottom, using the widest/tallest node as the target
- **Node Coloring** - Change the color of node titles or backgrounds, supports node group coloring
- **Advanced Color Picker** - Click the moon icon to open the Color Picker panel, supports area color selection, eyedropper, hue, and transparency
- **Color Presets** - The Color Picker panel supports saving custom color presets and applying color presets with one click

## Installation

```bash
   cd ComfyUI/custom_nodes

   git clone https://github.com/Moooonet/ComfyUI-Align.git
   ```

## Usage
### Default Operation Method  
- Hold `Alt+A` to activate the cross panel.  
- Hold the `Alt` key to reverse alignment and stretching.  

### Smoother Operation Method  
- Check `Hold Shortcut Mode` and change the shortcut key to `Tab` or `~` (it is recommended to set it to `~` to avoid shortcut conflicts).  
- Hold `~ + Alt` to reverse alignment and stretching.

### Advanced Alignment and Stretching Tips
Hold the `Alt` key for reverse operations, for example:
- **Horizontal Equal Distribution** - By default, nodes or groups are equally distributed with the leftmost node or group as the target; when holding the `Alt` key, the rightmost node or group becomes the target
- **Vertical Equal Distribution** - By default, nodes or groups are equally distributed with the topmost node or group as the target; when holding the `Alt` key, the bottommost node or group becomes the target
- **Horizontal Dual-side Stretching** - By default, horizontal stretching uses the widest node or group as the target; when holding the `Alt` key, the narrowest node or group becomes the target
- **Vertical Dual-side Stretching** - By default, vertical stretching uses the tallest node or group as the target; when holding the `Alt` key, the shortest node or group becomes the target

When a single node group is selected:
  - Basic top, bottom, left, and right alignment operations will constrain nodes within that node group (requires selecting both the node group and nodes within it)
  - Stretching operations will stretch the node group edges to fit the edges of the nodes within it (only requires selecting the node group)

### Advanced Color Picker
- **Area Color** - Adjust color brightness and saturation
- **Eyedropper Tool** - Pick colors from the screen
- **Hue Slider** - Adjust hue
- **Transparency Slider** - Adjust color transparency
- **Color Presets** - Without selecting a node, click Save to save all node colors to a preset, click Apply to apply colors from the preset to corresponding nodes. The Save and Apply buttons are only valid when a node is selected
- **Delete Presets** - Click Clear to delete all colors in the preset. Right-click on any color in the preset color list to delete a specific color.

## Parameter Configuration
<div align="center">
  <img src="https://moooonet.github.io/assets/Comfy-Align/images/newSetting.png" width="100%">
</div>

- **Color Application**
  - **Apply color to node header** - Change the color of the node title bar (checked by default)
  - **Apply color to node panel** - Change the color of the node panel (check according to personal preference)

- **Spacing Settings**
  - Node Horizontal Spacing
  - Node Vertical Spacing
  - Group Horizontal Spacing
  - Group Vertical Spacing


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
