import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function Info(props: ISvgProps) {
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
      <g id="Icon=info">
        <path
          id="Icon color"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 36C6 19.4315 19.4315 6 36 6C43.9565 6 51.5871 9.16071 57.2132 14.7868C62.8393 20.4129 66 28.0435 66 36C66 52.5685 52.5685 66 36 66C19.4315 66 6 52.5685 6 36ZM12 36C12 49.2548 22.7452 60 36 60C42.3652 60 48.4697 57.4714 52.9706 52.9706C57.4714 48.4697 60 42.3652 60 36C60 22.7452 49.2548 12 36 12C22.7452 12 12 22.7452 12 36ZM39 37.5C39 36.6716 38.3284 36 37.5 36H34.5C33.6716 36 33 36.6716 33 37.5V46.5C33 47.3284 33.6716 48 34.5 48H37.5C38.3284 48 39 47.3284 39 46.5V37.5ZM37.5 24C38.3284 24 39 24.6716 39 25.5V28.5C39 29.3284 38.3284 30 37.5 30H34.5C33.6716 30 33 29.3284 33 28.5V25.5C33 24.6716 33.6716 24 34.5 24H37.5Z"
        />
      </g>
    </StyledSvg>
  );
}
