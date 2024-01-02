import { IBaseProps } from '../../base/base-interface';

export enum ContainerType {
  FULL_WIDTH = 'full-width',
  MARGIN_AUTO = 'margin-auto',
  STATIC_MARGIN = 'static-margin'
}

export interface IContainerProps extends IBaseProps {
  type?: ContainerType;
  width?: string;
}
