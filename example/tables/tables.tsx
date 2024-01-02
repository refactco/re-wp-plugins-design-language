import { ReactElement, ReactNode } from 'react';
import { ITableAction } from '../../src/components/table/action/table-action-type';
import { MobileTable } from '../../src/components/table/mobile-table/mobile-table';
import { Table } from '../../src/components/table/table';
import { ButtonColor } from '../../src/elements/button/button-type';

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
    <>
      <h2>Draggable Responsive Table</h2>
      <Table headers={headers} actions={actions} dataRows={dataRows} />
      <br />
      <br />
      <br />
      <h2>Not Draggable Mobile Table</h2>
      <MobileTable headers={headers} actions={actions} dataRows={dataRows} noDraggable />
      <br />
      <br />
    </>
  );
}
