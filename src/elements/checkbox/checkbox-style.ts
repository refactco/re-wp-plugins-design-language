import { elementTransition } from '@styles/animation';
import { CheckboxControl } from '@wordpress/components';
import { styled } from 'styled-components';
import { ICheckboxProps } from './checkbox-type';

export const StyledCheckbox = styled(CheckboxControl)<ICheckboxProps>`
  &&& {
    display: inline-block;

    & svg {
      left: 0;
      top: 0;
    }

    & label {
      line-height: 22px;
      font-size: 14px;
      font-weight: 600;
      vertical-align: middle;
    }

    & input {
      width: 24px;
      height: 24px;
      border-radius: 8px;
      border: 1px solid #002729;
      ${elementTransition({
        attrs: 'background-color'
      })}

      &[disabled] {
        border: 1px solid #d7dbdb;
        cursor: not-allowed;
      }

      &:checked {
        background-color: #2e9e62;
        border: 1px solid #2e9e62;
        outline: none;
      }

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }

    & .components-checkbox-control__input-container {
      width: 24px;
      height: 24px;
      margin-inline-end: 8px;
    }
  }
`;
