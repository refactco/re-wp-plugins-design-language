import styled from 'styled-components';
import { MediaScreenSize, mediaStyle } from '../../../../../styles/media';
import { StyledHeaderGroup } from '../header-menu-items-style';

export const StyledHeaderMenuItemsDesktop = styled(StyledHeaderGroup)`
  display: block;

  ${mediaStyle(MediaScreenSize.TABLET)`
    display: none;
  `}
`;
