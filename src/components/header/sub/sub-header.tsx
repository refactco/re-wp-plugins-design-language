import { TabPanelMenu } from '@components/tab-panel-menu/tab-panel-menu';
import { ITabPanelItem } from '@components/tab-panel-menu/tab-panel-menu-type';
import { Button } from '@elements/button/button';
import { ButtonSize } from '@elements/button/button-type';
import { ReactElement, ReactNode } from 'react';
import { ITitleButtonItem, SubHeaderType, TitleButtonItemButtonProps } from '../menu/header-menu-type';
import { StyledSubHeader, StyledTitleButtonItem, StyledTitleButtonItemTitle } from './sub-header-style';
import { ISubHeaderProps } from './sub-header-type';

export function SubHeader(props: ISubHeaderProps): ReactNode {
  const { subHeaderItems, subHeaderType = SubHeaderType.TAB_PANEL } = props;

  function innerSubHeader() {
    if (subHeaderType === SubHeaderType.TITLE_BUTTON) {
      const { title, buttons } = subHeaderItems as ITitleButtonItem;

      return (
        <StyledTitleButtonItem>
          <StyledTitleButtonItemTitle>{title}</StyledTitleButtonItemTitle>
          {buttons.map((buttonProps: TitleButtonItemButtonProps): ReactElement => {
            return <Button {...buttonProps} size={ButtonSize.X_SMALL} />;
          })}
        </StyledTitleButtonItem>
      );
    }

    return <TabPanelMenu tabs={subHeaderItems as ITabPanelItem[]} />;
  }

  return <StyledSubHeader>{subHeaderItems ? innerSubHeader() : null}</StyledSubHeader>;
}
