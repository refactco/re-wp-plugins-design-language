import { ReactNode } from 'react';

export enum TabItemSize {
  FIT_CONTENT = 'fit-content',
  WITH_MIN_WIDTH = 'with-min-width'
}

export interface ITabPanelItem {
  name: string;
  title: string;
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ITabPanelMenuProps {
  tabItemSize?: TabItemSize;
  tabItemMinWidth?: string;
  activeIndex?: number;
  onTabClick?(tabIndex: number): void;
  tabs: ITabPanelItem[];
}
