import { AlertList } from '@components/alert-list/alert-list';
import { Alert } from '@components/alert/alert';
import { AlertStatus } from '@components/alert/alert-type';
import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { ReactElement } from 'react';
import Layout from '../layout/layout';

export default function alerts(): ReactElement {
  return (
    <Layout backgroundColor="lightgray">
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}></div>
        <div style={{ width: '50%', display: 'flex', flexWrap: 'nowrap', gap: '12px', flexDirection: 'column' }}>
          <Alert status={AlertStatus.SUCCESS} explicitDismiss>
            Hello guys
          </Alert>
          <Alert status={AlertStatus.ERROR} explicitDismiss>
            Hello guys
          </Alert>
          <Alert status={AlertStatus.WARNING} explicitDismiss>
            Hello guys
          </Alert>
          <Alert status={AlertStatus.INFO} explicitDismiss>
            Hello guys
          </Alert>
        </div>
      </div>
      <AlertList
        onRemove={() => {}}
        notices={[
          {
            id: '1',
            content: 'Hello guys',
            status: AlertStatus.SUCCESS,
            explicitDismiss: true
          },
          {
            id: '2',
            content: 'Hello guys 2',
            status: AlertStatus.ERROR,
            explicitDismiss: true
          },
          {
            id: '3',
            content: 'Alert with custom icon',
            status: AlertStatus.ERROR,
            explicitDismiss: true,
            icon: <IconManager id={IconId.DELETE} />
          },
          {
            id: '3',
            content: 'Alert without dismiss icon',
            status: AlertStatus.ERROR
          }
        ]}
      />
    </Layout>
  );
}
