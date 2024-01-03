/// <reference path="../../../types.d.ts" />

import { StyledSvg } from './icon-style';
import { IIconProps, IconSize } from './icon-type';
import sprite24 from './sprites/sprite-24.svg';

export function Icon(props: IIconProps) {
  const { iconName: id, size = IconSize.SMALL, fill = 'black', className } = props;
  const baseUrl = process.env.BASE_ICON_URL;
  const data = sprite24;

  console.log({ sprite24 });

  // let spriteUrl: string = sprite24;

  // if (size === IconSize.TINY) {
  //   spriteUrl = sprite16;
  // } else if (size === IconSize.MEDIUM) {
  //   spriteUrl = sprite32;
  // } else if (size === IconSize.LARGE) {
  //   spriteUrl = sprite48;
  // } else if (size === IconSize.X_LARGE) {
  //   spriteUrl = sprite72;
  // }

  // console.log({ spriteUrl });

  return (
    <StyledSvg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill={fill} className={className}>
      <use xlinkHref={`${baseUrl}-${size}.svg#${id}`}></use>
    </StyledSvg>
  );
}
