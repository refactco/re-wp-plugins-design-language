import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function CaretDown(props: ISvgProps) {
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
      <g id="Icon=caret_down">
        <path
          id="Icon color"
          d="M23.5802 33.1802C23.2962 32.8985 23.1365 32.5151 23.1365 32.1152C23.1365 31.7152 23.2962 31.3318 23.5802 31.0502L24.1802 30.4502C24.4624 30.1572 24.8534 29.9943 25.2602 30.0002H46.7402C47.1469 29.9943 47.5379 30.1572 47.8202 30.4502L48.4202 31.0502C48.7041 31.3318 48.8639 31.7152 48.8639 32.1152C48.8639 32.5151 48.7041 32.8985 48.4202 33.1802L37.0502 44.5502C36.778 44.8402 36.3979 45.0047 36.0002 45.0047C35.6024 45.0047 35.2224 44.8402 34.9502 44.5502L23.5802 33.1802Z"
        />
      </g>
    </StyledSvg>
  );
}
