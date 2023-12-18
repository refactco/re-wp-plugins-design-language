import { CheckboxControlProps } from '@wordpress/components/build-types/checkbox-control/types';
import { InputHTMLAttributes } from 'react';

export interface ICheckboxProps
  extends CheckboxControlProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'indeterminate' | 'onChange'> {}
