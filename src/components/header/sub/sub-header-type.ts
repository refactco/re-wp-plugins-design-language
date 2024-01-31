import { IBaseVoidProps } from '../../../base/base-interface';
import { ITabPanelItem } from '../../tab-panel-menu/tab-panel-menu-type';
import { SubHeaderType } from '../menu/header-menu-type';
import { ITitleButtonItem } from '../menu/items/header-menu-items-type';

export interface ISubHeaderProps extends IBaseVoidProps {
  onSubItemClick?(index: number): void;
  activeItemIndex?: number;
  subHeaderType?: SubHeaderType;
  subHeaderItems?: ITabPanelItem[] | ITitleButtonItem;
}
