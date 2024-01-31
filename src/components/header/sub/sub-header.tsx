import { ReactElement, ReactNode } from 'react';
import { Button } from '../../../elements/button/button';
import { ButtonSize } from '../../../elements/button/button-type';
import { TabPanelMenu } from '../../tab-panel-menu/tab-panel-menu';
import { ITabPanelItem } from '../../tab-panel-menu/tab-panel-menu-type';
import { SubHeaderType } from '../menu/header-menu-type';
import { ITitleButtonItem, TitleButtonItemButtonProps } from '../menu/items/header-menu-items-type';
import {
  StyledSubHeader,
  StyledTitleButtonItem,
  StyledTitleButtonItemTitle
} from './sub-header-style';
import { ISubHeaderProps } from './sub-header-type';

export function SubHeader(props: ISubHeaderProps): ReactNode {
  const {
    subHeaderItems,
    subHeaderType = SubHeaderType.TAB_PANEL,
    activeItemIndex,
    onSubItemClick
  } = props;

  function innerSubHeader() {
    if (subHeaderType === SubHeaderType.TITLE_BUTTON) {
      const { title, buttons } = subHeaderItems as ITitleButtonItem;

      return (
        <StyledTitleButtonItem>
          <StyledTitleButtonItemTitle>{title}</StyledTitleButtonItemTitle>
          {buttons.map((buttonProps: TitleButtonItemButtonProps, index: number): ReactElement => {
            return <Button {...buttonProps} size={ButtonSize.X_SMALL} key={index} />;
          })}
        </StyledTitleButtonItem>
      );
    }

    return (
      <TabPanelMenu
        tabs={subHeaderItems as ITabPanelItem[]}
        activeIndex={activeItemIndex}
        onTabClick={(tabIndex: number): void => {
          onSubItemClick?.(tabIndex);
        }}
      />
    );
  }

  return <StyledSubHeader>{subHeaderItems ? innerSubHeader() : null}</StyledSubHeader>;
}
