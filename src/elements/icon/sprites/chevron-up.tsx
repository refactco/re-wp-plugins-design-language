import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function ChevronUp(props: ISvgProps) {
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
      <g id="Icon=chevron_up">
        <path
          id="Icon color"
          d="M33.8399 24.66C34.2615 24.2379 34.8334 24.0005 35.4299 24H36.5699C37.1652 24.0069 37.7348 24.2433 38.1599 24.66L53.5499 40.08C53.8339 40.3617 53.9936 40.745 53.9936 41.145C53.9936 41.545 53.8339 41.9283 53.5499 42.21L51.4199 44.34C51.1434 44.6222 50.765 44.7812 50.3699 44.7812C49.9749 44.7812 49.5964 44.6222 49.3199 44.34L35.9999 30.99L22.6799 44.34C22.3983 44.624 22.0149 44.7837 21.6149 44.7837C21.215 44.7837 20.8316 44.624 20.5499 44.34L18.4499 42.21C18.166 41.9283 18.0062 41.545 18.0062 41.145C18.0062 40.745 18.166 40.3617 18.4499 40.08L33.8399 24.66Z"
        />
      </g>
    </StyledSvg>
  );
}
