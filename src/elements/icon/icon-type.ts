import { IBaseVoidProps } from '../../base/base-interface';

export enum IconSize {
  TINY = '16',
  SMALL = '24',
  MEDIUM = '32',
  LARGE = '48',
  X_LARGE = '72'
}

export enum IconName {
  CARET_RIGHT = 'caret_right',
  CARET_UP = 'caret_up',
  CARET_DOWN = 'caret_down',
  CARET_LEFT = 'caret_left',
  CHEVRON_DOWN = 'chevron_down',
  CHEVRON_LEFT = 'chevron_left',
  CHEVRON_RIGHT = 'chevron_right',
  CHEVRON_UP = 'chevron_up',
  NOTIFICATION_ON = 'notifications_on',
  NOTIFICATION_ON_OUTLINED = 'notifications_on_outlined',
  NOTIFICATIONS_OUTLINED = 'notifications_outlined',
  ERROR_OUTLINED = 'error_outlined',
  MESSAGE_FAILED = 'message_failed',
  MESSAGE_FAILED_OUTLINED = 'message_failed_outlined',
  WARNING = 'warning',
  WARNING_OUTLINED = 'warning_outlined',
  DRAG = 'drag',
  DELETE = 'delete',
  DONE = 'done',
  CLEAR = 'clear',
  PLUS = 'plus',
  MORE_VERTICAL = 'more_vertical',
  INFO = 'info',
  CHECK_MARK_CIRCLE_FILLED = 'checkmark_circle_filled',
  CHECK_MARK_CIRCLE_OUTLINED = 'checkmark_circle_outlined',
  GAP = 'gap',
  INFO_FILLED = 'info_filled'
}

export interface IIconProps extends IBaseVoidProps {
  iconName: IconName;
  className?: string;
  size?: IconSize;
  fill?: string;
}
