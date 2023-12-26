import { ButtonAsAnchorProps, ButtonAsButtonProps } from '@wordpress/components/build-types/button/types';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  LINK = 'link'
}

export enum ButtonColor {
  GREEN = 'green',
  RED = 'red'
}

export enum ButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  X_SMALL = 'xSmall',
  XX_SMALL = 'xxSmall'
}

export enum ButtonIconPosition {
  START = 'left',
  END = 'right'
}

export interface IButtonProps
  extends Omit<ButtonAsButtonProps, 'size'>,
    Omit<ButtonAsAnchorProps, 'disabled' | 'href' | 'size'>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  href?: string;
  iconPosition?: ButtonIconPosition;
}

export interface IButtonSizeHandlerValues {
  default?: number;
  large?: number;
  medium?: number;
  small?: number;
  xSmall?: number;
  xxSmall?: number;
}

export interface IMiddleAlignedSpanProps {
  size: ButtonSize;
}
