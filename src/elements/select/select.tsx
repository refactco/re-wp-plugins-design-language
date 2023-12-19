import { ReactElement } from 'react';
import { StyledSelect } from './select-style';
import { ISelectProps } from './select-type';

export function Select(props: ISelectProps): ReactElement {
  // const { multiple, label, help } = props;

  // if (multiple) {
  //   return (
  //     <div>
  //       <label>{label}</label>
  //       <StyledMultipleSelectBox />
  //       <div>{help}</div>
  //       {/* <StyledSelect {...props} /> */}
  //     </div>
  //   );
  // }

  return <StyledSelect {...props} />;
}
