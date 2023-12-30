import { ReactElement } from 'react';
import { SubHeader } from '../sub/sub-header';
import { StyledHeaderGroup, StyledHeaderItem, StyledHeaderMenu } from './header-menu-style';
import { IHeaderItemProps, IHeaderMenuProps } from './header-menu-type';

export function HeaderMenu(props: IHeaderMenuProps): ReactElement {
  const { items, activeItemIndex = 0, onSelectItem } = props;
  const { subHeaderItems, subHeaderType } = items[activeItemIndex] ?? {};

  return (
    <StyledHeaderMenu title="">
      <StyledHeaderGroup>
        {items.map((item: IHeaderItemProps, index: number): ReactElement => {
          return (
            <>
              <StyledHeaderItem
                key={index}
                {...item}
                onClick={(event: any): void => {
                  console.log('clicked');
                  onSelectItem?.(index);
                  item.onClick?.(event);
                }}
              />
            </>
          );
        })}
        <SubHeader subHeaderItems={subHeaderItems} subHeaderType={subHeaderType} />
      </StyledHeaderGroup>
    </StyledHeaderMenu>
  );
}
