import { IBaseProps } from '../../base/base-interface';

export enum ContainerType {
  FULL_WIDTH,
  MARGIN_AUTO,
  STATIC_MARGIN
}

export interface IContainerProps extends IBaseProps {
  type?: ContainerType;
  width?: string;
}
