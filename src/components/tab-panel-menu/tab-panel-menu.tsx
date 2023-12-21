import { ReactElement } from 'react';
import { StyledTabPanel } from './tab-panel-menu-style';
import { ITabPanelMenuProps, TabItemSize } from './tab-panel-menu-type';

export function TabPanelMenu(props: ITabPanelMenuProps): ReactElement {
  const { tabItemMinWidth = '80px', tabItemSize = TabItemSize.WITH_MIN_WIDTH } = props;

  return <StyledTabPanel {...props} tabItemSize={tabItemSize} tabItemMinWidth={tabItemMinWidth} />;
}
