import { ReactElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IDraggableBoxProps } from './draggable-box-type';

export function DraggableBox(props: IDraggableBoxProps): ReactElement {
  const { children, draggableId, index, notDraggable = false } = props;

  if (notDraggable) {
    return <>{children}</>;
  }

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(draggableProvided: any) => {
        const { innerRef: dragInnerRef, draggableProps, dragHandleProps } = draggableProvided;

        return (
          <children.type
            {...draggableProps}
            {...dragHandleProps}
            {...children.props}
            ref={dragInnerRef}
            innerRef={dragInnerRef}
          />
        );
      }}
    </Draggable>
  );
}
