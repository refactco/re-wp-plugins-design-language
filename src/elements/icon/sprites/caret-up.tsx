import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function CaretUp(props: ISvgProps) {
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
      <g id="Icon=caret_up">
        <path
          id="Icon color"
          d="M48.4202 38.8202C48.7041 39.1018 48.8639 39.4852 48.8639 39.8852C48.8639 40.2851 48.7041 40.6685 48.4202 40.9502L47.8202 41.5502C47.5379 41.8431 47.1469 42.0061 46.7402 42.0002H25.2602C24.8534 42.0061 24.4624 41.8431 24.1802 41.5502L23.5802 40.9502C23.2962 40.6685 23.1365 40.2851 23.1365 39.8852C23.1365 39.4852 23.2962 39.1018 23.5802 38.8202L34.9502 27.4502C35.2224 27.1601 35.6024 26.9956 36.0002 26.9956C36.3979 26.9956 36.778 27.1601 37.0502 27.4502L48.4202 38.8202Z"
        />
      </g>
    </StyledSvg>
  );
}
