import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function Drag(props: ISvgProps) {
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
      <g id="Icon=drag">
        <path
          id="Icon color"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27 24C30.3137 24 33 21.3137 33 18C33 14.6863 30.3137 12 27 12C23.6863 12 21 14.6863 21 18C21 21.3137 23.6863 24 27 24ZM21 36C21 32.6863 23.6863 30 27 30C30.3137 30 33 32.6863 33 36C33 39.3137 30.3137 42 27 42C23.6863 42 21 39.3137 21 36ZM27 48C23.6863 48 21 50.6863 21 54C21 57.3137 23.6863 60 27 60C30.3137 60 33 57.3137 33 54C33 50.6863 30.3137 48 27 48ZM51 18C51 21.3137 48.3137 24 45 24C41.6863 24 39 21.3137 39 18C39 14.6863 41.6863 12 45 12C48.3137 12 51 14.6863 51 18ZM45 30C41.6863 30 39 32.6863 39 36C39 39.3137 41.6863 42 45 42C48.3137 42 51 39.3137 51 36C51 32.6863 48.3137 30 45 30ZM39 54C39 50.6863 41.6863 48 45 48C48.3137 48 51 50.6863 51 54C51 57.3137 48.3137 60 45 60C41.6863 60 39 57.3137 39 54Z"
        />
      </g>
    </StyledSvg>
  );
}
