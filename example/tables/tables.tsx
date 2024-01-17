import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { ITableAction } from '../../src/components/table/action/table-action-type';
import { MobileTable } from '../../src/components/table/mobile-table/mobile-table';
import { Table } from '../../src/components/table/table';
import { ButtonColor } from '../../src/elements/button/button-type';

export default function Tables(): ReactElement {
  const [myRows, setMyRows] = useState<ReactNode[][]>([]);
  const headers: string[] = ['name', 'status', 'action'];
  const actions: ITableAction[] = [
    {
      text: 'Edit',
      onClick: (rowIndex: number, row: ReactNode[]): void => {
        console.log({ rowIndex, row });
      }
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

  useEffect((): void => {
    const dataRows: ReactNode[][] = rows.map((row: any): ReactNode[] => {
      const { name, status, action } = row;

      return [name, status, action];
    });
    setMyRows(dataRows);
  }, []);

  return (
    <>
      <h2>Draggable Responsive Table</h2>
      <Table headers={headers} actions={actions} dataRows={myRows} />
      <br />
      <br />
      <br />
      <h2>Not Draggable Mobile Table</h2>
      <MobileTable headers={headers} actions={actions} dataRows={myRows} noDraggable />
      <br />
      <br />
    </>
  );
}
