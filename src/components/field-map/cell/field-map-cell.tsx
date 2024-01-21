import { ReactElement } from 'react';
import { StyledFieldMapCell } from './field-map-cell-style';
import { IFieldMapCellProps } from './field-map-cell-type';

export function FieldMapCell(props: IFieldMapCellProps): ReactElement {
  return <StyledFieldMapCell {...props} />;
}
