import { createGlobalStyle, css } from 'styled-components';
import interBlack from '../../../assets/fonts/inter/Inter-Black.ttf';
import interBold from '../../../assets/fonts/inter/Inter-Bold.ttf';
import interExtraBold from '../../../assets/fonts/inter/Inter-ExtraBold.ttf';
import interExtraLight from '../../../assets/fonts/inter/Inter-ExtraLight.ttf';
import interLight from '../../../assets/fonts/inter/Inter-Light.ttf';
import interMedium from '../../../assets/fonts/inter/Inter-Medium.ttf';
import interRegular from '../../../assets/fonts/inter/Inter-Regular.ttf';
import interSemiBold from '../../../assets/fonts/inter/Inter-SemiBold.ttf';
import interThin from '../../../assets/fonts/inter/Inter-Thin.ttf';

export function createFontFace(weight: number, url: string) {
  return css`
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: ${weight};
      font-display: swap;
      src: url(${url}) format('truetype');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122,
        U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `;
}

export const FontStyles = createGlobalStyle`
  ${createFontFace(900, interBlack)}
  ${createFontFace(800, interExtraBold)}
  ${createFontFace(700, interBold)}
  ${createFontFace(600, interSemiBold)}
  ${createFontFace(500, interMedium)}
  ${createFontFace(400, interRegular)}
  ${createFontFace(300, interLight)}
  ${createFontFace(200, interExtraLight)}
  ${createFontFace(100, interThin)}

  html {
    font-size: 16px;
  }

  * {
    font-family: Inter !important;
  }
`;
