const BASE_UNIT: string = 'px';
const BASE_FONT_UNIT: string = 'px';
const BASE_FONT_SIZE: number = 16;

export function sizeCalc(size: number, fontSize: number = BASE_FONT_SIZE): string {
  if (BASE_UNIT === 'px') {
    return `${size}px`;
  }

  const calculatedSize: number = size / fontSize;

  return `${calculatedSize}${BASE_UNIT}`;
}

export function fontSizeCalc(size: number): string {
  if (BASE_FONT_UNIT === 'px') {
    return `${size}px`;
  }

  const calculatedSize: number = size / BASE_FONT_SIZE;

  return `${calculatedSize}${BASE_FONT_UNIT}`;
}
