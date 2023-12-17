import { RadioControlProps } from '@wordpress/components/build-types/radio-control/types';
import { InputHTMLAttributes } from 'react';

export interface IRadioProps extends RadioControlProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {}
