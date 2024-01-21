import { IconType } from '@wordpress/components';
import { ReactNode } from 'react';
import { IBaseProps, IBaseVoidProps } from '../../base/base-interface';
import { IconName } from '../../elements/icon/icon-type';

export interface IFieldMapHeader {
  title: string;
  customWidth?: string;
}

export interface IFieldMapProps extends IBaseVoidProps {
  // fields: IFieldMapItemType[];
  headers: IFieldMapHeader[];
  children: ReactNode[];
  gap?: string;
  removeIcon?: IconType | IconName;
  addItemText?: string;
  onAddItemClick(): void;
  onRemoveItemClick(rowIndex: number): void;
}

export interface IStyledFieldMapRowProps extends IBaseProps {
  gap: string;
}
