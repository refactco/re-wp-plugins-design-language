import { ITabPanelItem } from '../tab-panel-menu-type';

export interface ITabPanelMenuItemsProps {
  activeIndex?: number;
  onTabClick?(tabIndex: number): void;
  tabs: ITabPanelItem[];
}
