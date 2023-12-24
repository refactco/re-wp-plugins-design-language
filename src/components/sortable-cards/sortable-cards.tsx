import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { DropdownMenu } from '@wordpress/components';
import { ReactElement, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
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
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(droppableProvided: any) => {
          const { droppableProps, innerRef, placeholder } = droppableProvided;

          return (
            <StyledListContainer {...droppableProps} ref={innerRef}>
              {stateItems.map((item: ISortableCardItem, index) => {
                const { id, title, badge } = item;
                const isSelected: boolean = selectedItemId === id;

                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(draggableProvided: any) => {
                      const { innerRef, draggableProps, dragHandleProps } = draggableProvided;

                      return (
                        <StyledListItem
                          ref={innerRef}
                          selected={isSelected}
                          {...draggableProps}
                          {...dragHandleProps}
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
                      );
                    }}
                  </Draggable>
                );
              })}
              {placeholder}
            </StyledListContainer>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

// import { IconManager } from '@elements/icon/icon';
// import { IconId } from '@elements/icon/icon-type';
// import { Draggable, Panel, PanelBody } from '@wordpress/components';
// import { ReactElement } from 'react';
// import { ISortableCardsProps } from './sortable-cards-type';

// export function SortableCards(props: ISortableCardsProps): ReactElement {
//   const { elementId } = props;

//   return (
//     <div id={elementId}>
//       <Panel>
//         <PanelBody>
//           <Draggable elementId={elementId} transferData="s">
//             {({ onDraggableStart, onDraggableEnd }) => (
//               <div className="example-drag-handle" draggable onDragStart={onDraggableStart} onDragEnd={onDraggableEnd}>
//                 <IconManager id={IconId.CLEAR} />
//               </div>
//             )}
//           </Draggable>
//         </PanelBody>
//       </Panel>
//     </div>
//   );
// }

// import { Draggable } from '@wordpress/components';
// import { ReactElement, useState } from 'react';
// import styled from 'styled-components';

// // Styled components
// const List = styled.div`
//   /* Add styles for the list container */
// `;

// const Card = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #f0f0f0; // Replace with the actual color from your image
//   margin: 8px 0;
//   padding: 12px;
//   border-radius: 4px;
//   // Add more styles to match the image
// `;

// // The React component
// export function SortableCards(): ReactElement {
//   const [items, setItems] = useState([
//     { id: 1, name: 'Name 1', badge: 'Badge 1' },
//     { id: 2, name: 'Name 2', badge: 'Badge 2' },
//     { id: 3, name: 'Name 3', badge: 'Badge 3' }
//     // ... more items
//   ]);

//   // Function to reorder items
//   const reorder = (list: any, startIndex: number, endIndex: number) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//     return result;
//   };

//   // Function to handle drag end event
//   const onDragEnd = (dragIndex: number, hoverIndex: number) => {
//     if (dragIndex !== hoverIndex) {
//       const newItems: any = reorder(items, dragIndex, hoverIndex);
//       setItems(newItems);
//     }
//   };

//   return (
//     <List id="test-draggable-id">
//       {items.map((item, index) => (
//         <div id={`test-draggable-id-${index}`}>
//           <Draggable
//             elementId={`test-draggable-id-${index}`}
//             transferData={{}}
//             key={item.id}
//             onDragEnd={() => onDragEnd(index, 1)}
//             // You will need to pass any additional props required by Draggable here
//           >
//             {({ onDraggableStart, onDraggableEnd }) => (
//               <Card draggable onDragStart={onDraggableStart} onDragEnd={onDraggableEnd}>
//                 <div>{item.name}</div>
//                 <div>{item.badge}</div>
//               </Card>
//             )}
//           </Draggable>
//         </div>
//       ))}
//     </List>
//   );
// }
