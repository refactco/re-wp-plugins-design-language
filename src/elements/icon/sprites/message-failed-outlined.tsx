import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function MessageFailedOutlined(props: ISvgProps) {
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
      <g id="Icon=message_failed_outlined">
        <path
          id="Icon color"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 6H54C60.6274 6 66 11.3726 66 18V42C66 48.6274 60.6274 54 54 54H24C21.5957 53.9542 19.273 54.8724 17.55 56.55L8.55 65.55C8.27498 65.8354 7.89635 65.9977 7.5 66C6.67157 66 6 65.3284 6 64.5V18C6 11.3726 11.3726 6 18 6ZM54 48C57.3137 48 60 45.3137 60 42V18C60 14.6863 57.3137 12 54 12H18C14.6863 12 12 14.6863 12 18V53.64L13.38 52.38C16.1985 49.5686 20.019 47.9929 24 48H54ZM37.5 36H34.5C33.6716 36 33 36.6716 33 37.5V40.5C33 41.3284 33.6716 42 34.5 42H37.5C38.3284 42 39 41.3284 39 40.5V37.5C39 36.6716 38.3284 36 37.5 36ZM37.68 30H34.5H34.41C34.0285 30.0028 33.7058 29.7187 33.66 29.34L32.46 19.68C32.4083 19.252 32.5431 18.8225 32.8302 18.5009C33.1174 18.1794 33.5289 17.9969 33.96 18H38.13C38.5611 17.9969 38.9726 18.1794 39.2597 18.5009C39.5469 18.8225 39.6817 19.252 39.63 19.68L38.43 29.34C38.3842 29.7187 38.0615 30.0028 37.68 30Z"
        />
      </g>
    </StyledSvg>
  );
}
