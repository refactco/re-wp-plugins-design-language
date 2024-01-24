import { css } from 'styled-components';

export enum MediaScreenSize {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  MOBILE = 'mobile'
}

export function mediaStyle(screenSize: MediaScreenSize = MediaScreenSize.MOBILE) {
  return function customCss(strings: TemplateStringsArray, ...values: any[]) {
    let mediaString: string = 'max-width: 601px';

    if (screenSize === MediaScreenSize.DESKTOP) {
      mediaString = 'min-width: 961px';
    } else if (screenSize === MediaScreenSize.TABLET) {
      mediaString = 'max-width: 960px';
    }

    return css`
      @media (${mediaString}) {
        ${css(strings, ...values)}
      }
    `;
  };
}
