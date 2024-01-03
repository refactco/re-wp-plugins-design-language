import { IIconProps, ISvgProps, IconName, IconSize } from './icon-type';
import { CaretDown } from './sprites/caret-down';
import { CaretLeft } from './sprites/caret-left';
import { CaretRight } from './sprites/caret-right';
import { CaretUp } from './sprites/caret-up';
import { CheckmarkCircleFilled } from './sprites/checkmark-circle-filled';
import { CheckmarkCircleOutlined } from './sprites/checkmark-circle-outlined';
import { ChevronDown } from './sprites/chevron-down';
import { ChevronLeft } from './sprites/chevron-left';
import { ChevronRight } from './sprites/chevron-right';
import { ChevronUp } from './sprites/chevron-up';
import { Clear } from './sprites/clear';
import { Delete } from './sprites/delete';
import { Done } from './sprites/done';
import { Drag } from './sprites/drag';
import { ErrorOutlined } from './sprites/error-outlined';
import { Gap } from './sprites/gap';
import { Info } from './sprites/info';
import { InfoFilled } from './sprites/info-filled';
import { MessageFailed } from './sprites/message-failed';
import { MessageFailedOutlined } from './sprites/message-failed-outlined';
import { MoreVertical } from './sprites/more-vertical';
import { NotificationOn } from './sprites/notifications-on';
import { NotificationsOnOutlined } from './sprites/notifications-on-outlined';
import { NotificationOutlined } from './sprites/notifications-outlined';
import { Plus } from './sprites/plus';
import { Warning } from './sprites/warning';
import { WarningOutlined } from './sprites/warning-outlined';

export function Icon(props: IIconProps) {
  const { iconName, size = IconSize.SMALL, fill = 'black', ...restProps } = props;
  const commonProps: ISvgProps = { size, fill, ...restProps };

  // let spriteUrl: string = sprite24;

  // if (size === IconSize.TINY) {
  //   spriteUrl = sprite16;
  // } else if (size === IconSize.MEDIUM) {
  //   spriteUrl = sprite32;
  // } else if (size === IconSize.LARGE) {
  //   spriteUrl = sprite48;
  // } else if (size === IconSize.X_LARGE) {
  //   spriteUrl = sprite72;
  // }

  if (iconName === IconName.CARET_DOWN) {
    return <CaretDown {...commonProps} />;
  }

  if (iconName === IconName.CARET_LEFT) {
    return <CaretLeft {...commonProps} />;
  }

  if (iconName === IconName.CARET_RIGHT) {
    return <CaretRight {...commonProps} />;
  }

  if (iconName === IconName.CARET_UP) {
    return <CaretUp {...commonProps} />;
  }

  if (iconName === IconName.CHECK_MARK_CIRCLE_FILLED) {
    return <CheckmarkCircleFilled {...commonProps} />;
  }

  if (iconName === IconName.CHECK_MARK_CIRCLE_OUTLINED) {
    return <CheckmarkCircleOutlined {...commonProps} />;
  }

  if (iconName === IconName.CHEVRON_DOWN) {
    return <ChevronDown {...commonProps} />;
  }

  if (iconName === IconName.CHEVRON_LEFT) {
    return <ChevronLeft {...commonProps} />;
  }

  if (iconName === IconName.CHEVRON_RIGHT) {
    return <ChevronRight {...commonProps} />;
  }

  if (iconName === IconName.CHEVRON_UP) {
    return <ChevronUp {...commonProps} />;
  }

  if (iconName === IconName.CLEAR) {
    return <Clear {...commonProps} />;
  }

  if (iconName === IconName.DELETE) {
    return <Delete {...commonProps} />;
  }

  if (iconName === IconName.DONE) {
    return <Done {...commonProps} />;
  }

  if (iconName === IconName.DRAG) {
    return <Drag {...commonProps} />;
  }

  if (iconName === IconName.ERROR_OUTLINED) {
    return <ErrorOutlined {...commonProps} />;
  }

  if (iconName === IconName.GAP) {
    return <Gap {...commonProps} />;
  }

  if (iconName === IconName.INFO) {
    return <Info {...commonProps} />;
  }

  if (iconName === IconName.INFO_FILLED) {
    return <InfoFilled {...commonProps} />;
  }

  if (iconName === IconName.MESSAGE_FAILED) {
    return <MessageFailed {...commonProps} />;
  }

  if (iconName === IconName.MESSAGE_FAILED_OUTLINED) {
    return <MessageFailedOutlined {...commonProps} />;
  }

  if (iconName === IconName.MORE_VERTICAL) {
    return <MoreVertical {...commonProps} />;
  }

  if (iconName === IconName.NOTIFICATIONS_OUTLINED) {
    return <NotificationOutlined {...commonProps} />;
  }

  if (iconName === IconName.NOTIFICATION_ON) {
    return <NotificationOn {...commonProps} />;
  }

  if (iconName === IconName.NOTIFICATION_ON_OUTLINED) {
    return <NotificationsOnOutlined {...commonProps} />;
  }

  if (iconName === IconName.PLUS) {
    return <Plus {...commonProps} />;
  }

  if (iconName === IconName.WARNING) {
    return <Warning {...commonProps} />;
  }

  if (iconName === IconName.WARNING_OUTLINED) {
    return <WarningOutlined {...commonProps} />;
  }

  return <svg></svg>;
}
