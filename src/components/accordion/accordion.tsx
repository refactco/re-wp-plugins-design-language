import { DragContainer } from '@components/drag-container/drag-container';
import { DraggableBox } from '@components/drag-container/draggable-box/draggable-box';
import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { ReactElement } from 'react';
import { StyledAccordion, StyledAccordionItem } from './accordion-style';
import { IAccordionItem, IAccordionProps } from './accordion-type';

export function Accordion(props: IAccordionProps): ReactElement {
  const { items, transitionTimeout = 500, dragId = '', noDraggable, onDragItemEnd, ...restProps } = props;

  return (
    <StyledAccordion {...restProps} transition transitionTimeout={transitionTimeout}>
      <DragContainer
        droppableId={dragId}
        onDragEnd={(result: any) => {
          onDragItemEnd?.(result);
        }}
        notDraggable={noDraggable}
      >
        <div>
          {items.map((item: IAccordionItem, index: number): ReactElement => {
            const { header, content } = item;

            return (
              <DraggableBox key={index} draggableId={`${dragId}-${index}`} index={index} notDraggable={noDraggable}>
                <div className="draggable-container">
                  <StyledAccordionItem
                    transitionTimeout={(transitionTimeout as number) / 1000}
                    header={
                      <>
                        {header} <IconManager id={IconId.CHEVRON_DOWN} className="chevron-down" />
                      </>
                    }
                  >
                    {content}
                  </StyledAccordionItem>
                </div>
              </DraggableBox>
            );
          })}
        </div>
      </DragContainer>
    </StyledAccordion>
  );
}
