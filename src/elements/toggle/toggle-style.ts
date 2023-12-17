import { ToggleControl } from '@wordpress/components';
import { styled } from 'styled-components';
import { IToggleProps } from './toggle-type';

export const StyledToggle = styled(ToggleControl)<IToggleProps>`
  &&& {
    margin: 0;
    position: relative;
    display: inline-block;

    & * {
      cursor: pointer;
    }

    & > .components-base-control__field {
      height: 100%;
    }

    & .components-flex {
      gap: 17px;
      height: 48px;
      align-items: center;
    }

    & input {
      height: 24px;

      &:focus + .components-form-toggle__track {
        box-shadow: none;
      }
    }

    & label {
      font-size: 18px;
      font-weight: 600;
      color: #002729;
      line-height: 28px;
      position: ${(props) => (props.help ? 'relative' : undefined)};
      top: ${(props) => (props.help ? '-10px' : undefined)};
    }

    & .components-form-toggle.is-checked {
      & > .components-form-toggle__track {
        background-color: #2e9e62;
      }
    }

    & .components-form-toggle__track {
      height: 24px;
      width: 42px;
      border-radius: 12px;
      background-color: #798686;
      border: none;
    }

    & .components-form-toggle__thumb {
      top: 6px;
      left: 6px;
      background-color: #fff;
    }

    & .components-base-control__help {
      font-size: 13px;
      font-weight: 400;
      color: #002729;
      line-height: 24px;
      position: absolute;
      margin: 0;
      left: 59px;
      bottom: 0;
    }
  }
`;
