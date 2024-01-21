import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function Delete(props: ISvgProps) {
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
      <g id="Icon=delete">
        <path
          id="Icon color"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 16.5V13.5C60 12.6716 59.3284 12 58.5 12H45V9C45 7.34315 43.6569 6 42 6H30C28.3431 6 27 7.34315 27 9V12H13.5C12.6716 12 12 12.6716 12 13.5V16.5C12 17.3284 12.6716 18 13.5 18H58.5C59.3284 18 60 17.3284 60 16.5ZM23.61 66C20.4536 66.0077 17.8309 63.5687 17.61 60.42L15 24H57L54.45 60.42C54.2291 63.5687 51.6064 66.0077 48.45 66H23.61Z"
        />
      </g>
    </StyledSvg>
  );
}
