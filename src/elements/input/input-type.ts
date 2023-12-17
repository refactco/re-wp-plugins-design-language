import { InputControlProps } from '@wordpress/components/build-types/input-control/types';

export enum InputType {
  DATE = 'date',
  DATE_TIME_LOCAL = 'datetime-local',
  COLOR = 'color',
  EMAIL = 'email',
  HIDDEN = 'hidden',
  MONTH = 'month',
  NUMBER = 'number',
  PASSWORD = 'password'
}

export interface IInputProps extends InputControlProps {
  hasError?: boolean;
  hasFocused?: boolean;
  type?: InputType;
}
