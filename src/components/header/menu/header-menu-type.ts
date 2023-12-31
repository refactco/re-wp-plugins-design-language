import {
  NavigationGroupProps,
  NavigationItemBaseProps,
  NavigationMenuProps
} from '@wordpress/components/build-types/navigation/types';
import { IBaseVoidProps } from '../../../base/base-interface';
import { IButtonProps } from '../../../elements/button/button-type';
import { ITabPanelItem } from '../../tab-panel-menu/tab-panel-menu-type';

export enum SubHeaderType {
  TAB_PANEL = 'tab-panel',
  TITLE_BUTTON = 'title-button'
}

export type TitleButtonItemButtonProps = Omit<IButtonProps, 'size'>;

export interface ITitleButtonItem {
  title: string;
  buttons: TitleButtonItemButtonProps[];
}

export interface IHeaderItemProps extends NavigationItemBaseProps {
  isText?: boolean;
  subHeaderType?: SubHeaderType;
  subHeaderItems?: ITabPanelItem[] | ITitleButtonItem;
}

export interface IHeaderGroupProps extends NavigationGroupProps, IBaseVoidProps {}

export interface IHeaderMenuProps extends Omit<NavigationMenuProps, 'title' | 'children'>, IBaseVoidProps {
  items: IHeaderItemProps[];
  activeItemIndex?: number;
  activeSubItemIndex?: number;
  onSelectItem?(index: number): void;
  onSelectSubItem?(index: number): void;
}
