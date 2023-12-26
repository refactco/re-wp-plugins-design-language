import { IAccordionItem } from '@components/accordion/accordion-type';
import { ReactElement, ReactNode } from 'react';
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
  const { headers, dataRows, actions } = props;

  return (
    <StyledMobileTable className="mobile-table">
      <StyledMobileTableHeader>
        <TableCell>{headers[0]}</TableCell>
      </StyledMobileTableHeader>
      <StyledMobileTableBody>
        <StyledMobileTableAccordion
          items={dataRows.map((row: ReactNode[], rowIndex): IAccordionItem => {
            const [firstRow, ...restRow] = row;

            return {
              header: firstRow,
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
