import {
  SelectControlMultipleSelectionProps,
  SelectControlSingleSelectionProps
} from '@wordpress/components/build-types/select-control/types';

export interface ISelectProps
  extends Omit<SelectControlSingleSelectionProps, 'multiple'>,
    Omit<SelectControlMultipleSelectionProps, 'onChange' | 'value' | 'multiple'> {
  hasError?: boolean;
  multiple?: boolean;
}
