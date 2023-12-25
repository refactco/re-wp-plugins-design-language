import { AccordionItemProps, AccordionProps } from '@szhsin/react-accordion';
import { ReactNode } from 'react';

export interface IAccordionItem {
  header: string;
  content: ReactNode;
}

export interface IAccordionProps extends AccordionProps {
  items: IAccordionItem[];
}

export interface IAccordionItemProps extends AccordionItemProps {
  transitionTimeout: number;
}
