import { Button } from '@wordpress/components';
import styled from 'styled-components';
import {
  ButtonColor,
  ButtonIconPosition,
  ButtonSize,
  ButtonVariant,
  IButtonProps,
  IButtonSizeHandlerValues
} from './button-type';

export function sizeHandler(size: ButtonSize, values: IButtonSizeHandlerValues): string {
  return values[size] ?? values.default ?? '';
}

export const StyledButton = styled(Button)<IButtonProps>`
  &&& {
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    align-items: center;
    box-shadow: none;
    display: ${(props) => (props.iconPosition === ButtonIconPosition.END ? 'inline-flex' : 'inline-block')};
    background-color: ${(props) => {
      if (props.variant === ButtonVariant.SECONDARY) {
        return 'transparent';
      }

      return props.color === ButtonColor.RED ? '#D83C2B' : '#2E9E62';
    }};
    border: ${(props) => {
      if (props.variant === ButtonVariant.PRIMARY) {
        return 'none';
      }

      return props.color === ButtonColor.RED ? '1px solid #D83C2B' : '1px solid #2E9E62';
    }};
    color: ${(props) => (props.variant === ButtonVariant.PRIMARY ? '#fff' : '#002729')};
    padding-inline: ${(props) => {
      const { size = ButtonSize.MEDIUM, children } = props;

      if (!children) {
        return sizeHandler(size, {
          default: '14px',
          large: '14px',
          medium: '11.5px',
          small: '12px',
          xSmall: '8px',
          xxSmall: '5px'
        });
      }

      return sizeHandler(size, {
        default: '24px',
        small: '16px',
        xSmall: '12px',
        xxSmall: '12px'
      });
    }};
    height: ${(props) => {
      const { size = ButtonSize.MEDIUM } = props;

      return sizeHandler(size, {
        large: '54px',
        medium: '49px',
        small: '42px',
        xSmall: '34px',
        xxSmall: '28px'
      });
    }};
    & > svg {
      margin-inline: ${(props) => {
        const { text, children, iconPosition } = props;

        if (!children && !text) {
          return undefined;
        }

        return iconPosition === ButtonIconPosition.END ? '10px 0' : '0 10px';
      }};
      order: ${(props) => (props.iconPosition === ButtonIconPosition.END ? '1' : undefined)};
      width: ${(props) => {
        const { size = ButtonSize.MEDIUM } = props;

        return sizeHandler(size, {
          default: '16px',
          large: '24px',
          medium: '24px'
        });
      }};
      height: ${(props) => {
        const { size = ButtonSize.MEDIUM } = props;

        return sizeHandler(size, {
          default: '24px',
          xSmall: '16px',
          xxSmall: '16px'
        });
      }};
      fill: ${(props) => {
        const { variant = ButtonVariant.PRIMARY } = props;

        return variant === ButtonVariant.PRIMARY ? '#fff' : '#002729';
      }};
    }
    &:hover {
      box-shadow: none;
      background-color: ${(props) => (props.color === ButtonColor.RED ? '#D83C2B' : '#268250')};
      color: #fff;
      & > svg {
        fill: #fff;
      }
    }
    &[disabled] {
      cursor: not-allowed;
      background-color: ${(props) => (props.variant === ButtonVariant.PRIMARY ? '#798686' : 'transparent')};
      border: ${(props) => (props.variant === ButtonVariant.PRIMARY ? 'none' : '1px solid #798686')};
      color: ${(props) => (props.variant === ButtonVariant.PRIMARY ? '#fff' : '#798686')};
      & > svg {
        fill: ${(props) => (props.variant === ButtonVariant.PRIMARY ? '#fff' : '#798686')};
      }
    }

    &.is-small.has-icon:not(.has-text) {
      padding-inline: 12px;
      width: unset;
    }

    &.has-icon {
      min-width: unset;
    }
  }
`;
