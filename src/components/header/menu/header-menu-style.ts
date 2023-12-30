import {
  __experimentalNavigationGroup as NavigationGroup,
  __experimentalNavigationItem as NavigationItem,
  __experimentalNavigationMenu as NavigationMenu
} from '@wordpress/components';
import styled from 'styled-components';
import { IHeaderItemProps } from './header-menu-type';

export const StyledHeaderMenu = styled(NavigationMenu)`
  &&& {
    margin: 0;
  }
`;

export const StyledHeaderGroup = styled(NavigationGroup)`
  &&& {
    & > ul {
      display: flex;
      gap: 32px;
      align-items: center;
    }
  }
`;

export const StyledHeaderItem = styled(NavigationItem)<IHeaderItemProps>`
  &&& {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;

    & .components-navigation__item-title {
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
    }

    &.is-active {
      background: none;

      & > .components-button {
        border-radius: 12px;
        background-color: #2e9e62;
        color: #fff;

        &:hover {
          background-color: #268250;
        }

        &:focus:not(:disabled) {
          box-shadow: none;
          outline: none;
          background-color: #1c5f3a;
        }

        & svg {
          fill: #fff;
        }
      }
    }

    & > .components-button {
      padding: 8px 16px;

      & svg {
        width: 16px;
        height: 16px;
        fill: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
