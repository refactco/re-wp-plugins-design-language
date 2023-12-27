import { ReactElement } from 'react';
import { StyledTableRow } from './table-row-style';
import { ITableRowProps } from './table-row-type';

export function TableRow(props: ITableRowProps): ReactElement {
  const { innerRef } = props;

  return <StyledTableRow {...props} ref={innerRef} />;
}
