import { DragContainer } from '@components/drag-container/drag-container';
import { DraggableBox } from '@components/drag-container/draggable-box/draggable-box';
import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { DropdownMenu } from '@wordpress/components';
import { ReactElement, useState } from 'react';
import { StyledListContainer, StyledListItem, StyledListItemBadge, StyledListItemTitle } from './sortable-cards-style';
import { ISortableCardItem, ISortableCardsProps } from './sortable-cards-type';

export function SortableCards(props: ISortableCardsProps): ReactElement {
  const { items, selectedItemId, menuItems, onSelectedItemChange } = props;
  const [stateItems, setStateItems] = useState<ISortableCardItem[]>(items);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const newItems = Array.from(stateItems);
    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);

    setStateItems(newItems);
  };

  return (
    <DragContainer droppableId="droppable" onDragEnd={onDragEnd}>
      <StyledListContainer>
        {stateItems.map((item: ISortableCardItem, index) => {
          const { id, title, badge } = item;
          const isSelected: boolean = selectedItemId === id;

          return (
            <DraggableBox key={id} draggableId={id} index={index}>
              <StyledListItem
                selected={isSelected}
                onClick={(): void => {
                  onSelectedItemChange?.(id);
                }}
              >
                <IconManager id={IconId.DRAG} />
                <StyledListItemTitle>{title}</StyledListItemTitle>
                {badge ? <StyledListItemBadge selected={isSelected}>{badge}</StyledListItemBadge> : null}
                {menuItems ? (
                  <DropdownMenu {...menuItems} icon={<IconManager id={IconId.MORE_VERTICAL} />} on></DropdownMenu>
                ) : null}
              </StyledListItem>
            </DraggableBox>
          );
        })}
      </StyledListContainer>
    </DragContainer>
  );
}
