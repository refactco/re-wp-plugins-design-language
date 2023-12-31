import styled from 'styled-components';
import { Accordion } from '../../accordion/accordion';
import { TableAction } from '../action/table-action';
import { StyledTable, StyledTableHeader } from '../table-style';
import { IStyledTableProps } from '../table-type';

export const StyledMobileTable = styled(StyledTable)<IStyledTableProps>`
  // width: 343px;
  min-width: 343px;
`;

export const StyledMobileTableHeader = styled(StyledTableHeader)`
  background-color: #fff;
  cursor: pointer;
`;

export const StyledMobileTableBody = styled.div`
  width: 100%;
`;

export const StyledMobileTableAccordion = styled(Accordion)`
  & .draggable-container {
    &:not(:last-of-type) {
      & > .szh-accordion__item {
        border-bottom: 1px solid #d7dbdb;
      }
    }
  }

  & .szh-accordion__item {
    border-radius: 0;
    border: none;

    // &:not(:last-of-type) {
    //   border-bottom: 1px solid #d7dbdb;
    // }

    &-btn {
      padding: 12px;
      line-height: 24px;
      font-size: 14px;
      font-weight: 400;
    }

    &-panel {
      padding: 0;
    }

    &--expanded {
      background-color: #e5f7e3;

      & .szh-accordion__item-btn {
        border: none;
      }
    }
  }
`;

export const StyledMobileTableAction = styled(TableAction)`
  padding-inline: 12px;
  padding-block: 12px 10px;
`;

export const StyledMobileTableCellItem = styled.div`
  display: flex;
  height: 48px;
  box-sizing: border-box;
  padding: 10px 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  & > span {
    color: #002729;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }

  & > span:first-of-type {
    font-weight: 600;
  }
`;
