import { ReactElement } from 'react';
import { Icon } from '../../src/elements/icon/icon';
import { IconName, IconSize } from '../../src/elements/icon/icon-type';
import { CaretRight } from '../../src/elements/icon/sprites/caret-right';

export default function Icons(): ReactElement {
  return (
    <>
      <div>
        <h1>Drag</h1>
        <Icon iconName={IconName.DRAG} fill="green" size={IconSize.X_LARGE} />
        <Icon iconName={IconName.DRAG} fill="green" size={IconSize.LARGE} />
        <Icon iconName={IconName.DRAG} fill="green" size={IconSize.MEDIUM} />
        <Icon iconName={IconName.DRAG} fill="green" size={IconSize.SMALL} />
        <Icon iconName={IconName.DRAG} fill="green" size={IconSize.TINY} />
      </div>
      <div>
        <h1>Notifications Outlined</h1>
        <Icon iconName={IconName.NOTIFICATIONS_OUTLINED} fill="green" size={IconSize.X_LARGE} />
        <Icon iconName={IconName.NOTIFICATIONS_OUTLINED} fill="blue" size={IconSize.LARGE} />
        <Icon iconName={IconName.NOTIFICATIONS_OUTLINED} fill="red" size={IconSize.MEDIUM} />
        <Icon iconName={IconName.NOTIFICATIONS_OUTLINED} fill="black" size={IconSize.SMALL} />
        <Icon iconName={IconName.NOTIFICATIONS_OUTLINED} fill="pink" size={IconSize.TINY} />
      </div>
      <div>
        <h1>Caret right 1</h1>
        <Icon iconName={IconName.CARET_RIGHT} fill="green" size={IconSize.X_LARGE} />
        <Icon iconName={IconName.CARET_RIGHT} fill="blue" size={IconSize.LARGE} />
        <Icon iconName={IconName.CARET_RIGHT} fill="red" size={IconSize.MEDIUM} />
        <Icon iconName={IconName.CARET_RIGHT} fill="black" size={IconSize.SMALL} />
        <Icon iconName={IconName.CARET_RIGHT} fill="pink" size={IconSize.TINY} />
      </div>
      <div>
        <h1>Caret Right</h1>
        <CaretRight size={IconSize.X_LARGE} />
        <CaretRight size={IconSize.LARGE} fill="red" />
        <CaretRight size={IconSize.MEDIUM} />
        <CaretRight size={IconSize.SMALL} />
        <CaretRight size={IconSize.TINY} />
      </div>
    </>
  );
}
