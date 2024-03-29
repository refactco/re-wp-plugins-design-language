import { NavigationProps } from '@wordpress/components/build-types/navigation/types';
import { ReactNode } from 'react';
import { IBaseVoidProps } from '../../base/base-interface';
import { IHeaderItemProps } from './menu/items/header-menu-items-type';

export enum HeaderLogoType {
  SVG = 'svg',
  IMAGE = 'image',
  TEXT = 'text'
}

export interface IStyledHeaderProps extends NavigationProps, IBaseVoidProps {}

export interface IHeaderProps extends Omit<IStyledHeaderProps, 'children'> {
  items: IHeaderItemProps[];
  logoSource: ReactNode;
  logoType?: HeaderLogoType;
  activeItemIndex?: number;
  // activeSubItemIndex?: number;
  onSelectItem?(index: number): void;
  // onSelectSubItem?(index: number): void;
}
