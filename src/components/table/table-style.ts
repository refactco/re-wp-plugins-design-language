import styled from 'styled-components';
import { TableRow } from './row/table-row';
import { IStyledTableProps } from './table-type';

const tableMinWidth: string = '1172px';

export const StyledMediaTable = styled.div`
  & > .desktop-table {
    display: none;

    @media (min-width: ${tableMinWidth}) {
      display: block;
    }
  }

  & > .mobile-table {
    display: block;

    @media (min-width: ${tableMinWidth}) {
      display: none;
    }
  }
`;

export const StyledTable = styled.div<IStyledTableProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid #d7dbdb;
  background: #fff;
  min-width: ${tableMinWidth};
`;

export const StyledTableHeader = styled(TableRow)`
  background-color: #e5f7e3;
  height: 48px;
`;

export const StyledTableBody = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
