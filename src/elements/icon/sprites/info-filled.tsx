import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function InfoFilled(props: ISvgProps) {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM13 15.5C13 15.7761 12.7761 16 12.5 16H11.5C11.2239 16 11 15.7761 11 15.5V12.5C11 12.2239 11.2239 12 11.5 12H12.5C12.7761 12 13 12.2239 13 12.5V15.5ZM12.5 10C12.7761 10 13 9.77614 13 9.5V8.5C13 8.22386 12.7761 8 12.5 8H11.5C11.2239 8 11 8.22386 11 8.5V9.5C11 9.77614 11.2239 10 11.5 10H12.5Z"
      />
    </StyledSvg>
  );
}
