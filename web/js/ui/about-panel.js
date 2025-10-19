import { createElement } from './dom-utils.js';

let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;
let panelRect = null;
let handleMouseMove = null;
let handleMouseUp = null;
let handleMouseDown = null;

function cleanupEventListeners() {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);

  const existingPanel = document.querySelector('.aligner-about-panel');
  if (existingPanel) {
    const header = existingPanel.querySelector('.aligner-about-panel-header');
    if (header) {
      header.removeEventListener('mousedown', handleMouseDown);
    }
  }

  isDragging = false;
}

export function showAboutPanel() {
  cleanupEventListeners();

  let aboutPanel = document.querySelector('.aligner-about-panel');
  if (!aboutPanel) {
    aboutPanel = createElement('div', 'aligner-about-panel');
    aboutPanel.style.display = 'none';
    aboutPanel.style.background = 'rgba(30, 30, 30, 0.95)';
    aboutPanel.style.width = '680px';
    document.body.appendChild(aboutPanel);

    const aboutHeader = createElement('div', 'aligner-about-panel-header');

    const aboutTitle = createElement('div', 'aligner-about-panel-title');
    aboutHeader.appendChild(aboutTitle);

    const closeButton = createElement('div', 'aligner-about-panel-close');
    closeButton.addEventListener('click', () => {
      aboutPanel.style.opacity = '0';

      if (aboutPanel.style.transform === 'none') {
        aboutPanel.style.transform = 'scale(0.95)';
      } else {
        aboutPanel.style.transform = 'translate(-50%, -50%) scale(0.95)';
      }

      setTimeout(() => {
        aboutPanel.style.display = 'none';

        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);

        setTimeout(() => {
          aboutPanel.style.opacity = '1';

          aboutPanel.style.left = '50%';
          aboutPanel.style.top = '50%';
          aboutPanel.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
      }, 300);
    });
    aboutHeader.appendChild(closeButton);
    aboutPanel.appendChild(aboutHeader);

    const aboutContent = createElement('div', 'aligner-about-panel-content');

    const messageDiv = createElement('div', 'aligner-about-panel-message');
    messageDiv.innerHTML = "<p>ComfyUI-Align诞生于对完美秩序的执着追寻，献给所有在节点混沌中寻找韵律的创作者</p><p>ComfyUI-Align was born from the relentless pursuit of perfect order, dedicated to every creator seeking harmony amidst chaotic nodes</p><p style='text-align: center; margin-top: 10px; font-style: italic;'>Moon</p>";
    messageDiv.style.textAlign = "center";
    aboutContent.appendChild(messageDiv);

    const linksContainer = createElement('div', 'aligner-about-panel-links');

    const githubLink = createElement('a', 'aligner-about-panel-link github-link');
    githubLink.href = 'https://github.com/Moooonet/ComfyUI-Align.git';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg><span>GitHub</span>';
    linksContainer.appendChild(githubLink);

    const youtubeLink = createElement('a', 'aligner-about-panel-link youtube-link');
    youtubeLink.href = 'https://youtu.be/gQd9pWg4';
    youtubeLink.target = '_blank';
    youtubeLink.rel = 'noopener noreferrer';
    youtubeLink.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg><span>YouTube</span>';
    linksContainer.appendChild(youtubeLink);

    const bilibiliLink = createElement('a', 'aligner-about-panel-link bilibili-link');
    bilibiliLink.href = 'https://space.bilibili.com/3546578992236984';
    bilibiliLink.target = '_blank';
    bilibiliLink.rel = 'noopener noreferrer';
    bilibiliLink.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/></svg><span>Bilibili</span>';
    linksContainer.appendChild(bilibiliLink);

    aboutContent.appendChild(linksContainer);
    aboutPanel.appendChild(aboutContent);

    const decorElement1 = createElement('div', 'aligner-about-panel-decor');
    decorElement1.style.position = 'absolute';
    decorElement1.style.bottom = '20px';
    decorElement1.style.left = '20px';
    decorElement1.style.width = '60px';
    decorElement1.style.height = '60px';
    decorElement1.style.borderRadius = '50%';
    decorElement1.style.background = 'radial-gradient(circle, rgba(255, 215, 0, 0.03) 0%, rgba(255, 215, 0, 0) 70%)';
    decorElement1.style.pointerEvents = 'none';
    aboutPanel.appendChild(decorElement1);

    const decorElement2 = createElement('div', 'aligner-about-panel-decor');
    decorElement2.style.position = 'absolute';
    decorElement2.style.top = '60px';
    decorElement2.style.right = '30px';
    decorElement2.style.width = '40px';
    decorElement2.style.height = '40px';
    decorElement2.style.borderRadius = '50%';
    decorElement2.style.background = 'radial-gradient(circle, rgba(255, 215, 0, 0.02) 0%, rgba(255, 215, 0, 0) 70%)';
    decorElement2.style.pointerEvents = 'none';
    aboutPanel.appendChild(decorElement2);
  }

  aboutPanel.style.position = 'fixed';
  aboutPanel.style.left = '50%';
  aboutPanel.style.top = '50%';
  aboutPanel.style.transform = 'translate(-50%, -50%) scale(1)';

  aboutPanel.style.display = 'block';

  let aboutHeader = aboutPanel.querySelector('.aligner-about-panel-header');

  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);

  handleMouseMove = (e) => {
    if (!isDragging) return;

    const newLeft = e.clientX - dragOffsetX - panelRect.width / 2;
    const newTop = e.clientY - dragOffsetY - panelRect.height / 2;

    const maxX = window.innerWidth - panelRect.width;
    const maxY = window.innerHeight - panelRect.height;

    aboutPanel.style.left = Math.max(0, Math.min(newLeft, maxX)) + 'px';
    aboutPanel.style.top = Math.max(0, Math.min(newTop, maxY)) + 'px';
  };

  handleMouseUp = () => {
    isDragging = false;
  };

  handleMouseDown = (e) => {
    isDragging = true;
    panelRect = aboutPanel.getBoundingClientRect();

    dragOffsetX = e.clientX - (panelRect.left + panelRect.width / 2);
    dragOffsetY = e.clientY - (panelRect.top + panelRect.height / 2);

    e.preventDefault();

    aboutPanel.style.transform = 'none';
    aboutPanel.style.left = panelRect.left + 'px';
    aboutPanel.style.top = panelRect.top + 'px';
  };

  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
  aboutHeader.removeEventListener('mousedown', handleMouseDown);

  const newHeader = aboutHeader.cloneNode(true);
  aboutHeader.parentNode.replaceChild(newHeader, aboutHeader);
  aboutHeader = newHeader;

  const closeButton = aboutHeader.querySelector('.aligner-about-panel-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      aboutPanel.style.opacity = '0';

      if (aboutPanel.style.transform === 'none') {
        aboutPanel.style.transform = 'scale(0.95)';
      } else {
        aboutPanel.style.transform = 'translate(-50%, -50%) scale(0.95)';
      }

      setTimeout(() => {
        aboutPanel.style.display = 'none';

        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        aboutHeader.removeEventListener('mousedown', handleMouseDown);

        isDragging = false;

        setTimeout(() => {
          aboutPanel.style.opacity = '1';

          aboutPanel.style.left = '50%';
          aboutPanel.style.top = '50%';
          aboutPanel.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
      }, 300);
    });
  }

  aboutHeader.addEventListener('mousedown', handleMouseDown);
  aboutHeader.dataset.hasDragListener = 'true';

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);

  setTimeout(() => {
    const links = aboutPanel.querySelectorAll('.aligner-about-panel-link');

    links.forEach(link => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(20px)';
      link.style.animation = 'none';
    });

    void aboutPanel.offsetWidth;

    links.forEach((link, index) => {
      link.style.animationName = 'fadeInUp';
      link.style.animationDuration = '0.6s';
      link.style.animationTimingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)';
      link.style.animationFillMode = 'forwards';
      link.style.animationDelay = `${index * 120}ms`;
    });
  }, 200);
}

export function createMoonIcon() {
  const moonIcon = createElement('div', 'aligner-moon-icon');

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('viewBox', '0 0 1024 1024');
  svg.style.width = '18px';
  svg.style.height = '18px';
  svg.style.marginRight = '8px';

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute('d', 'M570.715429 273.28c5.138286 0 8.137143-3.419429 8.996571-8.137143 13.293714-71.131429 12.854857-72.850286 87.003429-87.424 5.138286-0.859429 8.137143-3.437714 8.137142-8.576 0-5.577143-2.998857-8.137143-8.137142-8.996571-74.148571-14.994286-73.709714-16.274286-87.003429-87.424-0.859429-4.717714-3.84-8.155429-8.996571-8.155429-5.138286 0-7.716571 3.437714-8.576 8.155429-13.714286 71.131429-12.854857 72.411429-87.424 87.405714-4.717714 0.877714-8.137143 3.437714-8.137143 9.014857 0 5.138286 3.419429 7.716571 8.137143 8.576 75.008 14.573714 73.709714 16.274286 87.424 87.424 0.859429 4.717714 3.437714 8.137143 8.576 8.137143zM776.009143 563.017143c7.698286 0 13.275429-5.577143 14.134857-13.714286 14.134857-114.852571 19.712-118.290286 135.862857-136.283428 9.417143-1.718857 14.994286-5.997714 14.994286-14.573715 0-8.137143-5.577143-13.293714-13.293714-14.573714-116.992-22.290286-123.428571-21.430857-137.563429-136.283429-0.859429-8.137143-6.436571-13.714286-14.134857-13.714285-8.155429 0-13.714286 5.577143-14.573714 13.293714-14.994286 116.132571-18.870857 119.990857-137.581715 136.704-7.716571 0.859429-13.275429 6.436571-13.275428 14.573714 0 8.137143 5.558857 12.854857 13.275428 14.573715 118.710857 21.851429 123.008 22.290286 137.581715 137.142857a14.153143 14.153143 0 0 0 14.573714 12.854857zM453.266286 959.451429c155.136 0 279.003429-78.445714 338.139428-210.432 7.296-15.853714 5.997714-29.568-1.700571-36.864-6.857143-6.418286-18.870857-7.277714-32.146286-2.56-34.724571 13.714286-75.428571 20.571429-122.148571 20.571428-194.56 0-318.848-121.728-318.848-311.588571 0-53.997714 10.276571-105.837714 23.570285-132.425143 7.277714-14.994286 7.277714-27.849143 0.841143-35.986286-7.698286-8.594286-21.412571-9.874286-38.125714-3.437714C171.282286 298.569143 82.998857 438.308571 82.998857 595.145143c0 208.713143 153.856 364.288 370.285714 364.288z');
  path.style.fill = '#ffd700';

  svg.appendChild(path);
  moonIcon.appendChild(svg);

  moonIcon.addEventListener('click', showAboutPanel);

  return moonIcon;
}
