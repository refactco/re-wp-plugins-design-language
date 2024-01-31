import { ReactElement } from 'react';
import { ButtonIconPosition } from '../../elements/button/button-type';
import { Icon } from '../../elements/icon/icon';
import { IconName } from '../../elements/icon/icon-type';
import { StyledDropDownMenu } from './dropdown-menu-style';
import { IDropdownMenuProps } from './dropdown-menu-type';

export function DropdownMenu(props: IDropdownMenuProps): ReactElement {
  const { icon = <Icon iconName={IconName.CHEVRON_DOWN} />, toggleProps, ...restProps } = props;

  return (
    <StyledDropDownMenu
      {...restProps}
      icon={icon}
      toggleProps={{ iconPosition: ButtonIconPosition.END, ...toggleProps }}
    />
  );
}
