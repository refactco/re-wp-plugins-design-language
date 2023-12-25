import { Tooltip } from 'react-tooltip';
import styled from 'styled-components';
import { IStyledTooltipProps, TooltipMode } from './tooltip-type';

export const StyledTooltip = styled(Tooltip)<IStyledTooltipProps>`
  width: 307px !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 22px !important;
  background-color: ${(props) => (props.mode === TooltipMode.DARK ? '#002729' : '#fff')} !important;
  color: ${(props) => (props.mode === TooltipMode.DARK ? '#fff' : '#002729')} !important;

  & .hello-arrow {
    width: 16px;
    height: 16px;
  }
`;
