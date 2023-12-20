import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { ReactNode } from 'react';
import { AlertStatus } from './alert-type';

export function getDefaultIcon(status: AlertStatus): ReactNode {
  let icon = <IconManager id={IconId.INFO} />;

  if (status === AlertStatus.SUCCESS) {
    icon = <IconManager id={IconId.CHECK_MARK_CIRCLE_OUTLINED} />;
  } else if (status === AlertStatus.ERROR) {
    icon = <IconManager id={IconId.ERROR_OUTLINED} />;
  } else if (status === AlertStatus.WARNING) {
    icon = <IconManager id={IconId.WARNING_OUTLINED} />;
  }

  return icon;
}
