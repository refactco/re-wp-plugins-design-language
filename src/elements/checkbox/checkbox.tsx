import { ReactElement } from 'react';
import { StyledCheckbox } from './checkbox-style';
import { ICheckboxProps } from './checkbox-type';

export function Checkbox(props: ICheckboxProps): ReactElement {
  return <StyledCheckbox {...props} />;
}
