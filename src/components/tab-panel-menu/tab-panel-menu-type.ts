import { TabPanelProps } from '@wordpress/components/build-types/tab-panel/types';

export enum TabItemSize {
  FIT_CONTENT,
  WITH_MIN_WIDTH
}

export interface ITabPanelMenuProps extends TabPanelProps {
  tabItemSize?: TabItemSize;
  tabItemMinWidth?: string;
}
