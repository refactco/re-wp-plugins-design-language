import sprite16 from '../../assets/sprite-16.svg';
import sprite24 from '../../assets/sprite-24.svg';
import sprite32 from '../../assets/sprite-32.svg';
import sprite48 from '../../assets/sprite-48.svg';
import sprite72 from '../../assets/sprite-72.svg';
import { StyledSvg } from './icon-style';
import { IIconProps, IconSize } from './icon-type';

export function IconManager(props: IIconProps) {
  const { id, size = IconSize.SMALL, fill = 'black' } = props;

  let spriteUrl: string = sprite24;

  if (size === IconSize.TINY) {
    spriteUrl = sprite16;
  } else if (size === IconSize.MEDIUM) {
    spriteUrl = sprite32;
  } else if (size === IconSize.LARGE) {
    spriteUrl = sprite48;
  } else if (size === IconSize.X_LARGE) {
    spriteUrl = sprite72;
  }

  return (
    <StyledSvg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill={fill}>
      <use xlinkHref={`${spriteUrl}#${id}`}></use>
    </StyledSvg>
  );
}
