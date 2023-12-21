import { TabPanel } from '@wordpress/components';
import styled from 'styled-components';
import { ITabPanelMenuProps, TabItemSize } from './tab-panel-menu-type';

export const StyledTabPanel = styled(TabPanel)<ITabPanelMenuProps>`
  &&& {
    & > .components-tab-panel__tabs {
      gap: 24px;
    }

    & .components-tab-panel__tabs-item {
      color: #798686;
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
      padding: 0;
      min-width: ${(props) => (props.tabItemSize === TabItemSize.WITH_MIN_WIDTH ? props.tabItemMinWidth : undefined)};
      display: inline-block;

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
