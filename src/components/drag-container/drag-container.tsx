import { ReactElement } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { IDragContainerProps } from './drag-container-type';

export function DragContainer(props: IDragContainerProps): ReactElement {
  const { children, droppableId, onDragEnd, notDraggable = false } = props;

  if (notDraggable) {
    return <>{children}</>;
  }

  return (
    <DragDropContext
      onDragEnd={(result: any) => {
        onDragEnd?.(result);
      }}
    >
      <Droppable droppableId={droppableId}>
        {(droppableProvided: any) => {
          const { droppableProps, innerRef, placeholder } = droppableProvided;

          return (
            <children.type {...children.props} {...droppableProps} ref={innerRef}>
              {children.props.children}
              {placeholder}
            </children.type>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}
