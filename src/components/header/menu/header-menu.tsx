import { ReactElement } from 'react';
import { StyledHeaderMenu } from './header-menu-style';
import { IHeaderMenuProps } from './header-menu-type';
import { HeaderMenuItemsDesktop } from './items/desktop/header-menu-items-desktop';
import { HeaderMenuItemsMobile } from './items/mobile/header-menu-items-mobile';

export function HeaderMenu(props: IHeaderMenuProps): ReactElement {
  // const { items, activeItemIndex = 0, onSelectItem, onSelectSubItem, activeSubItemIndex } = props;
  // const { subHeaderItems, subHeaderType } = items[activeItemIndex] ?? {};

  return (
    <StyledHeaderMenu title="">
      <HeaderMenuItemsDesktop {...props} />
      <HeaderMenuItemsMobile {...props} />
      {/* <StyledHeaderGroup>
      </StyledHeaderGroup> */}
    </StyledHeaderMenu>
  );
}
