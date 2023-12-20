import { ReactElement } from 'react';
import { getDefaultIcon } from './alert-helper';
import { StyledSnackbar } from './alert-style';
import { AlertStatus, IAlertProps } from './alert-type';

export function Alert(props: IAlertProps): ReactElement {
  const { status = AlertStatus.INFO, className, ...restProps } = props;
  let { icon } = props;

  if (!icon) {
    icon = getDefaultIcon(status);
  }

  return (
    <StyledSnackbar
      {...restProps}
      icon={icon}
      status={status}
      className={[className, `components-snackbar--${status}`].join(' ')}
    />
  );
}
