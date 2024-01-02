import { IBaseProps } from '../../base/base-interface';

export enum TooltipMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum TooltipPlace {
  TOP = 'top',
  TOP_END = 'top-end',
  TOP_START = 'top-start',
  BOTTOM = 'bottom',
  BOTTOM_END = 'bottom-end',
  BOTTOM_START = 'bottom-start',
  RIGHT = 'right',
  RIGHT_END = 'right-end',
  RIGHT_START = 'right-start',
  LEFT = 'left',
  LEFT_END = 'left-end',
  LEFT_START = 'left-start'
}

export interface IStyledTooltipProps {
  mode?: TooltipMode;
  id: string;
  place: TooltipPlace;
  content: string;
}

export interface ITooltipProps extends IBaseProps, IStyledTooltipProps {
  children: any;
}
