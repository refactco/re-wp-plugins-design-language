import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function ChevronLeft(props: ISvgProps) {
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
      <g id="Icon=chevron_left">
        <path
          id="Icon color"
          d="M24.66 38.1599C24.2379 37.7384 24.0005 37.1665 24 36.5699V35.4299C24.0069 34.8347 24.2433 34.2651 24.66 33.8399L40.08 18.4499C40.3617 18.166 40.745 18.0062 41.145 18.0062C41.545 18.0062 41.9283 18.166 42.21 18.4499L44.34 20.5799C44.6222 20.8564 44.7812 21.2349 44.7812 21.6299C44.7812 22.025 44.6222 22.4034 44.34 22.6799L30.99 35.9999L44.34 49.3199C44.624 49.6016 44.7837 49.985 44.7837 50.3849C44.7837 50.7849 44.624 51.1683 44.34 51.4499L42.21 53.5499C41.9283 53.8339 41.545 53.9936 41.145 53.9936C40.745 53.9936 40.3617 53.8339 40.08 53.5499L24.66 38.1599Z"
        />
      </g>
    </StyledSvg>
  );
}
