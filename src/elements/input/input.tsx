import { ReactElement } from 'react';
import { StyledInput } from './input-style';
import { IInputProps, InputType } from './input-type';

export function Input(props: IInputProps): ReactElement {
  const { type = InputType.TEXT } = props;

  return <StyledInput {...props} type={type} />;
}
