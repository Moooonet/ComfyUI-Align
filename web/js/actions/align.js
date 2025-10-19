import { state } from '../core/state.js';
import { executeNodeOperation } from './operations.js';

export function alignNodesToLeft() {
  return executeNodeOperation("alignment", nodes => {
    let targetX;
    if (state.altKeyPressed) {
      targetX = Math.max(...nodes.map(node => node.pos[0]));
    } else {
      targetX = Math.min(...nodes.map(node => node.pos[0]));
    }
    
    nodes.forEach(node => {
      node.pos[0] = targetX;
    });
  });
}

export function alignNodesToRight() {
  return executeNodeOperation("alignment", nodes => {
    let targetRightEdge;
    if (state.altKeyPressed) {
      const leftmostEdge = Math.min(...nodes.map(node => node.pos[0] + node.size[0]));
      targetRightEdge = leftmostEdge;
    } else {
      targetRightEdge = Math.max(...nodes.map(node => node.pos[0] + node.size[0]));
    }
    
    nodes.forEach(node => {
      node.pos[0] = targetRightEdge - node.size[0];
    });
  });
}

export function alignNodesToTop() {
  return executeNodeOperation("alignment", nodes => {
    let targetY;
    if (state.altKeyPressed) {
      targetY = Math.max(...nodes.map(node => node.pos[1]));
    } else {
      targetY = Math.min(...nodes.map(node => node.pos[1]));
    }
    
    nodes.forEach(node => {
      node.pos[1] = targetY;
    });
  });
}

export function alignNodesToBottom() {
  return executeNodeOperation("alignment", nodes => {
    let targetBottomEdge;
    if (state.altKeyPressed) {
      const topmostEdge = Math.min(...nodes.map(node => node.pos[1] + node.size[1]));
      targetBottomEdge = topmostEdge;
    } else {
      targetBottomEdge = Math.max(...nodes.map(node => node.pos[1] + node.size[1]));
    }
    
    nodes.forEach(node => {
      node.pos[1] = targetBottomEdge - node.size[1];
    });
  });
}

export function alignNodesToHorizontalCenter() {
  return executeNodeOperation("alignment", nodes => {
    alignNodesToHorizontalCenterInternal(nodes);
  });
}

export function alignNodesToVerticalCenter() {
  return executeNodeOperation("alignment", nodes => {
    alignNodesToVerticalCenterInternal(nodes);
  });
}

export function alignNodesToHorizontalCenterInternal(nodes) {
  const sortedNodes = [...nodes].sort((a, b) => a.pos[0] - b.pos[0]);
  const nodeWidthSum = sortedNodes.reduce((sum, node) => sum + node.size[0], 0);

  const leftmostX = Math.min(...nodes.map(node => node.pos[0]));
  const rightmostX = Math.max(...nodes.map(node => node.pos[0] + node.size[0]));
  const totalWidth = rightmostX - leftmostX;

  const referenceNode = state.altKeyPressed
    ? sortedNodes[sortedNodes.length - 1]
    : sortedNodes[0];

  const referenceNodeTopY = referenceNode.pos[1];

  nodes.forEach(node => {
    node.pos[1] = referenceNodeTopY;
  });

  const config = window.alignerPlugin.getConfig();
  const spacing = config.horizontalSpacing;
  const safetyMargin = config.safetyMargin.horizontal;
  const effectiveSpacing = spacing + safetyMargin;

  const currentSpacing = effectiveSpacing;

  if (state.altKeyPressed) {
    const rightNodeRightEdge = referenceNode.pos[0] + referenceNode.size[0];

    let currentX = rightNodeRightEdge;

    for (let i = sortedNodes.length - 1; i >= 0; i--) {
      const node = sortedNodes[i];
      currentX -= node.size[0];
      node.pos[0] = currentX;

      if (i > 0) {
        currentX -= currentSpacing;
      }
    }
  } else {
    let currentX = leftmostX;
    sortedNodes.forEach((node, index) => {
      node.pos[0] = currentX;

      if (index < sortedNodes.length - 1) {
        currentX += node.size[0] + currentSpacing;
      }
    });
  }
}

export function alignNodesToVerticalCenterInternal(nodes) {
  const sortedNodes = [...nodes].sort((a, b) => a.pos[1] - b.pos[1]);
  const nodeHeightSum = sortedNodes.reduce((sum, node) => sum + node.size[1], 0);

  const topmostY = Math.min(...nodes.map(node => node.pos[1]));
  const bottommostY = Math.max(...nodes.map(node => node.pos[1] + node.size[1]));
  const totalHeight = bottommostY - topmostY;

  const referenceNode = state.altKeyPressed
    ? sortedNodes[sortedNodes.length - 1]
    : sortedNodes[0];

  const referenceNodeCenterX = referenceNode.pos[0] + (referenceNode.size[0] / 2);

  nodes.forEach(node => {
    const nodeCenterX = node.pos[0] + (node.size[0] / 2);
    const offsetX = referenceNodeCenterX - nodeCenterX;
    node.pos[0] += offsetX;
  });

  const config = window.alignerPlugin.getConfig();
  const spacing = config.verticalSpacing;
  const safetyMargin = config.safetyMargin.vertical;
  const effectiveSpacing = spacing + safetyMargin;

  const currentSpacing = effectiveSpacing;

  if (state.altKeyPressed) {
    const bottomNodeBottomEdge = referenceNode.pos[1] + referenceNode.size[1];

    let currentY = bottomNodeBottomEdge;

    for (let i = sortedNodes.length - 1; i >= 0; i--) {
      const node = sortedNodes[i];
      currentY -= node.size[1];
      node.pos[1] = currentY;

      if (i > 0) {
        currentY -= currentSpacing;
      }
    }
  } else {
    let currentY = topmostY;
    sortedNodes.forEach((node, index) => {
      node.pos[1] = currentY;

      if (index < sortedNodes.length - 1) {
        currentY += node.size[1] + currentSpacing;
      }
    });
  }
}
