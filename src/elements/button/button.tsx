import type { ReactElement } from 'react';
import { MiddleAlignedSpan, StyledButton } from './button-style';
import { ButtonSize, ButtonVariant, IButtonProps } from './button-type';

export function Button(props: IButtonProps): ReactElement {
  const { variant = ButtonVariant.PRIMARY, children, size = ButtonSize.MEDIUM, onClick, className } = props;

  console.log({ className });

  // const newClassName = [className, isClicked ? 'ripple' : ''].join(' ');

  return (
    <StyledButton {...props} variant={variant} onClick={() => {}} className="ripple">
      {children ? <MiddleAlignedSpan size={size}>{children}</MiddleAlignedSpan> : null}
    </StyledButton>
  );
}
