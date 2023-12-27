import { IBaseVoidProps } from '@base/base-interface';

export interface IDraggableBoxProps extends IBaseVoidProps {
  children: any;
  draggableId: string;
  index: number;

  notDraggable?: boolean;
}
