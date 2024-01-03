import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function CheckmarkCircleOutlined(props: ISvgProps) {
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
      <g id="Icon=checkmark_circle_outlined">
        <path
          id="Icon color"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36 6C19.4315 6 6 19.4315 6 36C6 52.5685 19.4315 66 36 66C52.5685 66 66 52.5685 66 36C66 28.0435 62.8393 20.4129 57.2132 14.7868C51.5871 9.16071 43.9565 6 36 6ZM36 60C22.7452 60 12 49.2548 12 36C12 22.7452 22.7452 12 36 12C49.2548 12 60 22.7452 60 36C60 42.3652 57.4714 48.4697 52.9706 52.9706C48.4697 57.4714 42.3652 60 36 60ZM45.36 25.47C45.9433 24.8983 46.8767 24.8983 47.46 25.47L48.96 27.06C49.244 27.3417 49.4037 27.725 49.4037 28.125C49.4037 28.525 49.244 28.9084 48.96 29.19L32.1 46.05C31.8278 46.34 31.4478 46.5046 31.05 46.5046C30.6522 46.5046 30.2722 46.34 30 46.05L22.95 38.94C22.666 38.6584 22.5063 38.275 22.5063 37.875C22.5063 37.475 22.666 37.0917 22.95 36.81L24.54 35.22C24.8122 34.93 25.1922 34.7654 25.59 34.7654C25.9878 34.7654 26.3678 34.93 26.64 35.22L31.14 39.69L45.36 25.47Z"
        />
      </g>
    </StyledSvg>
  );
}
