
<div align="right">
  <details>
    <summary >🌐 Language</summary>
    <div>
      <div align="center">
        <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=en">English</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=zh-CN">简体中文</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=zh-TW">繁體中文</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=it">Italiano</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=id">Bahasa Indonesia</a>
        | <a href="https://openaitx.github.io/view.html?user=Moooonet&project=ComfyUI-Align&lang=as">অসমীয়া</
      </div>
    </div>
  </details>
</div>

<div align="center">
<img width="100%" height="456" alt="Untitled-1" src="https://github.com/user-attachments/assets/e591e9c2-3183-4fdb-b390-085b9ecb90fd" />

<br><br>

[![Version](https://img.shields.io/badge/Version-3.1.0-cyan)](README.md)
[![Youtube](https://img.shields.io/badge/Video-Tutorial-red)](https://youtu.be/p1niyxwsOes)

</div>

ComfyUI-Align provides a powerful set of node alignment, stretching, and color configuration tools, addressing the lack of node alignment functionality in ComfyUI

> _If this plugin has helped preserve your sanity, please consider giving a ⭐ to sustain the caffeine habit._


## Update Notes
 - Version 3.1.0 adds support for Nodes 2.0
 - Adjusted ColorBar colors to make node titles easier to read
 - Optimized some code

## Environment

- ComfyUI: Tested on version 0.26.0; theoretically supports recent and future versions
- ComfyUI_Frontend: v1.45.19
- Python: Python 3.13.12
- System: Tested on Windows 11 and Ubuntu 25.10. Other Linux distros and macOS should work in theory, but are untested. I lack the resources to set up additional testing environments — please test on your own.

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
  <img width="722" height="763" alt="Untitled-2" src="https://github.com/user-attachments/assets/cb261daf-181d-4509-a4e4-a576a01e9d82" />

</div>

- **Two Operation Modes:**
- 1. Use <kbd>`</kbd> to toggle the visibility of the alignment panel. (Backtick key, located above the Tab key)
- 2. Enable Hold Mode in Settings (hold the shortcut to show the panel; hover over a button and release the key to execute without clicking; or hold the key and click different buttons to perform multiple operations).

<div align="center">
  <img width="720" height="757" alt="Untitled-3" src="https://github.com/user-attachments/assets/e0f751fa-9195-41be-b18b-225b65ac22cc" />
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

  - 9 default colors
  - Clear color (clear the color of selected nodes)
  - Moon icon (To open ColorPicker)

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
  - Click the `Apply` button to apply the colors from presets to the corresponding nodes

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
