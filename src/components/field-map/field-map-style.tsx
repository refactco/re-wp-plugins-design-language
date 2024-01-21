import styled from 'styled-components';
import { IStyledFieldMapRowProps } from './field-map-type';

export const StyledFieldMapContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  & > button {
    width: fit-content;
  }
`;

export const StyledFieldMapRow = styled(({ gap, ...restProps }: IStyledFieldMapRowProps) => (
  <div {...restProps} />
))<IStyledFieldMapRowProps>`
  display: flex;
  gap: ${(props) => props.gap};
`;

export const StyledFieldMapDeleteCell = styled.div`
  width: 50px;
  text-align: center;
`;
