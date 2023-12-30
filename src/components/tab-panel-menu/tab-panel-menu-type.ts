import { ReactNode } from 'react';

export enum TabItemSize {
  FIT_CONTENT,
  WITH_MIN_WIDTH
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
