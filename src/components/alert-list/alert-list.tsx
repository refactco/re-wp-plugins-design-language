import { ReactElement } from 'react';
import { getDefaultIcon } from '../alert/alert-helper';
import { AlertStatus } from '../alert/alert-type';
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
