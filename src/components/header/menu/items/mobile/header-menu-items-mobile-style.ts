import { DropdownMenu } from '@wordpress/components';
import styled from 'styled-components';
import { MediaScreenSize, mediaStyle } from '../../../../../styles/media';
import { StyledHeaderGroup } from '../header-menu-items-style';

export const StyledHeaderMenuItemsMobile = styled(StyledHeaderGroup)`
  display: none;

  ${mediaStyle(MediaScreenSize.TABLET)`
    display: block;
  `}
`;
