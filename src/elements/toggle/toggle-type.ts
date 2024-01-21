import { ToggleControlProps } from '@wordpress/components/build-types/toggle-control/types';

export interface IToggleProps extends Omit<ToggleControlProps, 'label' | 'onChange'> {
  label?: string;
  onChange?(value: boolean): void;
}
