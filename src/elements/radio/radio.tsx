import { ReactElement } from 'react';
import { StyledRadio } from './radio-style';
import { IRadioProps } from './radio-type';

export function Radio(props: IRadioProps): ReactElement {
  return <StyledRadio {...props} />;
}
