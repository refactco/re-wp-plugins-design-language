import { IBaseProps } from '../../base/base-interface';
import { IconName } from '../../elements/icon/icon-type';

export interface IBlockProps extends IBaseProps {
  iconName: IconName;
  title: string;
}
