import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function ChevronDown(props: ISvgProps) {
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
      <g id="Icon=chevron_down">
        <path
          id="Icon color"
          d="M38.1599 47.3401C37.7384 47.7622 37.1665 47.9996 36.5699 48.0001H35.4299C34.8347 47.9932 34.2651 47.7568 33.8399 47.3401L18.4499 31.9201C18.166 31.6385 18.0062 31.2551 18.0062 30.8551C18.0062 30.4552 18.166 30.0718 18.4499 29.7901L20.5799 27.6601C20.8564 27.3779 21.2349 27.2189 21.6299 27.2189C22.025 27.2189 22.4034 27.3779 22.6799 27.6601L35.9999 41.0101L49.3199 27.6601C49.6016 27.3762 49.985 27.2164 50.3849 27.2164C50.7849 27.2164 51.1683 27.3762 51.4499 27.6601L53.5499 29.7901C53.8339 30.0718 53.9936 30.4552 53.9936 30.8551C53.9936 31.2551 53.8339 31.6385 53.5499 31.9201L38.1599 47.3401Z"
        />
      </g>
    </StyledSvg>
  );
}
