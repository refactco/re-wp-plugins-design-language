import { commonInputStyles } from '@elements/input/input-style';
import { SelectControl } from '@wordpress/components';
import { styled } from 'styled-components';
import { ISelectProps } from './select-type';

export const StyledSelect = styled(SelectControl)<ISelectProps>`
  &&& {
    ${commonInputStyles}

    & .components-input-control__container {
      padding-inline-start: ${(props) => (props.prefix ? undefined : '0')};
      padding-inline-end: ${(props) => (props.suffix ? undefined : '0')};
    }

    gap: 4px;

    &[class*='rootFocusedStyles'] {
      & .components-input-control__container > .components-input-control__backdrop {
        border: 1px solid #2e9e62 !important;
      }
    }

    & select {
      height: 48px !important;
      font-size: 14px;
      font-weight: 400;
      padding-inline-start: ${(props) => (props.prefix ? '0' : '16px')};
      padding-inline-end: ${(props) => (props.suffix ? '0' : '16px')};
      color: ${(props) => (props.disabled ? '#798686' : '#002729')};

      &::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: #798686;
      }
    }
  }
`;
