import type { ReactElement } from 'react';
import { MiddleAlignedSpan, StyledButton } from './button-style';
import { ButtonSize, ButtonVariant, IButtonProps } from './button-type';

export function Button(props: IButtonProps): ReactElement {
  const { variant = ButtonVariant.PRIMARY, size = ButtonSize.MEDIUM, children, className = '', text, ...restProps } = props;

  return (
    <StyledButton {...restProps} size={size} variant={variant} className={['ripple', className].join(' ')}>
      {children || text ? <MiddleAlignedSpan size={size}>{children ?? text}</MiddleAlignedSpan> : null}
    </StyledButton>
  );
}
