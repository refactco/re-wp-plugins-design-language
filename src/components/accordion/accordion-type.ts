import { AccordionItemProps, AccordionProps } from '@szhsin/react-accordion';
import { ReactNode } from 'react';

export interface IAccordionItem {
  header: ReactNode;
  content: ReactNode;
}

export interface IAccordionProps extends AccordionProps {
  items: IAccordionItem[];
  noDraggable?: boolean;
  dragId?: string;
  onDragItemEnd?(result: any): void;
}

export interface IAccordionItemProps extends AccordionItemProps {
  transitionTimeout: number;
}
