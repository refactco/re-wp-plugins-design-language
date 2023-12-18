import { RadioControl } from '@wordpress/components';
import { styled } from 'styled-components';
import { IRadioProps } from './radio-type';

export const StyledRadio = styled(RadioControl)<IRadioProps>`
  &&& {
    & .components-radio-control__option {
      display: flex;
      align-items: center;
      gap: 8px;

      & * {
        cursor: pointer;
      }
    }

    & .components-flex {
      gap: 20px;
    }

    & input {
      appearance: none;
      width: 24px;
      height: 24px;
      border: 1px solid #002729;
      box-shadow: none;
      margin: 0;

      &:checked {
        background-color: #2e9e62;
        border: 1px solid #2e9e62;
        outline: none;
        position: relative;

        &:after {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #fff;
          border-radius: 6px;
          top: 5px;
          left: 5px;
        }
      }
    }
  }
`;
