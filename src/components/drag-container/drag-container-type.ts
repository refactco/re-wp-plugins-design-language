import { IBaseVoidProps } from '../../base/base-interface';

export interface IDragContainerProps extends IBaseVoidProps {
  children: any;
  droppableId: string;
  onDragEnd(result: any): void;

  notDraggable?: boolean;
}
