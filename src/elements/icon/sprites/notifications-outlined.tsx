import { StyledSvg } from '../icon-style';
import { ISvgProps } from '../icon-type';

export function NotificationOutlined(props: ISvgProps) {
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
      <g id="Icon=notifications_outlined">
        <path
          id="Icon color"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M59.13 47.13L56.64 44.64C54.9517 42.9538 54.0021 40.6661 54 38.28V30C54 26.1053 52.7368 22.3157 50.4 19.2L47.7 15.6C46.0003 13.3337 43.3328 12 40.5 12H39V7.5C39 6.67157 38.3284 6 37.5 6H34.5C33.6716 6 33 6.67157 33 7.5V12H31.5C28.6672 12 25.9997 13.3337 24.3 15.6L21.6 19.2C19.2632 22.3157 18 26.1053 18 30V38.28C17.9979 40.6661 17.0483 42.9538 15.36 44.64L12.87 47.13C12.3158 47.6888 12.0033 48.443 12 49.23V51C12 52.6569 13.3431 54 15 54H57C58.6569 54 60 52.6569 60 51V49.23C59.9967 48.443 59.6842 47.6888 59.13 47.13ZM48 48H24V30C24 27.4036 24.8421 24.8772 26.4 22.8L29.1 19.2C29.6666 18.4446 30.5557 18 31.5 18H40.5C41.4443 18 42.3334 18.4446 42.9 19.2L45.6 22.8C47.1579 24.8772 48 27.4036 48 30V48ZM36 66C39.3137 66 42 63.3137 42 60H30C30 63.3137 32.6863 66 36 66Z"
        />
      </g>
    </StyledSvg>
  );
}
