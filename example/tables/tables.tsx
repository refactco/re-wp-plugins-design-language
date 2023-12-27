import { ITableAction } from '@components/table/action/table-action-type';
import { MobileTable } from '@components/table/mobile-table/mobile-table';
import { Table } from '@components/table/table';
import { ButtonColor } from '@elements/button/button-type';
import { ReactElement, ReactNode } from 'react';
import Layout from '../layout/layout';

export default function Tables(): ReactElement {
  const headers: string[] = ['name', 'status', 'action'];
  const actions: ITableAction[] = [
    {
      text: 'Edit'
    },
    {
      color: ButtonColor.RED,
      text: 'Delete'
    }
  ];
  const rows: any = [
    {
      name: 'hello',
      status: 'bye',
      action: 'hi'
    },
    {
      name: 'flow',
      status: 'die',
      action: 'lie'
    }
  ];
  const dataRows: ReactNode[][] = rows.map((row: any): ReactNode[] => {
    const { name, status, action } = row;

    return [name, status, action];
  });

  return (
    <Layout>
      <h2>Draggable Responsive Table</h2>
      <Table headers={headers} actions={actions} dataRows={dataRows} />
      <br />
      <br />
      <br />
      <h2>Not Draggable Mobile Table</h2>
      <MobileTable headers={headers} actions={actions} dataRows={dataRows} noDraggable />
      <br />
      <br />
    </Layout>
  );
}
