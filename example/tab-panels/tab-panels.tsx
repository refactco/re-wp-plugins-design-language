import { TabPanelMenu } from '@components/tab-panel-menu/tab-panel-menu';
import { TabItemSize } from '@components/tab-panel-menu/tab-panel-menu-type';
import { ReactElement, useState } from 'react';
import Layout from '../layout/layout';

export default function TabPanels(): ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  return (
    <Layout>
      <h3>Tab Panel Menu with fit-content item size</h3>
      <TabPanelMenu
        tabItemSize={TabItemSize.FIT_CONTENT}
        activeIndex={activeIndex}
        onTabClick={(tabIndex: number): void => {
          setActiveIndex(tabIndex);
        }}
        tabs={[
          {
            name: 'hello',
            title: 'First Item Long Title',
            onClick: () => {
              console.log('red');
            }
          },
          {
            name: 'bye',
            title: 'Bye',
            onClick: () => {
              console.log('blue');
            }
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
        {/* {(tab) => <p>{tab.title}</p>} */}
      </TabPanelMenu>
      <br />
      <h3>Tab Panel Menu with min-width item size</h3>
      <div style={{ backgroundColor: 'lightgray' }}>
        <TabPanelMenu
          activeIndex={activeIndex}
          onTabClick={(tabIndex: number): void => {
            setActiveIndex(tabIndex);
          }}
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
          {/* {(tab) => null} */}
        </TabPanelMenu>
      </div>
    </Layout>
  );
}
