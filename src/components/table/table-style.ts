import styled from 'styled-components';
import { MediaScreenSize, mediaStyle } from '../../styles/media';
import { TableRow } from './row/table-row';
import { IStyledTableProps } from './table-type';

const tableMinWidth: string = '1172px';

export const StyledMediaTable = styled.div`
  & > .desktop-table {
    display: block;

    ${mediaStyle(MediaScreenSize.TABLET)`
      display: none;
    `}
  }

  & > .mobile-table {
    display: none;

    ${mediaStyle(MediaScreenSize.TABLET)`
      display: block;
    `}
  }
`;

export const StyledTable = styled.div<IStyledTableProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid #d7dbdb;
  background: #fff;
  // min-width: ${tableMinWidth};
`;

export const StyledTableHeader = styled(TableRow)`
  background-color: #e5f7e3;
  height: 48px;
`;
