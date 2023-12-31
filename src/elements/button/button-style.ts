import { Button } from '@wordpress/components';
import styled from 'styled-components';
import { fontSizeCalc, sizeCalc } from '../../utils/size-calculator';
import {
  ButtonColor,
  ButtonIconPosition,
  ButtonSize,
  ButtonVariant,
  IButtonProps,
  IButtonSizeHandlerValues,
  IMiddleAlignedSpanProps
} from './button-type';

export function sizeHandler(
  size: ButtonSize,
  values: IButtonSizeHandlerValues,
  baseFontSize: number = 16,
  isFont: boolean = false
): string {
  if (isFont) {
    return fontSizeCalc(values[size] ?? values.default ?? 0);
  }

  return sizeCalc(values[size] ?? values.default ?? 0, baseFontSize);
  // return values[size] ?? values.default ?? '';
}

export const StyledButton = styled(Button)<IButtonProps>`
  &&& {
    border-radius: ${sizeCalc(12, 14)};
    font-size: ${fontSizeCalc(14)};
    font-weight: 600;
    cursor: pointer;
    align-items: center;
    box-shadow: none;
    padding-block: 0;

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

      return props.color === ButtonColor.RED ? `${sizeCalc(1, 14)} solid #D83C2B` : `${sizeCalc(1, 14)} solid #2E9E62`;
    }};
    color: ${(props) => (props.variant === ButtonVariant.PRIMARY ? '#fff' : '#002729')};
    padding-inline: ${(props) => {
      const { size = ButtonSize.MEDIUM, children } = props;

      if (!children) {
        return sizeHandler(
          size,
          {
            default: 14,
            large: 14,
            medium: 11.5,
            small: 12,
            xSmall: 8,
            xxSmall: 5
          },
          14
        );
      }

      return sizeHandler(
        size,
        {
          default: 24,
          small: 16,
          xSmall: 12,
          xxSmall: 12
        },
        14
      );
    }};
    height: ${(props) => {
      const { size = ButtonSize.MEDIUM } = props;

      return sizeHandler(
        size,
        {
          large: 54,
          medium: 49,
          small: 42,
          xSmall: 34,
          xxSmall: 28
        },
        14
      );
    }};

    & > svg {
      margin-inline: ${(props) => {
        const { text, children, iconPosition } = props;

        if (!children && !text) {
          return undefined;
        }

        return iconPosition === ButtonIconPosition.END ? `${sizeCalc(10)} 0` : `0 ${sizeCalc(10)}`;
      }};
      order: ${(props) => (props.iconPosition === ButtonIconPosition.END ? '1' : undefined)};
      width: ${(props) => {
        const { size = ButtonSize.MEDIUM } = props;

        return sizeHandler(size, {
          default: 16,
          large: 24,
          medium: 24
        });
      }};
      height: ${(props) => {
        const { size = ButtonSize.MEDIUM } = props;

        return sizeHandler(size, {
          default: 16,
          large: 24,
          medium: 24
        });
      }};
      fill: ${(props) => {
        const { variant = ButtonVariant.PRIMARY } = props;

        return variant === ButtonVariant.PRIMARY ? '#fff' : '#002729';
      }};
    }

    &:hover {
      box-shadow: none;
      color: #fff;

      & > svg {
        fill: #fff;
      }
    }

    &:focus {
      box-shadow: none;
    }

    &[disabled] {
      cursor: not-allowed;
      background-color: ${(props) => (props.variant === ButtonVariant.PRIMARY ? '#798686' : 'transparent')};
      border: ${(props) => (props.variant === ButtonVariant.PRIMARY ? 'none' : `${sizeCalc(1, 14)} solid #798686`)};
      color: ${(props) => (props.variant === ButtonVariant.PRIMARY ? '#fff' : '#798686')};

      & > svg {
        fill: ${(props) => (props.variant === ButtonVariant.PRIMARY ? '#fff' : '#798686')};
      }
    }

    &.is-small.has-icon:not(.has-text) {
      padding-inline: ${sizeCalc(12, 14)};
      width: unset;
    }

    &.has-icon {
      min-width: unset;
    }
  }

  &.ripple:not([disabled]) {
    background-position: center;
    transition: background 0.8s !important;

    &:hover {
      background: ${(props) =>
        props.color === ButtonColor.RED
          ? '#D83C2B radial-gradient(circle, transparent 1%, #D83C2B 1%) center/15000% !important'
          : '#268250 radial-gradient(circle, transparent 1%, #268250 1%) center/15000% !important'};
    }

    &:active {
      background-color: ${(props) => (props.color === ButtonColor.RED ? '#E37164' : '#37be74')} !important;
      background-size: 100% !important;
      transition: background 0s !important;
    }
  }
`;

export const MiddleAlignedSpan = styled.span<IMiddleAlignedSpanProps>`
  vertical-align: middle;
  display: inline-block;
  line-height: ${(props) => {
    return sizeHandler(props.size, {
      large: 52,
      medium: 47,
      small: 40,
      xSmall: 32,
      xxSmall: 26
    });
  }};
`;
