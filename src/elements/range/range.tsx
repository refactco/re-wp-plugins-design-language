import { ReactElement } from 'react';
import { StyledRange } from './range-style';
import { IRangeProps, RangeHelpPosition } from './range-type';

export function Range(props: IRangeProps): ReactElement {
  const { helpPosition = RangeHelpPosition.INSIDE, ...restProps } = props;

  return <StyledRange {...restProps} trackColor="#2E9E62" helpPosition={helpPosition} />;
}
