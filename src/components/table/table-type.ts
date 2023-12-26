import { IBaseVoidProps } from '@base/base-interface';
import { ReactNode } from 'react';
import { ITableAction } from './action/table-action-type';

export interface IStyledTableProps {}

export interface ITableProps extends IStyledTableProps, IBaseVoidProps {
  headers: string[];
  dataRows: ReactNode[][];
  actions?: ITableAction[];
}
