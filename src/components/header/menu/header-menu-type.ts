import { NavigationMenuProps } from '@wordpress/components/build-types/navigation/types';
import { IBaseVoidProps } from '../../../base/base-interface';
import { IHeaderItemProps } from './items/header-menu-items-type';

export enum SubHeaderType {
  TAB_PANEL = 'tab-panel',
  TITLE_BUTTON = 'title-button'
}

export interface IHeaderMenuProps
  extends Omit<NavigationMenuProps, 'title' | 'children'>,
    IBaseVoidProps {
  items: IHeaderItemProps[];
  activeItemIndex?: number;
  activeSubItemIndex?: number;
  onSelectItem?(index: number): void;
  onSelectSubItem?(index: number): void;
}
