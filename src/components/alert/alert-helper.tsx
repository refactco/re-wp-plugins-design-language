import { ReactNode } from 'react';
import { Icon } from '../../elements/icon/icon';
import { IconName } from '../../elements/icon/icon-type';
import { AlertStatus } from './alert-type';

export function getDefaultIcon(status: AlertStatus): ReactNode {
  let icon = <Icon iconName={IconName.INFO} />;

  if (status === AlertStatus.SUCCESS) {
    icon = <Icon iconName={IconName.CHECK_MARK_CIRCLE_OUTLINED} />;
  } else if (status === AlertStatus.ERROR) {
    icon = <Icon iconName={IconName.ERROR_OUTLINED} />;
  } else if (status === AlertStatus.WARNING) {
    icon = <Icon iconName={IconName.WARNING_OUTLINED} />;
  }

  return icon;
}
