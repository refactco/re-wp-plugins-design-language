import { Checkbox } from '@elements/checkbox/checkbox';
import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { Input } from '@elements/input/input';
import { InputType } from '@elements/input/input-type';
import { Radio } from '@elements/radio/radio';
import { Range } from '@elements/range/range';
import { Select } from '@elements/select/select';
import { Toggle } from '@elements/toggle/toggle';
import { ReactElement, useState } from 'react';
import Layout from '../layout/layout';

export function Inputs(): ReactElement {
  const [checkboxState, setCheckboxState] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [rangeState, setRangeState] = useState(0);
  const [radioState, setRadioState] = useState('no-data');

  return (
    <Layout>
      <Input
        help="this is help"
        label="this is label"
        placeholder="this is placeholder"
        type={InputType.COLOR}
        suffix={<IconManager id={IconId.CHECK_MARK_CIRCLE_FILLED} />}
        prefix={<IconManager id={IconId.CHECK_MARK_CIRCLE_FILLED} />}
      />
      <Input
        disabled
        value="this is value"
        help="this is help"
        label="this is label"
        placeholder="this is placeholder"
        suffix={<IconManager id={IconId.CHECK_MARK_CIRCLE_FILLED} />}
        prefix={<IconManager id={IconId.CHECK_MARK_CIRCLE_FILLED} />}
      />
      <Input
        hasError
        value="this is value"
        help="this is help"
        label="this is label"
        placeholder="this is placeholder"
        suffix={<IconManager id={IconId.CHECK_MARK_CIRCLE_FILLED} />}
        prefix={<IconManager id={IconId.CHECK_MARK_CIRCLE_FILLED} />}
      />
      <hr />
      <Checkbox onChange={(value: boolean) => {}} label="disabled" checked={false} disabled />
      <Checkbox
        onChange={(value: boolean) => {
          console.log(value);
          setCheckboxState(value);
        }}
        label="text"
        checked={checkboxState}
      />
      <hr />
      <Radio
        onChange={(value: string) => {
          setRadioState(value);
        }}
        label="data type"
        options={[
          { label: 'no data', value: 'no-data' },
          { label: 'with data', value: 'with-data' }
        ]}
        selected={radioState}
      />
      <hr />
      <Toggle
        label="this is toggle"
        onChange={(value: boolean) => {
          setToggleState(value);
        }}
        checked={toggleState}
      />
      <Toggle
        label="this is toggle"
        help="this is hint"
        onChange={(value: boolean) => {
          setToggleState(value);
        }}
        checked={toggleState}
      />
      <hr />
      <Range
        label="Adjust gap"
        value={rangeState}
        max={100}
        onChange={(value?: number) => {
          setRangeState(value ?? 0);
        }}
        help="px data"
      />
      <hr />
      <Select
        label="Select one"
        help="this is hint"
        options={[
          {
            value: 'val1',
            label: 'this is first label'
          },
          {
            value: 'val2',
            label: 'this is second label'
          }
        ]}
      />
      <Select
        multiple
        label="Select one"
        help="this is hint"
        options={[
          {
            value: 'val1',
            label: 'this is first label'
          },
          {
            value: 'val2',
            label: 'this is second label'
          },
          {
            value: 'val3',
            label: 'this is second label'
          }
        ]}
      />
    </Layout>
  );
}
