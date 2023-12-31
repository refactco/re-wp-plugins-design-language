import { CheckboxControl } from '@wordpress/components';
import { styled } from 'styled-components';
import { elementTransition } from '../../styles/animation';
import { border } from '../../styles/border';
import { fontSizeCalc, sizeCalc } from '../../utils/size-calculator';
import { ICheckboxProps } from './checkbox-type';

export const StyledCheckbox = styled(CheckboxControl)<ICheckboxProps>`
  &&& {
    display: inline-block;

    & .components-base-control__field {
      margin: 0;
    }

    & svg {
      left: 0;
      top: 0;
    }

    & label {
      line-height: ${sizeCalc(22, 14)};
      font-size: ${fontSizeCalc(14)};
      font-weight: 600;
      vertical-align: middle;
      text-transform: capitalize;
    }

    & input {
      width: ${sizeCalc(24)};
      height: ${sizeCalc(24)};
      border-radius: ${sizeCalc(8)};
      border: ${border('#002729')};
      ${elementTransition({
        attrs: 'background-color'
      })}

      &[disabled] {
        border: ${border('#d7dbdb')};
        cursor: not-allowed;
      }

      &:checked {
        background-color: #2e9e62;
        border: ${border('#2e9e62')};
        outline: none;
      }

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }

    & .components-checkbox-control__input-container {
      width: ${sizeCalc(24)};
      height: ${sizeCalc(24)};
      margin-inline-end: ${sizeCalc(8)};
    }
  }
`;
