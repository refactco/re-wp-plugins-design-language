import { SortableCards } from '@components/sortable-cards/sortable-cards';
import { IconManager } from '@elements/icon/icon';
import { IconId, IconSize } from '@elements/icon/icon-type';
import { DropdownMenu } from '@wordpress/components';
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
      <SortableCards
        items={[
          { id: 'item1', title: 'Item title 1', badge: 'Item badge 1' },
          { id: 'item2', title: 'Item title 2', badge: 'Item badge 2' },
          { id: 'item3', title: 'Item title 3', badge: 'Item badge 3' },
          { id: 'item4', title: 'Item title 4', badge: 'Item badge 4' }
        ]}
        selectedItemId={selectedItemId}
        onSelectedItemChange={(id: string): void => {
          setSelectedItemId(id);
        }}
        menuItems={{
          label: 'hello',
          controls: [
            {
              title: 'Up',
              // icon: arrowUp,
              onClick: () => console.log('up')
            },
            {
              title: 'Right',
              // icon: arrowRight,
              onClick: () => console.log('right')
            },
            {
              title: 'Down',
              // icon: arrowDown,
              onClick: () => console.log('down')
            },
            {
              title: 'Left',
              // icon: arrowLeft,
              onClick: () => console.log('left')
            }
          ]
        }}
      />
      <DropdownMenu
        icon={<IconManager id={IconId.MORE_VERTICAL} />}
        label="salam"
        controls={[
          {
            title: 'Up',
            // icon: arrowUp,
            onClick: () => console.log('up')
          },
          {
            title: 'Right',
            // icon: arrowRight,
            onClick: () => console.log('right')
          },
          {
            title: 'Down',
            // icon: arrowDown,
            onClick: () => console.log('down')
          },
          {
            title: 'Left',
            // icon: arrowLeft,
            onClick: () => console.log('left')
          }
        ]}
      ></DropdownMenu>
    </Layout>
  );
}
