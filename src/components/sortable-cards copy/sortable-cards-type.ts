import { IBaseVoidProps } from '@base/base-interface';
import { DropdownMenuProps } from '@wordpress/components/build-types/dropdown-menu/types';

export interface ISortableCardItem {
  id: string;
  title: string;
  badge: string;
}

export interface ISortableCardsProps extends IBaseVoidProps {
  items: ISortableCardItem[];
  selectedItemId?: string;
  menuItems?: Omit<DropdownMenuProps, 'icon'>;
  onSelectedItemChange?(id: string): void;
}
