import { SelectControlSingleSelectionProps } from '@wordpress/components/build-types/select-control/types';

export interface ISelectProps extends Omit<SelectControlSingleSelectionProps, 'multiple'> {
  hasError?: boolean;
  multiple?: boolean;
}
