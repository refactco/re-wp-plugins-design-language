import styled from 'styled-components';
import { ITabPanelMenuProps, TabItemSize } from './tab-panel-menu-type';

export const StyledTabPanel = styled.div<ITabPanelMenuProps>`
  &&& {
    & > .components-tab-panel__tabs {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    & .components-tab-panel__tabs-item {
      display: flex;
      padding: 26px 0 0 0;
      flex-direction: column;
      align-items: center;
      gap: 18px;
      text-align: center;
      height: 44px;

      color: #798686;
      font-size: 14px;
      font-weight: 600;
      min-width: ${(props) => (props.tabItemSize === TabItemSize.WITH_MIN_WIDTH ? props.tabItemMinWidth : undefined)};
      line-height: 22px;

      &::before {
        content: unset;
      }

      // & > span {
      //   display: inline-flex;
      //   line-height: 22px;
      // }

      &.is-active {
        color: #002729;

        &::after {
          height: 4px;
          border-radius: 4px 4px 0 0;
          background-color: #2e9e62;
        }
      }
    }
  }
`;
