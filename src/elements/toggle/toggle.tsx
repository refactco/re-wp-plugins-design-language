import { ReactElement } from 'react';
import { StyledToggle } from './toggle-style';
import { IToggleProps } from './toggle-type';

export function Toggle(props: IToggleProps): ReactElement {
  return <StyledToggle {...props} />;
}
