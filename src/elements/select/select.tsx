import { ReactElement } from 'react';
import { StyledSelect } from './select-style';
import { ISelectProps } from './select-type';

export function Select(props: ISelectProps): ReactElement {
  return <StyledSelect {...props} />;
}
