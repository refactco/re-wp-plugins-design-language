import { ReactElement, ReactNode } from 'react';
import { TableAction } from './action/table-action';
import { TableCell } from './cell/table-cell';
import { MobileTable } from './mobile-table/mobile-table';
import { TableRow } from './row/table-row';
import { StyledMediaTable, StyledTable, StyledTableHeader } from './table-style';
import { ITableProps } from './table-type';

export function Table(props: ITableProps): ReactElement {
  const { headers, dataRows, actions } = props;

  return (
    <StyledMediaTable>
      <StyledTable className="desktop-table">
        <StyledTableHeader>
          {headers.map((header: string, index: number): ReactElement => {
            return <TableCell>{header}</TableCell>;
          })}
          {actions ? <TableCell>{''}</TableCell> : null}
        </StyledTableHeader>
        {dataRows.map((row: ReactNode[], rowIndex: number): ReactElement => {
          return (
            <TableRow key={rowIndex}>
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
        })}
      </StyledTable>
      <MobileTable {...props} />
    </StyledMediaTable>
  );
}
