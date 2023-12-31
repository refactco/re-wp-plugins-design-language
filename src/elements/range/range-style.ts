import { RangeControl } from '@wordpress/components';
import styled, { css } from 'styled-components';
import { IRangeProps, RangeHelpPosition } from './range-type';

const helpPositionBottom = css`
  margin-block: 4px 0;
`;

const helpPositionInside = css`
  position: absolute;
  margin: 0;
  bottom: 12px;
  left: 78px;
  background-color: #fff;
  width: 20px;
  height: 20px;
`;

export const StyledRange = styled(RangeControl)<IRangeProps>`
  &&& {
    position: relative;

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
      text-transform: capitalize;
    }

    & .components-input-control__input {
      border: 1px solid #003233;
      border-radius: 8px;
      height: 48px;

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

    & .components-base-control__field {
      margin-bottom: 0;
    }

    & .components-input-control__container {
      width: 102px;
    }

    & .components-base-control__help {
      ${(props) => (props.helpPosition === RangeHelpPosition.BOTTOM ? helpPositionBottom : helpPositionInside)}
    }
  }
`;
