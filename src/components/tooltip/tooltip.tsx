import { Tooltip as WordpressTooltip } from '@wordpress/components';
import { ReactElement } from 'react';
import { ITooltipProps } from './tooltip-type';
import './tooltip.css';

export function Tooltip(props: ITooltipProps): ReactElement {
  const { placement = 'top-start', delay = 0, ...restProps } = props;

  return <WordpressTooltip {...restProps} placement={placement} delay={delay} />;
}
