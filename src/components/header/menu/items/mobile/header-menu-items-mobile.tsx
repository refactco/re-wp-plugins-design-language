import { ReactElement } from 'react';
import { DropdownMenu } from '../../../../dropdown-menu/dropdown-menu';
import { SubHeader } from '../../../sub/sub-header';
import { StyledHeaderItem } from '../header-menu-items-style';
import { IHeaderItemProps, IHeaderMenuItemsProps } from '../header-menu-items-type';
import { StyledHeaderMenuItemsMobile } from './header-menu-items-mobile-style';

export function HeaderMenuItemsMobile(props: IHeaderMenuItemsProps): ReactElement {
  const { items, activeItemIndex = 0, onSelectItem, onSelectSubItem, activeSubItemIndex } = props;
  const { subHeaderItems, subHeaderType } = items[activeItemIndex] ?? {};
  const [firstItem, ...restItems] = items;
  const {
    subHeaderItems: firstSubHeaderItems,
    subHeaderType: firstSubHeaderType,
    ...restFirstItemProps
  } = firstItem;

  return (
    <StyledHeaderMenuItemsMobile>
      <StyledHeaderItem
        {...restFirstItemProps}
        onClick={(event: any): void => {
          onSelectItem?.(0);
          firstItem.onClick?.(event);
        }}
      />
      <StyledHeaderItem>
        <DropdownMenu
          label="More Items"
          text="More Items"
          controls={restItems.map((item: IHeaderItemProps, index: number) => {
            const { title = '' } = item;

            return {
              title,
              isActive: activeItemIndex === index + 1,
              onClick: (event: any): void => {
                onSelectItem?.(index + 1);
                item.onClick?.(event);
              }
            };
          })}
        />
      </StyledHeaderItem>
      <SubHeader
        subHeaderItems={subHeaderItems}
        subHeaderType={subHeaderType}
        activeItemIndex={activeSubItemIndex}
        onSubItemClick={(index: number): void => {
          onSelectSubItem?.(index);
        }}
      />

      {/* {items.map((item: IHeaderItemProps, index: number): ReactElement => {
        const { subHeaderItems, subHeaderType, ...restItems } = item;

        return (
          <Fragment key={index}>
            <StyledHeaderItem
              key={index}
              {...restItems}
              onClick={(event: any): void => {
                onSelectItem?.(index);
                item.onClick?.(event);
              }}
            />
          </Fragment>
        );
      })}
      <SubHeader
        subHeaderItems={subHeaderItems}
        subHeaderType={subHeaderType}
        activeItemIndex={activeSubItemIndex}
        onSubItemClick={(index: number): void => {
          onSelectSubItem?.(index);
        }}
      /> */}
    </StyledHeaderMenuItemsMobile>
  );
}
