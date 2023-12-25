import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { ReactElement } from 'react';
import { StyledAccordion, StyledAccordionItem } from './accordion-style';
import { IAccordionItem, IAccordionProps } from './accordion-type';

export function Accordion(props: IAccordionProps): ReactElement {
  const { items, transitionTimeout = 500, ...restProps } = props;

  return (
    <StyledAccordion {...restProps} transition transitionTimeout={transitionTimeout}>
      {items.map((item: IAccordionItem, index: number): ReactElement => {
        const { header, content } = item;

        return (
          <StyledAccordionItem
            key={index}
            transitionTimeout={(transitionTimeout as number) / 1000}
            header={
              <>
                {header} <IconManager id={IconId.CHEVRON_DOWN} className="chevron-down" />
              </>
            }
          >
            {content}
          </StyledAccordionItem>
        );
      })}
    </StyledAccordion>
  );
}
