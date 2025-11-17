<div align="center">
<img src="https://moooonet.github.io/assets/Comfy-Align//images/display.jpg" width="100%">
<br><br>

[![English](https://img.shields.io/badge/Languages-English-blue)](README.md)
[![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-blue)](README_zh.md)
[![submit issue](https://img.shields.io/badge/Submit-issue-cyan)](https://github.com/Moooonet/Comfy-Align/issues)

</div>

<div align="left">
  <p>
    <span>Video tutorials:</span>
    <a href="https://youtu.be/p1niyxwsOes">Youtube</a> |
    <a href="https://www.bilibili.com/video/BV1XJ53zuE2g">BiliBili</a>
  </p>
</div>

> _如果这个插件成功保住了你的理智，请赏个 ⭐ 用来维持咖啡因依赖_

## 更新说明

- **v3.0.0:**
  - 采用 Vite + React + Typescript 完全重构以支持不同系统。
  - 新增支持 Firefox 浏览器(但因 Firefox 不支持 EyeDropper API, 所以吸管工具无法在 Firefox 中使用)。
  - 快捷键设置采用 ComfyUI 原生实现
  - ColorPicker 新增历史记录、点击复制 HEX 和 RGBA 值，双击修改
  - 更美观的界面

## 运行环境相关

- **ComfyUI:** 在 0.3.67 版本测试通过，理论上支持近期及未来版本
- **Python:** 测试环境为 Python 3.12
- **系统:** 测试环境为 Windows 11、Ubuntu 25.10, 其它 Linux 版本请自行测试。（理论上支持 MacOS，但本人无 MacOS 设备，未在 MacOS 上测试）

## 安装

- **从 ComfyUI Manager 安装**
- **Git Clone:** 打开 ComfyUI 目录，进入 `custom_nodes` 目录，执行以下命令克隆插件仓库：
  ```bash
  git clone https://github.com/yourusername/comfyui-Align.git
  ```
- **重启 ComfyUI:** 安装完成后，重启 ComfyUI 以加载新插件。

## 设置与运行

- **快捷键:** 默认为"`"键，为了支持多系统，自定义快捷键改用 ComfyUI 原生实现，请在下方 Keybindings 中搜索 Align Panel 设置自定义快捷键。
<div align="center">
  <img src="https://moooonet.github.io/assets/Comfy-Align/images/keybindings.jpg" width="100%">
</div>

- **两种操作方式:**
- 1. 使用默认快捷键"`"键切换对齐面板的显示和隐藏。（反引号，位于 Tab 键上方）
- 2. 在设置中勾选`Hold Mode`（按住快捷键显示面板，鼠标移到对应的按钮上不需要点击，直接松开快捷键即可执行操作，也可以按住快捷键点击不同按钮执行多次操作）
  <div align="center">
    <img src="https://moooonet.github.io/assets/Comfy-Align/images/settings.jpg" width="100%">
  </div>

## 主要功能

### 1. 节点和组的对齐，分布，拉伸

- **对齐:**

  - **左对齐、右对齐、顶对齐、底对齐:**
  - `Alt` 键：在执行对齐操作时按住 `Alt` 键，可以反转目标节点。

- **分布:**

  - **水平顶对齐分布：** 先水平等距分布，再顶对齐。
  - **垂直居中对齐分布：** 先垂直等距分布，再居中对齐。
  - **间距设置：** 在`Align`选项中设置间距。

- **拉伸:**
  - **左拉伸、右拉伸、上拉伸、下拉伸：**
  - **水平双侧拉伸：** 已最宽节点为目标，其他节点向目标节点的左侧和右侧拉伸，保持节点的宽度不变。
  - **垂直双侧拉伸：** 已最高节点为目标，其他节点向目标节点的顶部和底部拉伸，保持节点的高度不变。
  - **`Alt`键：** 在执行拉伸操作时按住 `Alt` 键，可以反转目标节点。

### 2. 节点和组的颜色管理

- **ColorBar:**

  - 7 个默认颜色
  - Moon 图标 (打开 ColorPicker)
  - 清除颜色 (清除选中节点的颜色)
  - 应用颜色 (将预设中的颜色应用到对应的节点)

- **ColorPicker:**

  - 颜色选择区域
  - 吸管
  - 色相
  - 透明度
  - HEX 值（单击复制值，双击修改）
  - RGBA 值（单击复制值，双击修改。按住 Ctrl+单击复制所有值）
  - 历史记录
  - 颜色预设

- **ColorPresets:**
  - 初次运行时会在插件根目录生成`color_presets.json`文件，用于存储自定义的颜色预设。
  - 设置好节点颜色后，点击`Save`按钮保存预设中。
  - 点击`Clear`按钮清除所有保存的预设颜色。
  - 点击`Apply`按钮将预设中的颜色应用到对应的节点。（`Apply`按钮位于`ColorBar`最后一个位置）

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
