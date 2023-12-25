/// <reference path="../../../types.d.ts" />

import { StyledSvg } from './icon-style';
import { IIconProps, IconSize } from './icon-type';
import sprite16 from './sprites/sprite-16.svg';
import sprite24 from './sprites/sprite-24.svg';
import sprite32 from './sprites/sprite-32.svg';
import sprite48 from './sprites/sprite-48.svg';
import sprite72 from './sprites/sprite-72.svg';

export function IconManager(props: IIconProps) {
  const { id, size = IconSize.SMALL, fill = 'black', className } = props;

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
    <StyledSvg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill={fill} className={className}>
      <use xlinkHref={`${spriteUrl}#${id}`}></use>
    </StyledSvg>
  );
}
