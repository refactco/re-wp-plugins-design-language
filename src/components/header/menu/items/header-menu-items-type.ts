import { NavigationItemBaseProps } from '@wordpress/components/build-types/navigation/types';
import { IButtonProps } from '../../../../elements/button/button-type';
import { ITabPanelItem } from '../../../tab-panel-menu/tab-panel-menu-type';
import { IHeaderMenuProps, SubHeaderType } from '../header-menu-type';

export type TitleButtonItemButtonProps = Omit<IButtonProps, 'size'>;

export interface ITitleButtonItem {
  title: string;
  buttons: TitleButtonItemButtonProps[];
}

export interface IHeaderItemProps extends NavigationItemBaseProps {
  isText?: boolean;
  subHeaderType?: SubHeaderType;
  subHeaderItems?: ITabPanelItem[] | ITitleButtonItem;
}

export interface IHeaderMenuItemsProps extends IHeaderMenuProps {}
