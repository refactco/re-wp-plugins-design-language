import { ReactElement } from 'react';
import { StyledTooltip } from './tooltip-style';
import { ITooltipProps, TooltipMode } from './tooltip-type';

export function Tooltip(props: ITooltipProps): ReactElement {
  const { id, mode = TooltipMode.LIGHT, children, ...restProps } = props;

  return (
    <>
      <children.type {...children.props} data-tooltip-id={id} />
      <StyledTooltip {...restProps} id={id} mode={mode} classNameArrow="hello-arrow" />
    </>
  );
}
