import { IBaseProps } from '@base/base-interface';
import { ISectionHeaderProps } from './header/section-header-type';

export interface ISectionProps extends IBaseProps {
  headerProps: ISectionHeaderProps;
}
