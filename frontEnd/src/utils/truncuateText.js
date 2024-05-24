export const truncateText = (element, lines) => {
    const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
    const maxHeight = lines * lineHeight;
    element.style.maxHeight = `${maxHeight}px`;
    element.style.overflow = 'hidden';
    element.style.display = '-webkit-box';
    element.style.webkitBoxOrient = 'vertical';
    element.style.webkitLineClamp = lines;
  };