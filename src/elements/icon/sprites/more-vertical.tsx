import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function MoreVertical(props: ISvgProps) {
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
      <g id="Icon=more_vertical">
        <path
          id="Icon color"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 18C30 14.6863 32.6863 12 36 12C39.3137 12 42 14.6863 42 18C42 21.3137 39.3137 24 36 24C32.6863 24 30 21.3137 30 18ZM36 30C32.6863 30 30 32.6863 30 36C30 39.3137 32.6863 42 36 42C39.3137 42 42 39.3137 42 36C42 32.6863 39.3137 30 36 30ZM30 54C30 50.6863 32.6863 48 36 48C39.3137 48 42 50.6863 42 54C42 57.3137 39.3137 60 36 60C32.6863 60 30 57.3137 30 54Z"
        />
      </g>
    </StyledSvg>
  );
}
