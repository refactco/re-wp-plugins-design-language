import { CheckboxControlProps } from '@wordpress/components/build-types/checkbox-control/types';
import { InputHTMLAttributes } from 'react';

export interface ICheckboxProps
  extends Omit<CheckboxControlProps, 'onChange'>,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'indeterminate' | 'onChange'> {
  onChange?(value: boolean): void;
}
