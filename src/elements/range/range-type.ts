import { RangeControlProps } from '@wordpress/components/build-types/range-control/types';

export enum RangeHelpPosition {
  BOTTOM = 'bottom',
  INSIDE = 'inside'
}

export interface IRangeProps extends RangeControlProps {
  helpPosition?: RangeHelpPosition;
}
