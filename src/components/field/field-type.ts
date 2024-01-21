import { ICheckboxProps } from '../../elements/checkbox/checkbox-type';
import { IInputProps } from '../../elements/input/input-type';
import { IMultiSelectProps } from '../../elements/multi-select/multi-select-type';
import { ISelectProps } from '../../elements/select/select-type';
import { IToggleProps } from '../../elements/toggle/toggle-type';

interface IFieldMapInput {
  type: 'input';
  options: IInputProps;
}

interface IFieldMapSelect {
  type: 'select';
  options: ISelectProps;
}

interface IFieldMapMultiSelect {
  type: 'multi-select';
  options: IMultiSelectProps;
}

interface IFieldMapCheckbox {
  type: 'checkbox';
  options: ICheckboxProps;
}

interface IFieldMapToggle {
  type: 'toggle';
  options: IToggleProps;
}

export type IFieldProps = { value?: any; onChange?(value: any): void } & (
  | IFieldMapInput
  | IFieldMapSelect
  | IFieldMapMultiSelect
  | IFieldMapCheckbox
  | IFieldMapToggle
);
