import { IAlertProps } from '@components/alert/alert-type';
import { SnackbarListProps } from '@wordpress/components/build-types/snackbar/types';

export type AlertListNotice = Omit<IAlertProps, 'children'> & { id: string; content: string };

export interface IAlertListProps extends SnackbarListProps {
  notices: AlertListNotice[];
}
