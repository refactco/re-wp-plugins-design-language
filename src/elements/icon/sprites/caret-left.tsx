import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function CaretLeft(props: ISvgProps) {
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
      <g id="Icon=caret_left">
        <path
          id="Icon color"
          d="M38.8202 23.5802C39.1018 23.2962 39.4852 23.1365 39.8852 23.1365C40.2851 23.1365 40.6685 23.2962 40.9502 23.5802L41.5502 24.1802C41.8431 24.4624 42.0061 24.8534 42.0002 25.2602V46.7402C42.0061 47.1469 41.8431 47.5379 41.5502 47.8202L40.9502 48.4202C40.6685 48.7041 40.2851 48.8639 39.8852 48.8639C39.4852 48.8639 39.1018 48.7041 38.8202 48.4202L27.4502 37.0502C27.1601 36.778 26.9956 36.3979 26.9956 36.0002C26.9956 35.6024 27.1601 35.2224 27.4502 34.9502L38.8202 23.5802Z"
        />
      </g>
    </StyledSvg>
  );
}
