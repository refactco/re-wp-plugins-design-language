import { Fragment, ReactElement, ReactNode } from 'react';
import { Icon } from '../../../elements/icon/icon';
import { IconName } from '../../../elements/icon/icon-type';
import { IAccordionItem } from '../../accordion/accordion-type';
import { TableCell } from '../cell/table-cell';
import { ITableProps } from '../table-type';
import {
  StyledMobileTable,
  StyledMobileTableAccordion,
  StyledMobileTableAction,
  StyledMobileTableBody,
  StyledMobileTableCellItem,
  StyledMobileTableHeader
} from './mobile-table-style';

export function MobileTable(props: ITableProps): ReactElement {
  const { headers, dataRows, actions, noDraggable, onDragItemEnd } = props;

  return (
    <StyledMobileTable className="mobile-table">
      <StyledMobileTableHeader>
        <TableCell>{headers[0]}</TableCell>
      </StyledMobileTableHeader>
      <StyledMobileTableBody>
        <StyledMobileTableAccordion
          noDraggable={noDraggable}
          dragId="mobile-table-id"
          onDragItemEnd={(result: any) => {
            onDragItemEnd?.(result);
          }}
          items={dataRows.map((row: ReactNode[], rowIndex): IAccordionItem => {
            const [firstRow, ...restRow] = row;

            return {
              header: (
                <Fragment key={rowIndex}>
                  {noDraggable ? null : <Icon iconName={IconName.DRAG} fill="#798686" />} {firstRow}
                </Fragment>
              ),
              content: (
                <>
                  <StyledMobileTableAction actions={actions} rowIndex={rowIndex} />
                  {restRow.map((cell: ReactNode, cellIndex: number): ReactElement => {
                    return (
                      <StyledMobileTableCellItem key={cellIndex}>
                        <span>{headers[cellIndex + 1]}</span> <span>{cell}</span>
                      </StyledMobileTableCellItem>
                    );
                  })}
                </>
              )
            };
          })}
        />
      </StyledMobileTableBody>
    </StyledMobileTable>
  );
}
