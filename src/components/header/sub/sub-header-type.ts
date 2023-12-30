import { IBaseVoidProps } from '@base/base-interface';
import { ITabPanelItem } from '@components/tab-panel-menu/tab-panel-menu-type';
import { ITitleButtonItem, SubHeaderType } from '../menu/header-menu-type';

export interface ISubHeaderProps extends IBaseVoidProps {
  subHeaderType?: SubHeaderType;
  subHeaderItems?: ITabPanelItem[] | ITitleButtonItem;
}
