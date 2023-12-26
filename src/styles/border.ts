import { sizeCalc } from '@utils/size-calculator';

export function border(color: string, baseFontSize: number = 16, size: number = 1) {
  return `${sizeCalc(1, baseFontSize)} solid ${color}`;
}
