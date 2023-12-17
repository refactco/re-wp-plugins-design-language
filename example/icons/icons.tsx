import { IconManager } from '@elements/icon/icon';
import { IconId, IconSize } from '@elements/icon/icon-type';
import { ReactElement } from 'react';
import Layout from '../layout/layout';

export default function Icons(): ReactElement {
  return (
    <Layout>
      <IconManager id={IconId.CHEVRON_DOWN} fill="green" size={IconSize.LARGE} />
      <IconManager id={IconId.CARET_UP} fill="green" size={IconSize.LARGE} />
      <IconManager id={IconId.CARET_UP} fill="green" size={IconSize.LARGE} />
      <IconManager id={IconId.NOTIFICATIONS_OUTLINED} fill="#ff00ff" size={IconSize.MEDIUM} />
    </Layout>
  );
}
