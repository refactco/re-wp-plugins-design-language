import type { ReactElement } from 'react';
import { StyledButton } from './button-style';
import { ButtonVariant, IButtonProps } from './button-type';

export function Button(props: IButtonProps): ReactElement {
  const { variant = ButtonVariant.PRIMARY } = props;

  return <StyledButton {...props} variant={variant} />;
}
