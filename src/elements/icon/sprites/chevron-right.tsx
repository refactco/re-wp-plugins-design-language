import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function ChevronRight(props: ISvgProps) {
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
      <g id="Icon=chevron_right">
        <path
          id="Icon color"
          d="M47.3401 33.8399C47.7622 34.2615 47.9996 34.8334 48.0001 35.4299V36.5699C47.9932 37.1652 47.7568 37.7348 47.3401 38.1599L31.9201 53.5499C31.6385 53.8339 31.2551 53.9936 30.8551 53.9936C30.4552 53.9936 30.0718 53.8339 29.7901 53.5499L27.6601 51.4199C27.3779 51.1434 27.2189 50.765 27.2189 50.3699C27.2189 49.9749 27.3779 49.5964 27.6601 49.3199L41.0101 35.9999L27.6601 22.6799C27.3762 22.3983 27.2164 22.0149 27.2164 21.6149C27.2164 21.215 27.3762 20.8316 27.6601 20.5499L29.7901 18.4499C30.0718 18.166 30.4552 18.0062 30.8551 18.0062C31.2551 18.0062 31.6385 18.166 31.9201 18.4499L47.3401 33.8399Z"
        />
      </g>
    </StyledSvg>
  );
}
