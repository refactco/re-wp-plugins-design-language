import { ReactElement, ReactNode } from 'react';
import { Button } from '../../../elements/button/button';
import { ButtonSize } from '../../../elements/button/button-type';
import { StyledTableAction } from './table-action-style';
import { ITableAction, ITableActionProps } from './table-action-type';

export function TableAction(props: ITableActionProps): ReactNode {
  const { actions, rowIndex, ...restProps } = props;

  if (!actions) {
    return null;
  }

  return (
    <StyledTableAction {...restProps}>
      {actions.map((action: ITableAction, actionIndex: number): ReactElement => {
        const { text, size = ButtonSize.XX_SMALL, color, variant, href, onClick } = action;

        return (
          <Button
            key={actionIndex}
            size={size}
            color={color}
            variant={variant}
            href={href}
            onClick={(): void => {
              onClick?.(rowIndex);
            }}
          >
            {text}
          </Button>
        );
      })}
    </StyledTableAction>
  );
}
