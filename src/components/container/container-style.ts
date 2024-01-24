import styled from 'styled-components';
import { mediaStyle } from '../../styles/media';
import { ContainerType, IContainerProps } from './container-type';

export const StyledContainer = styled.div<IContainerProps>`
  background-color: #fff;
  padding: 32px;
  border-radius: ${(props) => (props.type === ContainerType.FULL_WIDTH ? '0' : '4px')};
  width: ${(props) => props.width};
  margin-inline: ${(props) => {
    const { type } = props;

    if (type === ContainerType.FULL_WIDTH) {
      return '0';
    } else if (type === ContainerType.MARGIN_AUTO) {
      return 'auto';
    }

    return '32px';
  }};

  ${mediaStyle()`
    margin-inline: ${(props: any) => {
      const { type } = props;

      if (type === ContainerType.FULL_WIDTH) {
        return '0';
      } else if (type === ContainerType.MARGIN_AUTO) {
        return 'auto';
      }

      return '16px';
    }};
  `}
`;
