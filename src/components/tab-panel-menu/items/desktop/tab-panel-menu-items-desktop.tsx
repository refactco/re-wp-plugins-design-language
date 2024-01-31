import { ReactElement } from 'react';
import { ITabPanelItem } from '../../tab-panel-menu-type';
import { ITabPanelMenuItemsProps } from '../tab-panel-menu-items-type';

export function TabPanelMenuItemsDesktop(props: ITabPanelMenuItemsProps): ReactElement {
  const { tabs, activeIndex = 0, onTabClick } = props;

  return (
    <div className="components-tab-panel__tabs show-on-desktop">
      {tabs.map((tab: ITabPanelItem, index: number): ReactElement => {
        const { icon, onClick } = tab;

        const className: string = [
          'components-tab-panel__tabs-item',
          index === activeIndex ? 'is-active' : ''
        ].join(' ');

        return (
          <div
            key={index}
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
  );
}
