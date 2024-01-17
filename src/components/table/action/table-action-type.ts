import { HTMLAttributes, ReactNode } from 'react';
import { IBaseVoidProps } from '../../../base/base-interface';
import { ButtonColor, ButtonSize, ButtonVariant } from '../../../elements/button/button-type';

export interface ITableAction {
  text: string;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  href?: string;
  onClick?(rowIndex: number, row: ReactNode[]): void;
}

export interface ITableActionProps extends IBaseVoidProps, HTMLAttributes<HTMLDivElement> {
  rowIndex: number;
  row: ReactNode[];
  actions?: ITableAction[];
}
