import { Tooltip as WordpressTooltip } from '@wordpress/components';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { ITooltipProps } from './tooltip-type';
import './tooltip.css';

const StyledTooltip = styled(WordpressTooltip)<ITooltipProps>`
  color: red;
`;

export function Tooltip(props: ITooltipProps): ReactElement {
  const { placement = 'top-start', delay = 0, ...restProps } = props;

  return (
    <div className="data-tooltip">
      <StyledTooltip {...restProps} placement={placement} delay={delay} />
    </div>
  );
}
