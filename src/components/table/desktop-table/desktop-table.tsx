import { ReactElement, ReactNode } from 'react';
import { Icon } from '../../../elements/icon/icon';
import { IconName } from '../../../elements/icon/icon-type';
import { DragContainer } from '../../drag-container/drag-container';
import { DraggableBox } from '../../drag-container/draggable-box/draggable-box';
import { TableAction } from '../action/table-action';
import { TableCell } from '../cell/table-cell';
import { TableRow } from '../row/table-row';
import { StyledTable, StyledTableHeader } from '../table-style';
import { IDesktopTableProps } from './desktop-table-type';

export function DesktopTable(props: IDesktopTableProps): ReactElement {
  const { headers, dataRows, actions, noDraggable, onDragItemEnd } = props;

  return (
    <StyledTable className="desktop-table">
      <StyledTableHeader>
        {headers.map((header: string, index: number): ReactElement => {
          return <TableCell key={index}>{header}</TableCell>;
        })}
        {actions ? <TableCell>{''}</TableCell> : null}
      </StyledTableHeader>
      <DragContainer
        notDraggable={noDraggable}
        onDragEnd={(result: any) => {
          onDragItemEnd?.(result);
        }}
        droppableId="table-id"
      >
        <div>
          {dataRows.map((row: ReactNode[], rowIndex: number): ReactElement => {
            return (
              <DraggableBox
                key={rowIndex}
                draggableId={`table-draggable-${rowIndex}`}
                index={rowIndex}
                notDraggable={noDraggable}
              >
                <TableRow>
                  {row.map((cell: ReactNode, cellIndex: number): ReactElement => {
                    return (
                      <TableCell key={cellIndex}>
                        {cellIndex === 0 && !noDraggable ? <Icon iconName={IconName.DRAG} fill="#798686" /> : null} {cell}
                      </TableCell>
                    );
                  })}
                  {actions ? (
                    <TableCell>
                      <TableAction actions={actions} rowIndex={rowIndex} />
                    </TableCell>
                  ) : null}
                </TableRow>
              </DraggableBox>
            );
          })}
        </div>
      </DragContainer>
    </StyledTable>
  );
}
