import { TabPanelMenu } from '@components/tab-panel-menu/tab-panel-menu';
import { TabItemSize } from '@components/tab-panel-menu/tab-panel-menu-type';
import { ReactElement } from 'react';
import Layout from '../layout/layout';

export default function TabPanels(): ReactElement {
  return (
    <Layout>
      <h3>Tab Panel Menu with fit-content item size</h3>
      <TabPanelMenu
        tabItemSize={TabItemSize.FIT_CONTENT}
        tabs={[
          {
            name: 'hello',
            title: 'First Item Long Title'
          },
          {
            name: 'bye',
            title: 'Bye'
          },
          {
            name: 'data',
            title: 'Data'
          },
          {
            name: 'hwy',
            title: 'Item Name'
          }
        ]}
      >
        {(tab) => <p>{tab.title}</p>}
      </TabPanelMenu>
      <br />
      <h3>Tab Panel Menu with min-width item size</h3>
      <div style={{ backgroundColor: 'lightgray' }}>
        <TabPanelMenu
          tabs={[
            {
              name: 'hello',
              title: 'First Item Long Title'
            },
            {
              name: 'bye',
              title: 'Bye'
            },
            {
              name: 'data',
              title: 'Data'
            },
            {
              name: 'hwy',
              title: 'Item Name'
            }
          ]}
        >
          {(tab) => null}
        </TabPanelMenu>
      </div>
    </Layout>
  );
}
