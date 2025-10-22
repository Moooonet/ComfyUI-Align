<div align="center">
<img src="https://moooonet.github.io/assets/Comfy-Align//images/panel.png" width="100%">
<br><br>

   [![English](https://img.shields.io/badge/Languages-English-blue)](README.md)
   [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-blue)](README_zh.md)
   [![submit issue](https://img.shields.io/badge/Submit-issue-cyan)](https://github.com/Moooonet/Comfy-Align/issues)
</div>

---
ComfyUI-Align提供了一套强大的节点对齐-拉伸-色彩配置工具，弥补了ComfyUI没有节点对齐功能的缺陷，所有功能同时支持节点组。

在使用ComfyUI原生的色彩功能时，我注意到它会同时染色节点的标题栏和面板。这会在工作流的相应节点中添加"color"和"bgcolor"参数，但节点内的各项参数的背景保持不变（默认为深灰色）。这可能导致两个问题：
- 可读性问题，使节点标题或面板参数难以阅读（尤其是高亮度或过饱和的颜色）
- 参数背景和面板颜色之间的丑陋视觉不协调，创造出美学上难以忍受的节点

这就是为什么本插件的颜色管理默认只改变标题栏背景 - 使不同节点立即可区分，同时保持工作流的整洁。这一灵感来自Blender

但是，您仍然还可以在设置中配置颜色应用方式：
- **Apply color to node header** - 对节点标题栏应用颜色（默认勾选）
- **Apply color to node panel (background)** - 对节点面板（背景区域）应用颜色

<div align="left">
  <p>
    <span>视频教程：</span>
    <a href="https://youtu.be/p1niyxwsOes">Youtube</a> |
    <a href="https://www.bilibili.com/video/BV1XJ53zuE2g">BiliBili</a>
  </p>
</div>

已在ComfyUI Desktop版和官方便携包完成测试 - 运行比强迫症对齐的网格还要丝滑。祝各位像素对齐愉快！

> *若本插件成功守护了您的理智： 请来颗⭐（用于维持咖啡因依赖）*


## 功能
以下功能均支持节点和组
- **基本对齐** - 对节点或组进行上下左右对齐
- **基本拉伸** - 对节点或组进行上下左右拉伸
- **等距分布** - 默认以最左侧节点为目标，对节点或组进行水平或垂直等距分布对齐
- **双侧拉伸** - 默认以最宽/最高节点为目标，对节点或组进行左右或上下同时拉伸
- **节点换色** - 对节点标题或背景进行换色，支持节点组换色
- **高级取色** - 点击月亮图标打开Color Picker面板，支持区域颜色选择，吸管，色相，透明度
- **颜色预设** - Color Picker面板支持保存自定义颜色预设，支持一键应用颜色预设

## 安装

```bash
   cd ComfyUI/custom_nodes

   git clone https://github.com/Moooonet/ComfyUI-Align.git
   ```

## 使用方法
### 默认操作方法（更新且推荐）
- 按住`~`激活十字面板
- 经测试，该快捷键`~`发生冲突的可能性最小，你仍然可以修改为之前的传统操作方式或与[视频教学](https://www.bilibili.com/video/BV1XJ53zuE2g)中一致的`Tab`键来触发十字面板

### 传统操作方法
- 取消勾选`Hold Shortcut Mode`，将快捷键改为`Alt+A`

### 对齐与拉伸高级技巧
按住`Alt`键反向操作，举例来说：
- **水平等距对齐** - 默认以左侧节点或组为目标等距分布对齐，按住`Alt`键时，则以右侧节点或组为目标
- **垂直等距对齐** - 默认以顶部节点或组为目标等距分布对齐，按住`Alt`键时，则以底部节点或组为目标
- **水平双侧拉伸** - 默认以最宽节点或组为目标进行水平拉伸，按住`Alt`键时，则以最窄节点或组为目标
- **垂直双侧拉伸** - 默认以最高节点或组为目标进行垂直拉伸，按住`Alt`键时，则以最矮节点或组为目标

选中单个节点组时
  - 上下左右基础对齐操作将会把节点限制在该节点组内（需同时选中该节点组和组内的节点）
  - 拉伸操作将会拉伸节点组边缘以贴合组内节点边缘（只需选中该节点组）

### 高级取色器
- **区域颜色** - 调整颜色明度、饱和度
- **吸管工具** - 吸取屏幕颜色
- **色相滑块** - 调整色相
- **透明度滑块** - 调整颜色透明度
- **颜色预设** - 没有选中节点时，点击Save，会将工作流中所有节点颜色保存到预设中，点击Apply，将预设中的颜色应用到对应节点。在选中节点的情况下，保存和应用按钮只对该节点有效
- **删除预设** - 点击Clear，删除预设中的所有颜色。右键单击预设颜色列表中的任意颜色，可删除指定颜色。

## 参数配置
<div align="center">
  <img src="https://moooonet.github.io/assets/Comfy-Align/images/newSetting.png" width="100%">
</div>

- **颜色应用**
  - **Apply color to node header** - 改变节点标题栏颜色 (默认勾选)
  - **Apply color to node panel** - 改变节点面板颜色（按个人喜好勾选）

- **快捷键**
  - **默认快捷键** - `~`
  - **反向操作** - `~ + Alt`

- **间距设置**
  - 节点水平间距 (Node Horizontal Spacing)
  - 节点垂直间距 (Node Vertical Spacing)
  - 节点组水平间距 (Group Horizontal Spacing)
  - 节点组垂直间距 (Group Vertical Spacing)


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
  <p>未经明确授权，严禁以任何形式进行集成、修改或再分发。</p>
  <p>© 2025 Moooonet. All rights reserved.</p>
</div>
