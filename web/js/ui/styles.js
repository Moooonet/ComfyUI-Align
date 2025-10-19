import { state } from '../core/state.js';

export function injectStyles() {
  if (state.styleElement) return;

  state.styleElement = document.createElement('style');
  state.styleElement.textContent = `
    .aligner-container {
      position: fixed;
      z-index: 99999;
      pointer-events: none;
      display: none;
      filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3));
    }
    .aligner-icon {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      cursor: pointer;
      border-radius: 6px;
      pointer-events: auto;
    }
    [data-type="align"]:hover .aligner-icon-bg,
    [data-type="stretch"]:hover .aligner-icon-bg {
      background: rgba(255, 255, 255, 0.5) !important;
      background-color: rgba(255, 255, 255, 0.5) !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .aligner-icon:hover {
      transform: scale(1.05);
      z-index: 10;
    }
    [data-type="align"]:hover svg path,
    [data-type="stretch"]:hover svg path {
      fill: rgba(0, 0, 0, 0.85) !important;
    }
    .aligner-icon-circle {
      position: relative !important;
      transform: none !important;
      margin: 0 4px !important;
      border-radius: 50%;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
      transition: all 0.2s ease;
    }
    .aligner-icon-circle:hover {
      transform: scale(1.15) !important;
    }
    .aligner-icon-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: rgba(12, 12, 12, 0.95);
      transition: all 0.3s ease;
    }
    .aligner-icon svg {
      width: 60%;
      height: 60%;
      margin: 20%;
      transition: all 0.3s ease;
      z-index: 2;
    }
    .aligner-icon svg path {
      transition: all 0.3s ease;
    }
    .aligner-icon-circle .aligner-icon-bg {
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      transition: all 0.3s ease;
    }
    [data-id="redCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(169, 50, 50, 0.6);
    }
    [data-id="orangeCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(121, 70, 29, 0.6);
    }
    [data-id="yellowCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(110, 110, 29, 0.6);
    }
    [data-id="greenCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(43, 101, 43, 0.6);
    }
    [data-id="cyanCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(36, 131, 130, 0.6);
    }
    [data-id="blueCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(36, 98, 131, 0.6);
    }
    [data-id="purpleCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(60, 60, 131, 0.6);
    }
    [data-id="moonCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(255, 215, 0, 0.6);
    }
    [data-id="clearCircle"]:hover .aligner-icon-bg {
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.4);
    }
    .color-circles-container {
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      gap: 0;
      padding: 6px 10px;
      pointer-events: auto;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 12px;
      width: auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .aligner-notification {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 14px;
      z-index: 10000;
      transition: opacity 0.3s ease;
      background-color: rgba(220, 53, 69, 0.75);
      color: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .aligner-color-picker {
      position: fixed;
      z-index: 100000;
      background: rgba(30, 30, 30, 0.95);
      border-radius: 8px;
      padding: 0;
      width: 350px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-family: Arial, sans-serif;
      color: #fff;
    }

    .aligner-color-picker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      cursor: move;
      border-radius: 8px 8px 0 0;
      background: rgba(40, 40, 40, 0.95);
    }

    .aligner-color-picker-title {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
    }

    .aligner-color-picker-close {
      width: 16px;
      height: 16px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      transition: background 0.2s;
    }

    .aligner-color-picker-close:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .aligner-color-picker-close:before,
    .aligner-color-picker-close:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 2px;
      background: #fff;
    }

    .aligner-color-picker-close:before {
      transform: rotate(45deg);
    }

    .aligner-color-picker-close:after {
      transform: rotate(-45deg);
    }

    .aligner-color-picker-content {
      padding: 15px 15px 5px 15px;
    }

    .aligner-color-area {
      position: relative;
      width: 100%;
      height: 160px;
      margin-bottom: 15px;
      border-radius: 4px;
      overflow: visible !important;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .aligner-color-canvas {
      width: 100%;
      height: 100%;
      cursor: crosshair;
    }

    .aligner-color-indicator {
      position: absolute;
      width: 14px;
      height: 14px;
      transform: translate(-7px, -7px);
      pointer-events: none;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.9), inset 0 0 3px rgba(0, 0, 0, 0.5);
      z-index: 10;
    }

    .aligner-sliders-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      position: relative;
      padding-left: 40px;
      height: 30px;
      justify-content: space-between;
    }

    .aligner-hue-container, .aligner-opacity-container {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      height: 8px;
    }

    .aligner-hue-container {
      align-self: flex-start;
    }

    .aligner-opacity-container {
      align-self: flex-end;
    }

    .aligner-eyedropper-button {
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      background: rgba(50, 50, 50, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0;
      z-index: 1;
    }

    .aligner-eyedropper-button:hover {
      background: rgba(70, 70, 70, 0.7);
    }

    .aligner-eyedropper-button svg {
      width: 18px;
      height: 18px;
      fill: #ccc;
    }

    .aligner-hue-slider, .aligner-opacity-slider {
      width: 100%;
      height: 8px;
      -webkit-appearance: none;
      border-radius: 4px;
      outline: none;
      position: relative;
    }

    .aligner-hue-slider {
      background: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
    }

    .aligner-opacity-slider {
      background-image:
        linear-gradient(45deg, #ccc 25%, transparent 25%),
        linear-gradient(-45deg, #ccc 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #ccc 75%),
        linear-gradient(-45deg, transparent 75%, #ccc 75%),
        linear-gradient(to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 100%);
      background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px, 100% 100%;
      background-position: 0 0, 0 4px, 4px -4px, -4px 0px, 0 0;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .aligner-hue-slider::-webkit-slider-thumb, .aligner-opacity-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      border: 2px solid rgba(0, 0, 0, 0.3);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      position: relative;
      z-index: 2;
      margin-top: 0px;
    }

    .aligner-slider-value {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 2px 6px;
      border-radius: 10px;
      font-size: 12px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 3;
    }

    .aligner-slider-value.visible {
      opacity: 1;
    }

    .aligner-color-values {
      display: flex;
      margin-top: 15px;
      margin-bottom: 15px;
      justify-content: space-between;
      padding: 0;
    }

    .aligner-color-value-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 3px;
    }

    .aligner-color-value-input {
      width: 100%;
      padding: 5px;
      background: rgba(50, 50, 50, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      color: #fff;
      text-align: center;
      font-size: 12px;
    }

    .aligner-color-value-label {
      font-size: 10px;
      color: #aaa;
      margin-top: 3px;
    }

    .aligner-color-rgb-container {
      display: flex;
      flex: 3;
      margin-left: 5px;
    }

    .aligner-presets-container {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 10px;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
      margin-bottom: 5px;
    }

    .aligner-presets-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .aligner-presets-title {
      font-size: 14px;
      color:rgba(166, 166, 166, 0.86);
    }

    .aligner-presets-buttons {
      display: flex;
      gap: 5px;
      margin-left: auto;
    }

    .aligner-bottom-buttons-container {
      display: flex;
      justify-content: space-between;
      padding: 5px 0 0 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .aligner-save-preset-button,
    .aligner-apply-preset-button,
    .aligner-clear-preset-button {
      background: rgba(60, 60, 60, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      border-radius: 4px;
      padding: 0 10px;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.2s ease;
      height: 24px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      margin-top: 5px;
    }

    .aligner-bottom-buttons-container .aligner-clear-preset-button {
      margin-left: 0;
      margin-right: auto;
    }

    .aligner-bottom-buttons-container .aligner-save-preset-button {
      margin-left: auto;
      margin-right: 4px;
    }

    .aligner-bottom-buttons-container .aligner-apply-preset-button {
      margin-right: 0;
    }

    .aligner-save-preset-button:hover,
    .aligner-apply-preset-button:hover,
    .aligner-clear-preset-button:hover {
      background: rgba(80, 80, 80, 0.7);
    }

    .aligner-preset-option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 8px;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .aligner-preset-option:hover {
      background: rgba(60, 60, 60, 0.7);
    }

    /* Delete preset button styles removed */

    .aligner-presets-grid {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 0;
      padding-right: 0;
    }

    .aligner-preset-group {
      display: flex;
      gap: 4px;
      padding: 4px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(40, 40, 40, 0.5);
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .aligner-preset-group:hover {
      background: rgba(60, 60, 60, 0.7);
    }

    .aligner-preset-swatch {
      width: 22px;
      height: 22px;
      border-radius: 3px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: transform 0.2s ease;
      justify-self: center;
      align-self: center;
      position: relative;
    }

    .aligner-preset-swatch:hover {
      transform: scale(1.1);
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    }

    .aligner-preset-swatch.placeholder {
      position: relative;
      cursor: default;
    }

    .aligner-preset-swatch.placeholder:hover {
      transform: none;
      box-shadow: none;
    }

    .aligner-preset-swatch.placeholder::after {
      content: '+';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(255, 255, 255, 0.3);
      font-size: 14px;
      font-weight: 300;
    }

    .aligner-swatch-tooltip {
      position: absolute;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(30, 30, 30, 0.9);
      color: #fff;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.3px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
      z-index: 100002;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      transform-origin: bottom center;
      min-width: 80px;
      text-align: center;
      animation-duration: 0.2s;
      animation-timing-function: ease-out;
      transform: translateX(-50%) scale(0.95);
    }

    .aligner-swatch-tooltip::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -6px;
      border-width: 6px;
      border-style: solid;
      border-color: rgba(30, 30, 30, 0.9) transparent transparent transparent;
      filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
    }

    .aligner-preset-swatch:hover .aligner-swatch-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(-2px) scale(1);
    }

    .aligner-presets-empty {
      text-align: left;
      color: #aaa;
      font-size: 12px;
      padding: 10px 0;
      width: 100%;
      white-space: normal;
      box-sizing: border-box;
    }

    .aligner-context-menu {
      position: fixed;
      z-index: 100001;
      background: rgba(40, 40, 40, 0.95);
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);
      overflow: hidden;
      min-width: 120px;
    }

    .aligner-context-menu-item {
      padding: 8px 12px;
      color: #fff;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .aligner-context-menu-item:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    /* Custom Dialog Styles */
    .aligner-custom-dialog {
      position: fixed;
      z-index: 100002;
      background: rgba(30, 30, 30, 0.95);
      border-radius: 8px;
      padding: 20px;
      width: 300px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-family: Arial, sans-serif;
      color: #fff;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.95);
      opacity: 0;
      transition: all 0.2s ease;
    }

    .aligner-custom-dialog.visible {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .aligner-dialog-message {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.5;
    }

    .aligner-dialog-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    .aligner-dialog-button {
      background: rgba(60, 60, 60, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      border-radius: 4px;
      padding: 0 15px;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.2s ease;
      height: 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 80px;
    }

    .aligner-dialog-button:hover {
      background: rgba(80, 80, 80, 0.7);
    }

    .aligner-dialog-button.confirm {
      background: rgba(169, 50, 50, 0.7);
    }

    .aligner-dialog-button.confirm:hover {
      background: rgba(189, 70, 70, 0.7);
    }

    .aligner-color-picker-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      margin-left: 4px;
      cursor: pointer;
      border-radius: 4px;
      background: rgba(50, 50, 50, 0.7);
      transition: background 0.2s ease;
    }

    .aligner-color-picker-toggle:hover {
      background: rgba(80, 80, 80, 0.7);
    }

    .aligner-color-picker-toggle svg {
      width: 16px;
      height: 16px;
      fill: #ccc;
    }

    /* About panel styles - Exceptional Aesthetics */
    .aligner-about-panel {
      position: fixed;
      z-index: 100001;
      background: rgba(30, 30, 30, 0.95);
      border-radius: 12px;
      padding: 0;
      width: 500px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      font-family: 'Segoe UI', Arial, sans-serif;
      color: #fff;
      overflow: hidden;
      animation: panelFadeIn 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      transform-origin: center center;
    }

    @keyframes panelFadeIn {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }

    .aligner-about-panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(255, 215, 0, 0.15);
      background: rgba(30, 30, 30, 0.95);
      position: relative;
      overflow: hidden;
      cursor: move;
      user-select: none;
    }

    .aligner-about-panel-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg,
        rgba(255, 215, 0, 0) 0%,
        rgba(255, 215, 0, 0.5) 50%,
        rgba(255, 215, 0, 0) 100%);
    }

    .aligner-about-panel-title {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      letter-spacing: 0.5px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      position: relative;
      padding-left: 28px;
    }

    .aligner-about-panel-title::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%23ffd700' d='M570.715429 273.28c5.138286 0 8.137143-3.419429 8.996571-8.137143 13.293714-71.131429 12.854857-72.850286 87.003429-87.424 5.138286-0.859429 8.137143-3.437714 8.137142-8.576 0-5.577143-2.998857-8.137143-8.137142-8.996571-74.148571-14.994286-73.709714-16.274286-87.003429-87.424-0.859429-4.717714-3.84-8.155429-8.996571-8.155429-5.138286 0-7.716571 3.437714-8.576 8.155429-13.714286 71.131429-12.854857 72.411429-87.424 87.405714-4.717714 0.877714-8.137143 3.437714-8.137143 9.014857 0 5.138286 3.419429 7.716571 8.137143 8.576 75.008 14.573714 73.709714 16.274286 87.424 87.424 0.859429 4.717714 3.437714 8.137143 8.576 8.137143zM776.009143 563.017143c7.698286 0 13.275429-5.577143 14.134857-13.714286 14.134857-114.852571 19.712-118.290286 135.862857-136.283428 9.417143-1.718857 14.994286-5.997714 14.994286-14.573715 0-8.137143-5.577143-13.293714-13.293714-14.573714-116.992-22.290286-123.428571-21.430857-137.563429-136.283429-0.859429-8.137143-6.436571-13.714286-14.134857-13.714285-8.155429 0-13.714286 5.577143-14.573714 13.293714-14.994286 116.132571-18.870857 119.990857-137.581715 136.704-7.716571 0.859429-13.275429 6.436571-13.275428 14.573714 0 8.137143 5.558857 12.854857 13.275428 14.573715 118.710857 21.851429 123.008 22.290286 137.581715 137.142857a14.153143 14.153143 0 0 0 14.573714 12.854857zM453.266286 959.451429c155.136 0 279.003429-78.445714 338.139428-210.432 7.296-15.853714 5.997714-29.568-1.700571-36.864-6.857143-6.418286-18.870857-7.277714-32.146286-2.56-34.724571 13.714286-75.428571 20.571429-122.148571 20.571428-194.56 0-318.848-121.728-318.848-311.588571 0-53.997714 10.276571-105.837714 23.570285-132.425143 7.277714-14.994286 7.277714-27.849143 0.841143-35.986286-7.698286-8.594286-21.412571-9.874286-38.125714-3.437714C171.282286 298.569143 82.998857 438.308571 82.998857 595.145143c0 208.713143 153.856 364.288 370.285714 364.288z'/%3E%3C/svg%3E");
      background-size: contain;
      background-repeat: no-repeat;
    }

    .aligner-about-panel-close {
      width: 24px;
      height: 24px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .aligner-about-panel-close:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: rotate(90deg);
    }

    .aligner-about-panel-close:before,
    .aligner-about-panel-close:after {
      content: '';
      position: absolute;
      width: 12px;
      height: 2px;
      background: rgba(255, 255, 255, 0.9);
      transition: background 0.2s;
    }

    .aligner-about-panel-close:before {
      transform: rotate(45deg);
    }

    .aligner-about-panel-close:after {
      transform: rotate(-45deg);
    }

    .aligner-about-panel-content {
      padding: 20px 15px;
      position: relative;
      overflow: hidden;
    }

    .aligner-about-panel-content::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, rgba(255, 215, 0, 0) 70%);
      pointer-events: none;
      z-index: -1;
    }

    .aligner-about-panel-message {
      font-size: 14px;
      line-height: 1.7;
      margin: 10px 15px 25px 15px;
      color: rgba(255, 255, 255, 0.9);
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
      position: relative;
      padding: 0 4px;
      font-weight: 300;
      letter-spacing: 0.2px;
      text-align: center;
    }

    .aligner-about-panel-message p:first-of-type {
      margin-bottom: 15px;
      font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
      letter-spacing: 0.5px;
    }

    .aligner-about-panel-message p:last-of-type {
      font-style: italic;
      font-family: 'Segoe UI', 'Arial', sans-serif;
    }

    .aligner-about-panel-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      gap: 8px;
      justify-content: center;
      padding: 0 15px;
      margin-bottom: 15px;
    }

    .aligner-about-panel-link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 5px;
      background: rgba(40, 40, 50, 0.5);
      border-radius: 8px;
      text-decoration: none;
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s ease, transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      border: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(4px);
      text-align: center;
      min-height: 20px;
      opacity: 0;
      transform: translateY(20px);
      will-change: transform, opacity;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .aligner-about-panel-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .aligner-about-panel-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15);
    }

    .aligner-about-panel-link:hover::before {
      opacity: 1;
    }

    .aligner-about-panel-link svg {
      width: 18px;
      height: 18px;
      margin-right: 6px;
      fill: currentColor;
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
      flex-shrink: 0;
    }

    .aligner-about-panel-link span {
      position: relative;
      z-index: 1;
    }

    .youtube-link {
      color: #ff0000;
      border-color: rgba(255, 0, 0, 0.3);
    }

    .kofi-link {
      color: #29abe0;
      border-color: rgba(41, 171, 224, 0.3);
    }

    .afdian-link {
      color: #946ce6;
      border-color: rgba(148, 108, 230, 0.3);
    }

    .youtube-link:hover {
      background: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(40, 40, 50, 0.5) 100%);
    }

    .bilibili-link {
      color: #00a1d6;
      border-color: rgba(0, 161, 214, 0.3);
    }

    .bilibili-link:hover {
      background: linear-gradient(135deg, rgba(0, 161, 214, 0.15) 0%, rgba(40, 40, 50, 0.5) 100%);
    }

    .github-link {
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
    }

    .github-link:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(40, 40, 50, 0.5) 100%);
    }

    .kofi-link:hover {
      background: linear-gradient(135deg, rgba(41, 171, 224, 0.15) 0%, rgba(40, 40, 50, 0.5) 100%);
    }

    .afdian-link:hover {
      background: linear-gradient(135deg, rgba(148, 108, 230, 0.15) 0%, rgba(40, 40, 50, 0.5) 100%);
    }

    .aligner-moon-icon {
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .aligner-moon-icon:hover {
      transform: scale(1.15) rotate(10deg);
    }

    .aligner-moon-icon svg {
      filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.3));
    }

    .aligner-moon-icon::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%);
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: -1;
    }

    .aligner-moon-icon:hover::after {
      opacity: 1;
    }
  `;
  document.head.appendChild(state.styleElement);
}
