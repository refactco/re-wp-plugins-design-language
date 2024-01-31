import styled from 'styled-components';
import { MediaScreenSize, mediaStyle } from '../../styles/media';
import { TabItemSize } from './tab-panel-menu-type';

export const StyledTabPanel = styled(({ tabItemSize, tabItemMinWidth, ...restProps }: any) => (
  <div {...restProps} />
))<any>`
  &&& {
    & > .components-tab-panel__tabs {
      align-items: center;
      gap: 32px;

      &.show-on-desktop {
        display: flex;

        ${mediaStyle(MediaScreenSize.TABLET)`
          display: none;
        `}
      }

      &.show-on-mobile {
        display: none;

        ${mediaStyle(MediaScreenSize.TABLET)`
          display: flex;
        `}
      }
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
      min-width: ${(props) =>
        props.tabItemSize === TabItemSize.WITH_MIN_WIDTH ? props.tabItemMinWidth : undefined};
      line-height: 22px;

      & > .components-dropdown > button {
        height: unset;
        padding: 0;
        color: #002729;
        opacity: 1;
      }

      &::before {
        content: unset;
      }

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
