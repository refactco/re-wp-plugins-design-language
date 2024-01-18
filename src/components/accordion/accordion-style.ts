import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styled from 'styled-components';
import { IAccordionItemProps, IAccordionProps } from './accordion-type';

export const StyledAccordion = styled(Accordion)<IAccordionProps>`
  & .draggable-container {
    position: relative;

    &:not(:last-of-type) {
      & > .szh-accordion__item {
        border-bottom: none;
      }
    }
  }
`;

export const StyledAccordionItem = styled(AccordionItem)<IAccordionItemProps>`
  border-radius: 4px;
  border: 1px solid #d7dbdb;

  &:not(:last-of-type) {
    border-bottom: none;
  }

  .szh-accordion__item {
    &-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 24px 32px;
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      text-align: left;
      color: #002729;
      background-color: transparent;
      border: none;

      &:hover {
        background-color: #f3f3f3;
      }
    }

    &-content {
      transition: height ${(props) => props.transitionTimeout}s cubic-bezier(0, 0, 0, 1);
    }

    &-panel {
      padding: 25px 32px;
    }
  }

  .chevron-down {
    margin-left: auto;
    transition: transform ${(props) => props.transitionTimeout}s cubic-bezier(0, 0, 0, 1);
  }

  &.szh-accordion__item--expanded {
    .szh-accordion__item-btn {
      background-color: #e5f7e3;
      border-bottom: 1px solid #d7dbdb;
    }
    .chevron-down {
      transform: rotate(180deg);
    }
  }
`;

export const StyledAccordionButtons = styled.div`
  position: absolute;
  right: 88px;
  top: 17.5px;
  // transform: translateY(-50%);

  & > button:not(:first-of-type) {
    margin-inline-start: 12px;
  }
`;
