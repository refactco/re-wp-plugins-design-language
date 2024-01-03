import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function ErrorOutlined(props: ISvgProps) {
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
      <g id="Icon=error_outlined">
        <path
          id="Icon color"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 36C6 19.4315 19.4315 6 36 6C43.9565 6 51.5871 9.16071 57.2132 14.7868C62.8393 20.4129 66 28.0435 66 36C66 52.5685 52.5685 66 36 66C19.4315 66 6 52.5685 6 36ZM12 36C12 49.2548 22.7452 60 36 60C42.3652 60 48.4697 57.4714 52.9706 52.9706C57.4714 48.4697 60 42.3652 60 36C60 22.7452 49.2548 12 36 12C22.7452 12 12 22.7452 12 36ZM34.5 42C33.6716 42 33 42.6716 33 43.5V46.5C33 47.3284 33.6716 48 34.5 48H37.5C38.3284 48 39 47.3284 39 46.5V43.5C39 42.6716 38.3284 42 37.5 42H34.5ZM33.96 24H38.04C38.4711 23.9969 38.8826 24.1794 39.1698 24.5009C39.4569 24.8225 39.5917 25.252 39.54 25.68L38.34 35.34C38.2942 35.7187 37.9715 36.0028 37.59 36H34.41C34.0285 36.0028 33.7058 35.7187 33.66 35.34L32.46 25.68C32.4083 25.252 32.5431 24.8225 32.8302 24.5009C33.1174 24.1794 33.5289 23.9969 33.96 24Z"
        />
      </g>
    </StyledSvg>
  );
}
