import { ITableAction } from '@components/table/action/table-action-type';
import { MobileTable } from '@components/table/mobile-table/mobile-table';
import { Table } from '@components/table/table';
import { ButtonColor } from '@elements/button/button-type';
import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
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

    return [
      <>
        <IconManager id={IconId.DRAG} fill="#798686" />
        {name}
      </>,
      status,
      action
    ];
  });

  return (
    <Layout>
      <Table headers={headers} actions={actions} dataRows={dataRows} />
      <br />
      <br />
      <br />
      <MobileTable headers={headers} actions={actions} dataRows={dataRows} />
      <br />
      <br />
    </Layout>
  );
}
