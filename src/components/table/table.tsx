import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { DesktopTable } from './desktop-table/desktop-table';
import { MobileTable } from './mobile-table/mobile-table';
import { StyledMediaTable } from './table-style';
import { ITableProps } from './table-type';

export function Table(props: ITableProps): ReactElement {
  const { dataRows, onDragItemEnd } = props;
  const [stateItems, setStateItems] = useState<ReactNode[][]>([]);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const newItems = Array.from(stateItems);
    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);

    setStateItems(newItems);

    onDragItemEnd?.(result);
  };

  useEffect((): void => {
    setStateItems(dataRows);
  }, [dataRows]);

  return (
    <StyledMediaTable>
      <DesktopTable {...props} dataRows={stateItems} onDragItemEnd={onDragEnd} />
      <MobileTable {...props} dataRows={stateItems} onDragItemEnd={onDragEnd} />
    </StyledMediaTable>
  );
}
