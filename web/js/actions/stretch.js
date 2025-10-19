import { state } from '../core/state.js';
import { executeNodeOperation } from './operations.js';

export function stretchNodesToLeft() {
  return executeNodeOperation("resizing", nodes => {
    const leftmostX = Math.min(...nodes.map(node => node.pos[0]));
    const isLeftAligned = nodes.every(node => Math.abs(node.pos[0] - leftmostX) < 1);

    if (isLeftAligned) {
      const minWidth = Math.min(...nodes.map(node => node.size[0]));
      nodes.forEach(node => {
        if (node.size[0] > minWidth) {
          node.size[0] = minWidth;
        }
      });
    } else {
      if (state.altKeyPressed) {
        const leftmostNode = nodes.find(node => Math.abs(node.pos[0] - leftmostX) < 1);
        const targetRightEdge = leftmostNode.pos[0] + leftmostNode.size[0];
        
        nodes.forEach(node => {
          if (node.pos[0] > leftmostX) {
            const config = window.alignerPlugin.getConfig();
            const newWidth = Math.max(targetRightEdge - node.pos[0], config.minNodeSize.width);
            node.size[0] = newWidth;
          }
        });
      } else {
        nodes.forEach(node => {
          if (node.pos[0] > leftmostX) {
            const rightEdge = node.pos[0] + node.size[0];
            node.pos[0] = leftmostX;
            const config = window.alignerPlugin.getConfig();
            const newWidth = Math.max(rightEdge - leftmostX, config.minNodeSize.width);
            node.size[0] = newWidth;
          }
        });
      }
    }
  });
}

export function stretchNodesToRight() {
  return executeNodeOperation("resizing", nodes => {
    const rightmostEdge = Math.max(...nodes.map(node => node.pos[0] + node.size[0]));
    const isRightAligned = nodes.every(node =>
      Math.abs((node.pos[0] + node.size[0]) - rightmostEdge) < 1
    );

    if (isRightAligned) {
      const minWidth = Math.min(...nodes.map(node => node.size[0]));
      nodes.forEach(node => {
        if (node.size[0] > minWidth) {
          const rightEdge = node.pos[0] + node.size[0];
          node.size[0] = minWidth;
          node.pos[0] = rightEdge - minWidth;
        }
      });
    } else {
      if (state.altKeyPressed) {
        const rightmostNode = nodes.find(node => 
          Math.abs((node.pos[0] + node.size[0]) - rightmostEdge) < 1
        );
        const targetLeftEdge = rightmostNode.pos[0];
        
        nodes.forEach(node => {
          if (node.pos[0] + node.size[0] < rightmostEdge) {
            const config = window.alignerPlugin.getConfig();
            const currentRightEdge = node.pos[0] + node.size[0];
            const newWidth = Math.max(currentRightEdge - targetLeftEdge, config.minNodeSize.width);
            node.pos[0] = targetLeftEdge;
            node.size[0] = newWidth;
          }
        });
      } else {
        nodes.forEach(node => {
          if (node.pos[0] + node.size[0] < rightmostEdge) {
            const config = window.alignerPlugin.getConfig();
            const newWidth = Math.max(rightmostEdge - node.pos[0], config.minNodeSize.width);
            node.size[0] = newWidth;
          }
        });
      }
    }
  });
}

export function stretchNodesToTop() {
  return executeNodeOperation("resizing", nodes => {
    const topmostY = Math.min(...nodes.map(node => node.pos[1]));
    const isTopAligned = nodes.every(node =>
      Math.abs(node.pos[1] - topmostY) < 1
    );

    if (isTopAligned) {
      const minHeight = Math.min(...nodes.map(node => node.size[1]));
      nodes.forEach(node => {
        if (node.size[1] > minHeight) {
          node.size[1] = minHeight;
        }
      });
    } else {
      if (state.altKeyPressed) {
        const bottommostY = Math.max(...nodes.map(node => node.pos[1]));
        
        nodes.forEach(node => {
          if (node.pos[1] < bottommostY) {
            const config = window.alignerPlugin.getConfig();
            const currentBottomEdge = node.pos[1] + node.size[1];
            const newHeight = Math.max(currentBottomEdge - bottommostY, config.minNodeSize.height);
            node.pos[1] = bottommostY;
            node.size[1] = newHeight;
          }
        });
      } else {
        nodes.forEach(node => {
          if (node.pos[1] > topmostY) {
            const bottomEdge = node.pos[1] + node.size[1];
            node.pos[1] = topmostY;
            const config = window.alignerPlugin.getConfig();
            const newHeight = Math.max(bottomEdge - topmostY, config.minNodeSize.height);
            node.size[1] = newHeight;
          }
        });
      }
    }
  });
}

export function stretchNodesToBottom() {
  return executeNodeOperation("resizing", nodes => {
    const bottommostEdge = Math.max(...nodes.map(node => node.pos[1] + node.size[1]));
    const isBottomAligned = nodes.every(node =>
      Math.abs((node.pos[1] + node.size[1]) - bottommostEdge) < 1
    );

    if (isBottomAligned) {
      const minHeight = Math.min(...nodes.map(node => node.size[1]));
      nodes.forEach(node => {
        if (node.size[1] > minHeight) {
          const bottomEdge = node.pos[1] + node.size[1];
          node.size[1] = minHeight;
          node.pos[1] = bottomEdge - minHeight;
        }
      });
    } else {
      if (state.altKeyPressed) {
        const topmostEdge = Math.min(...nodes.map(node => node.pos[1] + node.size[1]));
        
        nodes.forEach(node => {
          if (node.pos[1] + node.size[1] > topmostEdge) {
            const config = window.alignerPlugin.getConfig();
            const newHeight = Math.max(topmostEdge - node.pos[1], config.minNodeSize.height);
            node.size[1] = newHeight;
          }
        });
      } else {
        nodes.forEach(node => {
          if (node.pos[1] + node.size[1] < bottommostEdge) {
            const config = window.alignerPlugin.getConfig();
            const newHeight = Math.max(bottommostEdge - node.pos[1], config.minNodeSize.height);
            node.size[1] = newHeight;
          }
        });
      }
    }
  });
}

export function stretchNodesHorizontally() {
  return executeNodeOperation("resizing", nodes => {
    let targetWidth;
    if (state.altKeyPressed) {
      targetWidth = Math.min(...nodes.map(node => node.size[0]));
    } else {
      targetWidth = Math.max(...nodes.map(node => node.size[0]));
    }

    const config = window.alignerPlugin.getConfig();
    targetWidth = Math.max(targetWidth, config.minNodeSize.width);

    nodes.forEach(node => {
      if (node.size[0] !== targetWidth) {
        const centerX = node.pos[0] + (node.size[0] / 2);
        node.size[0] = targetWidth;
        node.pos[0] = centerX - (targetWidth / 2);
      }
    });
  });
}

export function stretchNodesVertically() {
  return executeNodeOperation("resizing", nodes => {
    let targetHeight;
    if (state.altKeyPressed) {
      targetHeight = Math.min(...nodes.map(node => node.size[1]));
    } else {
      targetHeight = Math.max(...nodes.map(node => node.size[1]));
    }

    const config = window.alignerPlugin.getConfig();
    targetHeight = Math.max(targetHeight, config.minNodeSize.height);

    nodes.forEach(node => {
      if (node.size[1] !== targetHeight) {
        const centerY = node.pos[1] + (node.size[1] / 2);
        node.size[1] = targetHeight;
        node.pos[1] = centerY - (targetHeight / 2);
      }
    });
  });
}
