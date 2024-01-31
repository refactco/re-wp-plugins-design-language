import { ReactElement } from 'react';
import { TabPanelMenuItemsDesktop } from './items/desktop/tab-panel-menu-items-desktop';
import { StyledTabPanel } from './tab-panel-menu-style';
import { ITabPanelMenuProps, TabItemSize } from './tab-panel-menu-type';
import { TabPanelMenuItemsMobile } from './items/mobile/tab-panel-menu-items-mobile';

export function TabPanelMenu(props: ITabPanelMenuProps): ReactElement {
  const {
    tabItemMinWidth = '80px',
    tabItemSize = TabItemSize.WITH_MIN_WIDTH,
    ...restProps
  } = props;

  return (
    <StyledTabPanel tabItemSize={tabItemSize} tabItemMinWidth={tabItemMinWidth}>
      <TabPanelMenuItemsDesktop {...restProps} />
      <TabPanelMenuItemsMobile {...restProps} />
    </StyledTabPanel>
  );
}
