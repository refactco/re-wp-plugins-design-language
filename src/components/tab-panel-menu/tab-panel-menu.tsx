import { ReactElement } from 'react';
import { StyledTabPanel } from './tab-panel-menu-style';
import { ITabPanelItem, ITabPanelMenuProps, TabItemSize } from './tab-panel-menu-type';

export function TabPanelMenu(props: ITabPanelMenuProps): ReactElement {
  const { tabItemMinWidth = '80px', tabItemSize = TabItemSize.WITH_MIN_WIDTH, tabs, activeIndex = 0, onTabClick } = props;

  return (
    <StyledTabPanel {...props} tabItemSize={tabItemSize} tabItemMinWidth={tabItemMinWidth}>
      <div className="components-tab-panel__tabs">
        {tabs.map((tab: ITabPanelItem, index: number): ReactElement => {
          const { icon, onClick } = tab;

          const className: string = ['components-tab-panel__tabs-item', index === activeIndex ? 'is-active' : ''].join(' ');

          return (
            <div
              className={className}
              onClick={(): void => {
                onTabClick?.(index);
                onClick?.();
              }}
            >
              <span>
                {icon ?? null} {tab.title}
              </span>
            </div>
          );
        })}
      </div>
    </StyledTabPanel>
  );
}
