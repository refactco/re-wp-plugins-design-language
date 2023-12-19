import { css } from 'styled-components';

export function elementTransition(params: { attrs: string | string[]; duration?: number; type?: string }) {
  const { attrs, duration = 0.5, type = 'ease-out' } = params;
  const attributes: string[] = typeof attrs === 'string' ? [attrs] : attrs;

  return css`
    transition: ${attributes
      .map((attribute: string): string => {
        return `${attribute} ${duration}s ${type}`;
      })
      .join(', ')};
  `;
}
