import { ReactElement } from 'react';
import { StyledInput } from './input-style';
import { IInputProps } from './input-type';

export function Input(props: IInputProps): ReactElement {
  return <StyledInput {...props} />;
}
