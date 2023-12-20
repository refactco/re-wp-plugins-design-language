import { SnackbarProps } from '@wordpress/components/build-types/snackbar/types';

export enum AlertStatus {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}

export interface IAlertProps extends SnackbarProps {
  status?: AlertStatus;
}
