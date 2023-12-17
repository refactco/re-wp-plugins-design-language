import { __experimentalInputControl as WordpressInput } from '@wordpress/components';
import { styled } from 'styled-components';
import { IInputProps } from './input-type';

export const StyledInput = styled(WordpressInput)<IInputProps>`
  &&& {
    & * {
      cursor: ${(props) => (props.disabled ? 'not-allowed !important' : undefined)};
    }

    & .components-input-control__container {
      border-radius: 8px;
      padding-inline: 16px;
      background-color: #fff;

      & > .components-input-control__prefix {
        margin-inline-end: 10px;
      }

      & > .components-input-control__suffix {
        margin-inline-start: 10px;
      }

      & > .components-input-control__backdrop {
        box-shadow: none !important;
        border-width: 1px !important;
        border-style: solid !important;
        border-color: ${(props) => {
          if (props.disabled) {
            return '#798686';
          }

          if (props.hasError) {
            return 'rgba(229, 57, 53, 0.90)';
          }

          return '#003233';
        }} !important;
      }

      & > input {
        height: 48px !important;
        padding: 0 !important;
        font-size: 14px;
        font-weight: 400;
        color: ${(props) => (props.disabled ? '#798686' : '#002729')};

        &::placeholder {
          font-size: 14px;
          font-weight: 400;
          color: #798686;
        }
      }
    }

    & .components-flex {
      gap: 4px;

      &[class*='rootFocusedStyles'] {
        & .components-input-control__backdrop {
          border: 1px solid #2e9e62 !important;
        }
      }
    }

    & label {
      font-size: 13px !important;
      font-weight: 600 !important;
      line-height: 24px !important;
      text-transform: unset !important;
      color: #002729;
    }

    & .components-base-control__help {
      font-size: 11px;
      font-weight: 500;
      line-height: 24px;
      color: ${(props) => (props.hasError && !props.disabled ? 'rgba(229, 57, 53, 0.90)' : '#798686')};
      margin-top: 4px;
    }
  }
`;
