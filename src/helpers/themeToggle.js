export function themeToggleText(bool) {
  const text = bool ? 'text-base-200' : 'text-base-content';
  return text;
}

export function themeToggleBackground(bool) {
  const background = bool ? 'bg-base-content' : 'bg-base-200';
  return background;
}
