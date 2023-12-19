import { FormTokenFieldProps } from '@wordpress/components/build-types/form-token-field/types';
import { ReactNode } from 'react';

export interface IMultiSelectProps extends FormTokenFieldProps {
  hasError?: boolean;
  renderItem?: (args: { item: string }) => ReactNode;
  showHelp?: boolean;
}
