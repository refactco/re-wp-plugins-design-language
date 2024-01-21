import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function CheckmarkCircleFilled(props: ISvgProps) {
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
      <g id="Icon=checkmark_circle_filled">
        <path
          id="Icon color"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 36C6 19.4315 19.4315 6 36 6C43.9565 6 51.5871 9.16071 57.2132 14.7868C62.8393 20.4129 66 28.0435 66 36C66 52.5685 52.5685 66 36 66C19.4315 66 6 52.5685 6 36ZM32.19 46.05L49.05 29.19C49.6024 28.6106 49.6024 27.6994 49.05 27.12L47.46 25.53C46.8767 24.9583 45.9433 24.9583 45.36 25.53L31.14 39.75L26.64 35.28C26.3678 34.99 25.9878 34.8254 25.59 34.8254C25.1922 34.8254 24.8122 34.99 24.54 35.28L22.95 36.87C22.666 37.1517 22.5063 37.535 22.5063 37.935C22.5063 38.335 22.666 38.7183 22.95 39L30.09 46.05C30.3622 46.34 30.7422 46.5046 31.14 46.5046C31.5378 46.5046 31.9178 46.34 32.19 46.05Z"
        />
      </g>
    </StyledSvg>
  );
}
