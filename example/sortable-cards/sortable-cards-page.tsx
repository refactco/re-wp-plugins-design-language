import { SortableCards } from '@components/sortable-cards/sortable-cards';
import { ReactElement, useState } from 'react';
import Layout from '../layout/layout';

export default function SortableCardsPage(): ReactElement {
  const [selectedItemId, setSelectedItemId] = useState<string>('item2');

  return (
    <Layout>
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
              title: 'Edit',
              onClick: () => console.log('edit')
            },
            {
              title: 'Delete',
              onClick: () => console.log('delete')
            }
          ]
        }}
      />
    </Layout>
  );
}
