import { IconManager } from '@elements/icon/icon';
import { IconId, IconSize } from '@elements/icon/icon-type';
import { ReactElement, useState } from 'react';
import Layout from '../layout/layout';

export default function Icons(): ReactElement {
  const [selectedItemId, setSelectedItemId] = useState<string>('item2');

  return (
    <Layout>
      <div>
        <h1>Drag</h1>
        <IconManager id={IconId.DRAG} fill="green" size={IconSize.X_LARGE} />
        <IconManager id={IconId.DRAG} fill="green" size={IconSize.LARGE} />
        <IconManager id={IconId.DRAG} fill="green" size={IconSize.MEDIUM} />
        <IconManager id={IconId.DRAG} fill="green" size={IconSize.SMALL} />
        <IconManager id={IconId.DRAG} fill="green" size={IconSize.TINY} />
      </div>
      <div>
        <h1>Notifications Outlined</h1>
        <IconManager id={IconId.NOTIFICATIONS_OUTLINED} fill="green" size={IconSize.X_LARGE} />
        <IconManager id={IconId.NOTIFICATIONS_OUTLINED} fill="blue" size={IconSize.LARGE} />
        <IconManager id={IconId.NOTIFICATIONS_OUTLINED} fill="red" size={IconSize.MEDIUM} />
        <IconManager id={IconId.NOTIFICATIONS_OUTLINED} fill="black" size={IconSize.SMALL} />
        <IconManager id={IconId.NOTIFICATIONS_OUTLINED} fill="pink" size={IconSize.TINY} />
      </div>
    </Layout>
  );
}
