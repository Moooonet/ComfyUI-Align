import { ICONS } from "../assets/icons.js";
import { getComfyUIAppInstance, getSelectedNodes } from "../actions/selection.js";

export class Mute {
  constructor(config, dom) {
    this.CONFIG = config;
    this.dom = dom;
    this.element = null;
    this.callback = null;
  }

  create(size) {
    const buttonWrapper = this.dom.createElement('div', 'aligner-icon aligner-icon-circle');
    buttonWrapper.dataset.id = 'muteButton';
    buttonWrapper.dataset.type = 'action';
    buttonWrapper.style.width = `${size}px`;
    buttonWrapper.style.height = `${size}px`;
    buttonWrapper.style.pointerEvents = 'auto';
    buttonWrapper.style.cursor = 'pointer';
    buttonWrapper.style.display = 'flex';
    buttonWrapper.style.alignItems = 'center';
    buttonWrapper.style.justifyContent = 'center';

    const bg = this.dom.createElement('div', 'aligner-icon-bg');
    bg.style.backgroundColor = 'rgba(39, 39, 39, 0.7)';
    bg.style.width = '100%';
    bg.style.height = '100%';
    bg.style.display = 'flex';
    bg.style.alignItems = 'center';
    bg.style.justifyContent = 'center';

    const iconContainer = this.dom.createElement('div');
    iconContainer.style.width = '80%';
    iconContainer.style.height = '80%';
    iconContainer.style.display = 'flex';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.justifyContent = 'center';
    iconContainer.innerHTML = ICONS.mute;

    const svg = iconContainer.querySelector('svg');
    if (svg) {
      svg.style.width = '90%';
      svg.style.height = '90%';
    }

    bg.appendChild(iconContainer);
    buttonWrapper.appendChild(bg);
    this.element = buttonWrapper;

    buttonWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      
      if (this.callback) {
        this.callback();
      }
    });

    return buttonWrapper;
  }

  setCallback(callback) {
    this.callback = callback;
  }
  
  toggleMute = () => {
    return this.toggleNodesMute(getComfyUIAppInstance, getSelectedNodes);
  }
  
  toggleNodesMute(getComfyUIAppInstance, getSelectedNodes) {
    try {
      const appInstance = getComfyUIAppInstance();
      if (!appInstance) {
        return { success: false, message: "Failed to get ComfyUI app instance" };
      }

      const selectedNodes = getSelectedNodes(appInstance);
      if (selectedNodes.length === 0) {
        return { success: false, message: "Please select nodes to toggle mute status" };
      }

      const LGraphEventMode = {
        ALWAYS: 0,
        NEVER: 2,
        BYPASS: 4
      };

      const allMuted = selectedNodes.every(node => node.mode === LGraphEventMode.NEVER);
      
      if (allMuted) {
        selectedNodes.forEach(node => {
          node.mode = LGraphEventMode.ALWAYS;
        });
      } else {
        selectedNodes.forEach(node => {
          if (node.mode !== LGraphEventMode.NEVER) {
            node.mode = LGraphEventMode.NEVER;
          }
        });
      }

      appInstance.graph.setDirtyCanvas(true, true);
      
      return { success: true };
    } catch (error) {
      return { success: false, message: `Operation failed: ${error.message}` };
    }
  }
} 