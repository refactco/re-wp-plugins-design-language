import { RadioControl } from '@wordpress/components';
import { styled } from 'styled-components';
import { IRadioProps } from './radio-type';

export const StyledRadio = styled(RadioControl)<IRadioProps>`
  &&& {
    // & input {
    //   width: 24px;
    //   height: 24px;
    //   border: 1px solid #002729;
    //   box-shadow: none;

    //   &:checked {
    //     background-color: #2e9e62;
    //     border: 1px solid #2e9e62;
    //     outline: none;
    //   }
    // }
  }
`;
