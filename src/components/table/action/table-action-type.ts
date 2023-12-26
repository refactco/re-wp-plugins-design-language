import { IBaseVoidProps } from '@base/base-interface';
import { ButtonColor, ButtonSize, ButtonVariant } from '@elements/button/button-type';
import { HTMLAttributes } from 'react';

export interface ITableAction {
  text: string;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  href?: string;
  onClick?<T = any>(rowIndex: number): void;
}

export interface ITableActionProps extends IBaseVoidProps, HTMLAttributes<HTMLDivElement> {
  rowIndex: number;
  actions?: ITableAction[];
}
