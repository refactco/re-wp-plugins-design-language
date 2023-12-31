import { FormTokenField } from '@wordpress/components';
import { createGlobalStyle, styled } from 'styled-components';
import { IMultiSelectProps } from './multi-select-type';

export const StyledGlobalMultiSelect = createGlobalStyle`
  .components-form-token-field {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .components-form-token-field .components-spacer {
    display: none;
  }

  .components-form-token-field__label {
    font-size: 13px !important;
    line-height: 24px !important;
    font-weight: 600 !important;
    color: #002729 !important;
    margin: 0 !important;
    text-transform: capitalize !important;
    display: block !important;
    width: 100%;
  }

  .components-form-token-field__help {
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 0 !important;
    width: 100%;
  }
`;

export const StyledMultiSelect = styled(FormTokenField)<IMultiSelectProps>`
  &&& {
    background-color: #fff;
    border: 1px solid #003233;
    padding: 0;
    color: #003233;
    border-radius: 8px;
    font-size: 16px;
    box-shadow: none;
    outline: none;
    position: relative;
    transition: border-color 0.25s ease-in-out;

    &:active,
    &:focus,
    &.is-active {
      border-color: #2e9e62;
      box-shadow: none;
    }

    & .components-flex {
      height: 48px;
      padding-inline: ${(props) => (props.value?.length === 0 ? '16px' : '8px')};
    }

    & .components-form-token-field__input {
      &::placeholder {
        color: #002729;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
    }

    & .components-form-token-field__token {
      background-color: #e5f7e3;
      color: #2e9e62;
      border-radius: 6px;
      padding: 2px;
      margin-right: 4px;
      border: 1px solid #2e9e62;
    }

    & .components-form-token-field__token-text {
      background-color: transparent;
      font-size: 13px;
      font-weight: 500;
      color: #2e9e62;
    }

    & .components-form-token-field__suggestions-list {
      z-index: 2;
      border: 1px solid #2e9e62;
      background-color: #fff;
      position: absolute;
      width: 100%;
      display: ${(props) => {
        const { value, suggestions } = props;

        return value?.length === suggestions?.length ? 'none' : 'block';
      }};
    }

    & .components-form-token-field__suggestion {
      padding: 8px 16px;

      &.is-selected {
        background-color: #e5f7e3;
        color: #002729;
      }
    }

    & .components-button.components-form-token-field__remove-token {
      background-color: transparent;
      color: #2e9e62;
    }
  }
`;
