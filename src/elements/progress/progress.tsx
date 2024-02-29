import { ReactElement } from 'react';
import { StyledProgress } from './progress-style';
import { IProgressProps } from './progress-type';

export function Progress(props: IProgressProps): ReactElement {
  return <StyledProgress {...props} />;
}
