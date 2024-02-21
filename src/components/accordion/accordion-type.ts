import { AccordionItemProps, AccordionProps } from '@szhsin/react-accordion';
import { MouseEvent, ReactNode } from 'react';
import { IButtonProps } from '../../elements/button/button-type';

export interface IAccordionItemButtonClickParams {
  itemIndex: number;
  item: IAccordionItem;
  event: MouseEvent<HTMLButtonElement>;
}

export interface IAccordionItemButtonProps extends Omit<IButtonProps, 'size' | 'onClick'> {
  onClick?(params: IAccordionItemButtonClickParams): void;
}

export interface IAccordionItem {
  header: ReactNode;
  content: ReactNode;
  initialEntered?: boolean;
  buttons?: IAccordionItemButtonProps[];
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
