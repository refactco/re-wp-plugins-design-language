import { ReactElement, useState } from 'react';
import { Checkbox } from '../../src/elements/checkbox/checkbox';
import { Icon } from '../../src/elements/icon/icon';
import { IconName } from '../../src/elements/icon/icon-type';
import { Input } from '../../src/elements/input/input';
import { InputType } from '../../src/elements/input/input-type';
import { MultiSelect } from '../../src/elements/multi-select/multi-select';
import { Radio } from '../../src/elements/radio/radio';
import { Range } from '../../src/elements/range/range';
import { RangeHelpPosition } from '../../src/elements/range/range-type';
import { Select } from '../../src/elements/select/select';
import { Toggle } from '../../src/elements/toggle/toggle';
import Layout from '../layout/layout';

export function Inputs(): ReactElement {
  const [checkboxState, setCheckboxState] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [rangeState, setRangeState] = useState(0);
  const [radioState, setRadioState] = useState('no-data');
  const [multiSelectState, setMultiSelectState] = useState<string[]>([]);

  return (
    <Layout>
      <h1>Inputs</h1>
      <Input help="this is help" label="this is a simple input" placeholder="this is placeholder" />
      <Input label="this is a simple input without hint" placeholder="this is placeholder" />
      <Input
        help="this is help"
        label="this is label"
        placeholder="this is placeholder"
        type={InputType.COLOR}
        suffix={<Icon iconName={IconName.CHECK_MARK_CIRCLE_FILLED} />}
        prefix={<Icon iconName={IconName.CHECK_MARK_CIRCLE_FILLED} />}
      />
      <Input
        disabled
        value="this is value"
        help="this is help"
        label="this is a disabled input"
        placeholder="this is placeholder"
        suffix={<Icon iconName={IconName.CHECK_MARK_CIRCLE_FILLED} />}
        prefix={<Icon iconName={IconName.CHECK_MARK_CIRCLE_FILLED} />}
      />
      <Input
        hasError
        value="this is value"
        help="this is help"
        label="this is an input with error"
        placeholder="this is placeholder"
        suffix={<Icon iconName={IconName.CHECK_MARK_CIRCLE_FILLED} />}
        prefix={<Icon iconName={IconName.CHECK_MARK_CIRCLE_FILLED} />}
      />
      <hr />
      <h1>Checkboxes (horizontal)</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Checkbox onChange={(value: boolean) => {}} label="disabled" checked={false} disabled />
        <Checkbox
          onChange={(value: boolean) => {
            console.log(value);
            setCheckboxState(value);
          }}
          label="text"
          checked={checkboxState}
        />
      </div>
      <h1>Checkboxes (vertical)</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ width: '100%' }}>
          <Checkbox onChange={(value: boolean) => {}} label="disabled" checked={false} disabled />
        </div>
        <div style={{ width: '100%' }}>
          <Checkbox
            onChange={(value: boolean) => {
              console.log(value);
              setCheckboxState(value);
            }}
            label="text"
            checked={checkboxState}
          />
        </div>
      </div>
      <hr />
      <h1>Radio buttons</h1>
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
      <h1>Toggle buttons</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
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
      </div>
      <hr />
      <Range
        label="Adjust gap"
        value={rangeState}
        max={100}
        helpPosition={RangeHelpPosition.BOTTOM}
        onChange={(value?: number) => {
          setRangeState(value ?? 0);
        }}
        help="px data"
      />
      <Range
        label="Adjust gap"
        value={rangeState}
        max={100}
        onChange={(value?: number) => {
          setRangeState(value ?? 0);
        }}
        help="px"
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
      <MultiSelect
        label="Select multi"
        suggestions={['data', 'value', 'mine']}
        value={multiSelectState}
        placeholder="Placeholder"
        onChange={(changedValue: any) => {
          setMultiSelectState([...changedValue]);
        }}
      />
      <br />
      <br />
    </Layout>
  );
}
