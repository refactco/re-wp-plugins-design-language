import { Fragment, ReactElement } from 'react';
import { SubHeader } from '../sub/sub-header';
import { StyledHeaderGroup, StyledHeaderItem, StyledHeaderMenu } from './header-menu-style';
import { IHeaderItemProps, IHeaderMenuProps } from './header-menu-type';

export function HeaderMenu(props: IHeaderMenuProps): ReactElement {
  const { items, activeItemIndex = 0, onSelectItem, onSelectSubItem, activeSubItemIndex } = props;
  const { subHeaderItems, subHeaderType } = items[activeItemIndex] ?? {};

  return (
    <StyledHeaderMenu title="">
      <StyledHeaderGroup>
        {items.map((item: IHeaderItemProps, index: number): ReactElement => {
          const { subHeaderItems, subHeaderType, ...restItems } = item;

          return (
            <Fragment key={index}>
              <StyledHeaderItem
                key={index}
                {...restItems}
                onClick={(event: any): void => {
                  console.log('clicked');
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
        />
      </StyledHeaderGroup>
    </StyledHeaderMenu>
  );
}
