import { IBaseVoidProps } from '@base/base-interface';
import { NavigationProps } from '@wordpress/components/build-types/navigation/types';
import { ReactNode } from 'react';
import { IHeaderItemProps } from './menu/header-menu-type';

export enum HeaderLogoType {
  SVG,
  IMAGE,
  TEXT
}

export interface IStyledHeaderProps extends NavigationProps, IBaseVoidProps {}

export interface IHeaderProps extends Omit<IStyledHeaderProps, 'children'> {
  items: IHeaderItemProps[];
  logoSource: ReactNode;
  logoType?: HeaderLogoType;
  activeItemIndex?: number;
}