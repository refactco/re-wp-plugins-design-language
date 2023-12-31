import { SnackbarListProps } from '@wordpress/components/build-types/snackbar/types';
import { IAlertProps } from '../alert/alert-type';

export type AlertListNotice = Omit<IAlertProps, 'children'> & { id: string; content: string };

export interface IAlertListProps extends SnackbarListProps {
  notices: AlertListNotice[];
}
