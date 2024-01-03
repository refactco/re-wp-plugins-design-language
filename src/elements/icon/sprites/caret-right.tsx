import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function CaretRight(props: ISvgProps) {
  const { size, fill, className } = props;

  return (
    <StyledSvg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 72 72"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon=caret_right">
        <path
          id="Icon color"
          d="M33.1802 48.4202C32.8985 48.7041 32.5151 48.8639 32.1152 48.8639C31.7152 48.8639 31.3318 48.7041 31.0502 48.4202L30.4502 47.8202C30.1572 47.5379 29.9943 47.1469 30.0002 46.7402V25.2602C29.9943 24.8534 30.1572 24.4624 30.4502 24.1802L31.0502 23.5802C31.3318 23.2962 31.7152 23.1365 32.1152 23.1365C32.5151 23.1365 32.8985 23.2962 33.1802 23.5802L44.5502 34.9502C44.8402 35.2224 45.0047 35.6024 45.0047 36.0002C45.0047 36.3979 44.8402 36.778 44.5502 37.0502L33.1802 48.4202Z"
        />
      </g>
    </StyledSvg>
  );
}
