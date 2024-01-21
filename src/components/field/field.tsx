import { TokenItem } from '@wordpress/components/build-types/form-token-field/types';
import { ReactElement } from 'react';
import { Checkbox } from '../../elements/checkbox/checkbox';
import { Input } from '../../elements/input/input';
import { MultiSelect } from '../../elements/multi-select/multi-select';
import { Select } from '../../elements/select/select';
import { Toggle } from '../../elements/toggle/toggle';
import { IFieldProps } from './field-type';

export function Field(props: IFieldProps): ReactElement {
  const { type, options, value, onChange } = props;

  const handleChange = (value: any, extra?: any): void => {
    onChange?.(value);

    options.onChange?.(value as never, extra);
  };

  if (type === 'input') {
    return (
      <Input
        {...options}
        value={value}
        onChange={(value: string | undefined, extra: any): void => {
          handleChange(value, extra);
        }}
      />
    );
  }

  if (type === 'checkbox') {
    return (
      <Checkbox
        {...options}
        value={value}
        checked={value}
        onChange={(value: boolean): void => {
          handleChange(value);
        }}
      />
    );
  }

  if (type === 'multi-select') {
    return (
      <MultiSelect
        {...options}
        value={value}
        onChange={(value: (string | TokenItem)[]): void => {
          handleChange(value);
        }}
      />
    );
  }

  if (type === 'select') {
    return (
      <Select
        {...options}
        value={value}
        onChange={(value: string, extra: any): void => {
          handleChange(value, extra);
        }}
      />
    );
  }

  return (
    <Toggle
      {...options}
      checked={value}
      onChange={(value: boolean): void => {
        handleChange(value);
      }}
    />
  );
}
