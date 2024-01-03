import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function Plus(props: ISvgProps) {
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
      <g id="Icon=plus">
        <path
          id="Icon color"
          d="M57 34.5V37.5C57 38.3284 56.3284 39 55.5 39H39V55.5C39 56.3284 38.3284 57 37.5 57H34.5C33.6716 57 33 56.3284 33 55.5V39H16.5C15.6716 39 15 38.3284 15 37.5V34.5C15 33.6716 15.6716 33 16.5 33H33V16.5C33 15.6716 33.6716 15 34.5 15H37.5C38.3284 15 39 15.6716 39 16.5V33H55.5C56.3284 33 57 33.6716 57 34.5Z"
        />
      </g>
    </StyledSvg>
  );
}
