import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function Done(props: ISvgProps) {
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
      <g id="Icon=done">
        <path
          id="Icon color"
          d="M59.5499 21.75L27.7499 53.55C27.4683 53.834 27.0849 53.9937 26.6849 53.9937C26.285 53.9937 25.9016 53.834 25.6199 53.55L9.44992 37.38C9.16595 37.0983 9.00623 36.7149 9.00623 36.315C9.00623 35.915 9.16595 35.5316 9.44992 35.25L11.5499 33.15C11.8316 32.866 12.215 32.7063 12.6149 32.7063C13.0149 32.7063 13.3983 32.866 13.6799 33.15L26.6699 46.14L55.3199 17.49C55.9134 16.9146 56.8565 16.9146 57.4499 17.49L59.5499 19.62C59.8339 19.9016 59.9936 20.285 59.9936 20.685C59.9936 21.0849 59.8339 21.4683 59.5499 21.75Z"
        />
      </g>
    </StyledSvg>
  );
}
