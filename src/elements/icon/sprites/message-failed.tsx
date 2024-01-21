import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function MessageFailed(props: ISvgProps) {
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
      <g id="Icon=message_failed">
        <path
          id="Icon color"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54 6H18C11.3726 6 6 11.3726 6 18V64.5C6 65.3284 6.67157 66 7.5 66C7.89635 65.9977 8.27498 65.8354 8.55 65.55L17.55 56.55C19.273 54.8724 21.5957 53.9542 24 54H54C60.6274 54 66 48.6274 66 42V18C66 11.3726 60.6274 6 54 6ZM39 40.5C39 41.3284 38.3284 42 37.5 42H34.5C33.6716 42 33 41.3284 33 40.5V37.5C33 36.6716 33.6716 36 34.5 36H37.5C38.3284 36 39 36.6716 39 37.5V40.5ZM37.59 30C37.9715 30.0028 38.2942 29.7187 38.34 29.34L39.54 19.68C39.5917 19.252 39.4569 18.8225 39.1698 18.5009C38.8826 18.1794 38.4711 17.9969 38.04 18H33.96C33.5289 17.9969 33.1174 18.1794 32.8302 18.5009C32.5431 18.8225 32.4083 19.252 32.46 19.68L33.66 29.34C33.7058 29.7187 34.0285 30.0028 34.41 30H37.59Z"
        />
      </g>
    </StyledSvg>
  );
}
