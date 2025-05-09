import { state } from '../core/state.js';
import { executeGroupOperation } from './operations.js';
import { getGroupBounding, moveGroupTo } from '../utils/group-utils.js';

export async function alignGroupsToLeft() {
  return await executeGroupOperation(groups => {
    const leftmostX = Math.min(...groups.map(group => {
      const [x] = getGroupBounding(group);
      return x;
    }));

    groups.forEach(group => {
      const [_, y] = getGroupBounding(group);
      moveGroupTo(group, leftmostX, y, true);
    });
  });
}

export async function alignGroupsToRight() {
  return await executeGroupOperation(groups => {
    const rightmostEdge = Math.max(...groups.map(group => {
      const [x, _, width] = getGroupBounding(group);
      return x + width;
    }));

    groups.forEach(group => {
      const [_, y, width] = getGroupBounding(group);
      moveGroupTo(group, rightmostEdge - width, y, true);
    });
  });
}

export async function alignGroupsToTop() {
  return await executeGroupOperation(groups => {
    const topmostY = Math.min(...groups.map(group => {
      const [_, y] = getGroupBounding(group);
      return y;
    }));

    groups.forEach(group => {
      const [x] = getGroupBounding(group);
      moveGroupTo(group, x, topmostY, true);
    });
  });
}

export async function alignGroupsToBottom() {
  return await executeGroupOperation(groups => {
    const bottommostEdge = Math.max(...groups.map(group => {
      const [_, y, __, height] = getGroupBounding(group);
      return y + height;
    }));

    groups.forEach(group => {
      const [x, _, __, height] = getGroupBounding(group);
      moveGroupTo(group, x, bottommostEdge - height, true);
    });
  });
}

export async function alignGroupsToHorizontalCenter() {
  return await executeGroupOperation(groups => {
    alignGroupsToHorizontalCenterInternal(groups);
  });
}

export async function alignGroupsToVerticalCenter() {
  return await executeGroupOperation(groups => {
    alignGroupsToVerticalCenterInternal(groups);
  });
}

export function alignGroupsToHorizontalCenterInternal(groups) {
  const sortedGroups = [...groups].sort((a, b) => {
    const [aX] = getGroupBounding(a);
    const [bX] = getGroupBounding(b);
    return aX - bX;
  });

  const leftmostX = Math.min(...groups.map(group => {
    const [x] = getGroupBounding(group);
    return x;
  }));

  const referenceGroup = state.altKeyPressed
    ? sortedGroups[sortedGroups.length - 1]
    : sortedGroups[0];

  const [_, referenceGroupTopY] = getGroupBounding(referenceGroup);

  groups.forEach(group => {
    const [x] = getGroupBounding(group);
    moveGroupTo(group, x, referenceGroupTopY, true);
  });

  const config = window.alignerPlugin.getConfig();
  const spacing = config.groupHorizontalSpacing;
  const safetyGroupsMargin = config.safetyGroupsMargin?.horizontal || 0;
  const effectiveSpacing = spacing + safetyGroupsMargin;

  const currentSpacing = effectiveSpacing;

  if (state.altKeyPressed) {
    const [refX, _, refWidth] = getGroupBounding(referenceGroup);
    const rightGroupRightEdge = refX + refWidth;

    let currentX = rightGroupRightEdge;

    for (let i = sortedGroups.length - 1; i >= 0; i--) {
      const group = sortedGroups[i];
      const [_, y, width] = getGroupBounding(group);

      currentX -= width;
      moveGroupTo(group, currentX, y, true);

      if (i > 0) {
        currentX -= currentSpacing;
      }
    }
  } else {
    let currentX = leftmostX;

    sortedGroups.forEach((group, index) => {
      const [_, y, width] = getGroupBounding(group);

      moveGroupTo(group, currentX, y, true);

      if (index < sortedGroups.length - 1) {
        currentX += width + currentSpacing;
      }
    });
  }
}

export function alignGroupsToVerticalCenterInternal(groups) {
  const sortedGroups = [...groups].sort((a, b) => {
    const [, aY] = getGroupBounding(a);
    const [, bY] = getGroupBounding(b);
    return aY - bY;
  });

  const topmostY = Math.min(...groups.map(group => {
    const [, y] = getGroupBounding(group);
    return y;
  }));

  const referenceGroup = state.altKeyPressed
    ? sortedGroups[sortedGroups.length - 1]
    : sortedGroups[0];

  const [refX, , refWidth] = getGroupBounding(referenceGroup);
  const referenceGroupCenterX = refX + (refWidth / 2);

  groups.forEach(group => {
    const [x, y, width] = getGroupBounding(group);
    const groupCenterX = x + (width / 2);
    const offsetX = referenceGroupCenterX - groupCenterX;
    moveGroupTo(group, x + offsetX, y, true);
  });

  const config = window.alignerPlugin.getConfig();
  const spacing = config.groupVerticalSpacing;
  const safetyGroupsMargin = config.safetyGroupsMargin?.vertical || 0;
  const effectiveSpacing = spacing + safetyGroupsMargin;

  const currentSpacing = effectiveSpacing;

  if (state.altKeyPressed) {
    const [, refY, , refHeight] = getGroupBounding(referenceGroup);
    const bottomGroupBottomEdge = refY + refHeight;

    let currentY = bottomGroupBottomEdge;

    for (let i = sortedGroups.length - 1; i >= 0; i--) {
      const group = sortedGroups[i];
      const [x, , , height] = getGroupBounding(group);

      currentY -= height;
      moveGroupTo(group, x, currentY, true);

      if (i > 0) {
        currentY -= currentSpacing;
      }
    }
  } else {
    let currentY = topmostY;

    sortedGroups.forEach((group, index) => {
      const [x, , , height] = getGroupBounding(group);

      moveGroupTo(group, x, currentY, true);

      if (index < sortedGroups.length - 1) {
        currentY += height + currentSpacing;
      }
    });
  }
}


