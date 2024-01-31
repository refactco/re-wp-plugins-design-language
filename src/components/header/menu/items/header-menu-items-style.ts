import {
  __experimentalNavigationGroup as NavigationGroup,
  __experimentalNavigationItem as NavigationItem
} from '@wordpress/components';
import styled from 'styled-components';
import { IHeaderItemProps } from './header-menu-items-type';

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
      background-color: transparent;
      border: none;
      cursor: pointer;

      & svg {
        width: 16px;
        height: 16px;
        fill: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

export const StyledHeaderGroup = styled(NavigationGroup)`
  &&& {
    margin-top: 0 !important;

    & > ul {
      display: flex;
      gap: 32px;
      align-items: center;
    }
  }
`;
