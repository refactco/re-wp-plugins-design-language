import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function Warning(props: ISvgProps) {
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
      <g id="Icon=warning">
        <path
          id="Icon color"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68.7154 58.89L38.4383 7.11C38.0278 6.42363 37.2877 6.00243 36.4878 6H35.5876C34.7877 6.00243 34.0476 6.42363 33.6371 7.11L3.29995 58.89C2.91027 59.6001 2.91027 60.4599 3.29995 61.17L3.72005 61.86C4.10891 62.5718 4.85937 63.0104 5.67051 63H66.3449C67.156 63.0104 67.9065 62.5718 68.2953 61.86L68.7154 61.17C69.1051 60.4599 69.1051 59.6001 68.7154 58.89ZM39.0084 49.5C39.0084 50.3284 38.3367 51 37.508 51H34.5073C33.6787 51 33.007 50.3284 33.007 49.5V46.5C33.007 45.6716 33.6787 45 34.5073 45H37.508C38.3367 45 39.0084 45.6716 39.0084 46.5V49.5ZM37.5981 39C37.9796 39.0028 38.3025 38.7187 38.3482 38.34L39.5485 28.68C39.6003 28.252 39.4654 27.8225 39.1782 27.5009C38.891 27.1794 38.4793 26.9969 38.0482 27H33.9672C33.536 26.9969 33.1244 27.1794 32.8372 27.5009C32.55 27.8225 32.4151 28.252 32.4669 28.68L33.6671 38.34C33.7129 38.7187 34.0358 39.0028 34.4173 39H37.5981Z"
        />
      </g>
    </StyledSvg>
  );
}