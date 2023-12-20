import { getDefaultIcon } from '@components/alert/alert-helper';
import { AlertStatus } from '@components/alert/alert-type';
import { ReactElement } from 'react';
import { StyledSnackbarList } from './alert-list-style';
import { AlertListNotice, IAlertListProps } from './alert-list-type';

export function AlertList(props: IAlertListProps): ReactElement {
  const { notices, ...restProps } = props;

  return (
    <StyledSnackbarList
      {...restProps}
      notices={notices.map((notice: AlertListNotice) => {
        const { className, status = AlertStatus.INFO } = notice;
        let { icon } = notice;

        if (!icon) {
          icon = getDefaultIcon(status);
        }

        return { ...notice, icon, className: [className, `components-snackbar--${status}`].join(' ') };
      })}
    />
  );
}
