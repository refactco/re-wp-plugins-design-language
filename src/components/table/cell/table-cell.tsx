import { ReactElement } from 'react';
import { StyledTableCell, StyledTableCellContent } from './table-cell-style';
import { ITableCellProps } from './table-cell-type';

export function TableCell(props: ITableCellProps): ReactElement {
  const { children, ...restProps } = props;

  return (
    <StyledTableCell {...restProps}>
      <StyledTableCellContent>{children}</StyledTableCellContent>
    </StyledTableCell>
  );
}
