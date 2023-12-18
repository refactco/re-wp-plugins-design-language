import { RangeControl } from '@wordpress/components';
import styled from 'styled-components';
import { IRangeProps } from './range-type';

export const StyledRange = styled(RangeControl)<IRangeProps>`
  &&& {
    & .components-range-control__root {
      gap: 25px;
    }

    & .components-range-control__wrapper {
      order: 1;
    }

    & .components-range-control__number {
      margin: 0 !important;
    }

    & .components-base-control__label {
      font-size: 13px;
      font-weight: 600;
      line-height: 24px;
      margin-bottom: 4px;
    }

    & .components-input-control__input {
      border: 1px solid #003233;
      border-radius: 8px;

      &:focus {
        border: 1px solid #2e9e62;

        & + .components-input-control__backdrop {
          border: none;
        }
      }
    }

    & .components-input-control__backdrop {
      border: none;
      box-shadow: none;
    }

    & .components-range-control__thumb-wrapper > span {
      background-color: #2e9e62;
    }
  }
`;
