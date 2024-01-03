import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function Gap(props: ISvgProps) {
  const { size, fill, className } = props;

  return (
    <StyledSvg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1233_4714)">
        <path d="M20 9H4C3.448 9 3 8.552 3 8V1C3 0.448 3.448 0 4 0H20C20.552 0 21 0.448 21 1V8C21 8.552 20.552 9 20 9Z" />
        <path d="M20 24H4C3.448 24 3 23.552 3 23V16C3 15.448 3.448 15 4 15H20C20.552 15 21 15.448 21 16V23C21 23.552 20.552 24 20 24Z" />
        <path d="M23 13H1C0.447 13 0 12.552 0 12C0 11.448 0.447 11 1 11H23C23.553 11 24 11.448 24 12C24 12.552 23.553 13 23 13Z" />
      </g>
      <defs>
        <clipPath id="clip0_1233_4714">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </StyledSvg>
  );
}
