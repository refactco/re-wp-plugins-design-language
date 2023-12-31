import { ReactElement } from 'react';
import { StyledContainer } from './container-style';
import { ContainerType, IContainerProps } from './container-type';

export function Container(props: IContainerProps): ReactElement {
  const { type = ContainerType.STATIC_MARGIN, width = 'unset', children } = props;

  return (
    <StyledContainer type={type} width={width}>
      {children}
    </StyledContainer>
  );
}
