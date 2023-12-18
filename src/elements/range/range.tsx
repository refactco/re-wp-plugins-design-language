import { ReactElement } from 'react';
import { StyledRange } from './range-style';
import { IRangeProps } from './range-type';

export function Range(props: IRangeProps): ReactElement {
  return <StyledRange {...props} trackColor="#2E9E62" />;
}
