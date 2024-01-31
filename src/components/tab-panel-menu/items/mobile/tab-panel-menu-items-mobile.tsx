import { ReactElement } from 'react';
import { DropdownMenu } from '../../../dropdown-menu/dropdown-menu';
import { ITabPanelItem } from '../../tab-panel-menu-type';
import { ITabPanelMenuItemsProps } from '../tab-panel-menu-items-type';

export function TabPanelMenuItemsMobile(props: ITabPanelMenuItemsProps): ReactElement {
  const { tabs, activeIndex = 0, onTabClick } = props;
  const [firstTab, secondTab, ...restTabs] = tabs;
  const firstTabs = [firstTab, secondTab];

  const getItemClassName = (index: number): string =>
    ['components-tab-panel__tabs-item', index === activeIndex ? 'is-active' : ''].join(' ');

  return (
    <div className="components-tab-panel__tabs show-on-mobile">
      {firstTabs.map((tab: ITabPanelItem, index: number): ReactElement => {
        const { title, icon, onClick } = tab;

        return (
          <div
            key={index}
            className={getItemClassName(index)}
            onClick={(): void => {
              onTabClick?.(index);

              onClick?.();
            }}
          >
            <span>
              {icon ?? null} {title}
            </span>
          </div>
        );
      })}
      <div className={getItemClassName(-1)}>
        <DropdownMenu
          label="More Items"
          text="More Items"
          controls={restTabs.map((item: ITabPanelItem, index: number) => {
            const { title = '' } = item;

            return {
              title,
              isActive: activeIndex === index + 2,
              onClick: (): void => {
                onTabClick?.(index + 2);

                item.onClick?.();
              }
            };
          })}
        />
      </div>
    </div>
  );
}
