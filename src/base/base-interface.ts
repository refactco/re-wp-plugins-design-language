import { ReactNode } from 'react';

export interface IBaseVoidProps {}

export interface IBaseProps extends IBaseVoidProps {
  children: ReactNode;
}

export interface IBaseState {}
