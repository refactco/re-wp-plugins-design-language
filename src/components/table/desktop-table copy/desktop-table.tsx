import { ReactElement, ReactNode } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { TableAction } from '../action/table-action';
import { TableCell } from '../cell/table-cell';
import { TableRow } from '../row/table-row';
import { StyledTable, StyledTableHeader } from '../table-style';
import { IDesktopTableProps } from './desktop-table-type';

export function DesktopTable(props: IDesktopTableProps): ReactElement {
  const { headers, dataRows, actions, onDragItemEnd } = props;

  return (
    <StyledTable className="desktop-table">
      <StyledTableHeader>
        {headers.map((header: string, index: number): ReactElement => {
          return <TableCell>{header}</TableCell>;
        })}
        {actions ? <TableCell>{''}</TableCell> : null}
      </StyledTableHeader>
      <DragDropContext
        onDragEnd={(result: any) => {
          onDragItemEnd?.(result);
        }}
      >
        <Droppable droppableId="table-id">
          {(droppableProvided: any) => {
            const { droppableProps, innerRef, placeholder } = droppableProvided;

            return (
              <div {...droppableProps} ref={innerRef}>
                {dataRows.map((row: ReactNode[], rowIndex: number): ReactElement => {
                  return (
                    <Draggable key={rowIndex} draggableId={`table-draggable-${rowIndex}`} index={rowIndex}>
                      {(draggableProvided: any) => {
                        const { innerRef: dragInnerRef, draggableProps, dragHandleProps } = draggableProvided;

                        return (
                          <TableRow key={rowIndex} innerRef={dragInnerRef} {...draggableProps} {...dragHandleProps}>
                            {row.map((cell: ReactNode, cellIndex: number): ReactElement => {
                              return <TableCell key={cellIndex}>{cell}</TableCell>;
                            })}
                            {actions ? (
                              <TableCell>
                                <TableAction actions={actions} rowIndex={rowIndex} />
                              </TableCell>
                            ) : null}
                          </TableRow>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </StyledTable>
  );
}
