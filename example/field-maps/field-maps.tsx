import { Fragment, ReactElement, ReactNode, useState } from 'react';
import { FieldMapCell } from '../../src/components/field-map/cell/field-map-cell';
import { FieldMap } from '../../src/components/field-map/field-map';
import { Checkbox } from '../../src/elements/checkbox/checkbox';
import { Input } from '../../src/elements/input/input';
import { Select } from '../../src/elements/select/select';

export default function FieldMaps(): ReactElement {
  const defaultItem = ['', '', false];
  const [items, setItems] = useState<(string | boolean)[][]>([defaultItem]);

  return (
    <>
      <FieldMap
        onAddItemClick={(): void => {
          setItems([...items, defaultItem]);
        }}
        onRemoveItemClick={(rowIndex): void => {
          items.splice(rowIndex, 1);

          setItems([...items]);
        }}
        headers={[
          {
            title: 'Data'
          },
          {
            title: 'Data Type'
            // customWidth: '220px'
          },
          {
            title: 'Data Type'
            // customWidth: '120px'
          }
        ]}
      >
        {items.map((item: any, itemIndex: number): ReactNode => {
          return (
            <Fragment key={itemIndex}>
              <FieldMapCell>
                <Input
                  placeholder="data"
                  value={items[itemIndex][0] as string}
                  onChange={(value: string | undefined): void => {
                    items[itemIndex][0] = value ?? '';

                    console.log({ changed: true, items });

                    setItems([...items]);
                  }}
                />
              </FieldMapCell>
              <FieldMapCell>
                <Select
                  options={[{ label: 'my data', value: '1' }]}
                  value={items[itemIndex][1] as string}
                  onChange={(value: string): void => {
                    items[itemIndex][1] = value;

                    setItems([...items]);
                  }}
                />
              </FieldMapCell>
              <FieldMapCell>
                <Checkbox
                  checked={items[itemIndex][2] as boolean}
                  onChange={(value: boolean): void => {
                    items[itemIndex][2] = value;

                    setItems([...items]);
                  }}
                />
              </FieldMapCell>
            </Fragment>
          );
        })}
      </FieldMap>
    </>
  );
}
