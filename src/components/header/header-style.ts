import { __experimentalNavigation as Navigation } from '@wordpress/components';
import styled from 'styled-components';
import { mediaStyle } from '../../styles/media';
import { IStyledHeaderProps } from './header-type';

export const StyledHeader = styled(Navigation)<IStyledHeaderProps>`
  &&& {
    position: relative;
    overflow: unset;
    padding: 0;

    ${mediaStyle()`
      overflow: hidden;
    `}

    & > div {
      display: flex;
      height: 70px;
      margin-bottom: 70px;
      padding: 0px 45px;
      gap: 32px;
      align-items: center;
      background: #003233;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
    }
  }
`;

export const StyledHeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  color: #fff;
`;

export const StyledHeaderLogoImage = styled.img`
  height: 29px;
`;
