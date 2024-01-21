import styled from 'styled-components';
import { IFieldMapCellProps } from './field-map-cell-type';

export const StyledFieldMapCell = styled(({ customWidth, ...restProps }: IFieldMapCellProps) => (
  <div {...restProps} />
))<IFieldMapCellProps>`
  align-items: center;
  display: ${(props) => (props.customWidth ? 'inline-flex' : undefined)};
  flex: ${(props) => (props.customWidth ? undefined : '1')};
  width: ${(props) => props.customWidth ?? undefined};

  & .components-base-control {
    flex: 1;
  }
`;
