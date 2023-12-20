import { Tooltip as WordpressTooltip } from '@wordpress/components';
import { ReactElement } from 'react';
import { ITooltipProps } from './tooltip-type';
import './tooltip.css';

export function Tooltip(props: ITooltipProps): ReactElement {
  return <WordpressTooltip {...props} />;
}
