import { Fragment, ReactElement } from 'react';
import { SubHeader } from '../../../sub/sub-header';
import { StyledHeaderItem } from '../header-menu-items-style';
import { IHeaderItemProps, IHeaderMenuItemsProps } from '../header-menu-items-type';
import { StyledHeaderMenuItemsDesktop } from './header-menu-items-desktop-style';

export function HeaderMenuItemsDesktop(props: IHeaderMenuItemsProps): ReactElement {
  const { items, activeItemIndex = 0, onSelectItem, onSelectSubItem, activeSubItemIndex } = props;
  const { subHeaderItems, subHeaderType } = items[activeItemIndex] ?? {};

  return (
    <StyledHeaderMenuItemsDesktop>
      {items.map((item: IHeaderItemProps, index: number): ReactElement => {
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
      {subHeaderItems ? (
        <SubHeader
          subHeaderItems={subHeaderItems}
          subHeaderType={subHeaderType}
          activeItemIndex={activeSubItemIndex}
          onSubItemClick={(index: number): void => {
            onSelectSubItem?.(index);
          }}
        />
      ) : null}
    </StyledHeaderMenuItemsDesktop>
  );
}
