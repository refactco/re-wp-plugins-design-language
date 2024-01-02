import { ReactElement, useState } from 'react';
import { Block } from '../../src/components/block/block';
import { IconName } from '../../src/elements/icon/icon-type';
import { Range } from '../../src/elements/range/range';

export default function Blocks(): ReactElement {
  const [adjustGap, setAdjustGap] = useState<number>(25);

  return (
    <>
      <Block iconName={IconName.GAP} title="This is title">
        <Range
          label="Adjust Gap"
          value={adjustGap}
          help="px"
          onChange={(value: number | undefined): void => {
            setAdjustGap(value ?? 0);
          }}
        />
      </Block>
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <Block iconName={IconName.GAP} title="This is title">
            <Range
              label="Adjust Gap"
              value={adjustGap}
              help="px"
              onChange={(value: number | undefined): void => {
                setAdjustGap(value ?? 0);
              }}
            />
          </Block>
        </div>
      </div>
    </>
  );
}
