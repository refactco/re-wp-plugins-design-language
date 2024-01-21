import { ReactElement } from 'react';
import { Button } from '../../elements/button/button';
import { ButtonColor, ButtonVariant } from '../../elements/button/button-type';
import { Icon } from '../../elements/icon/icon';
import { IconName } from '../../elements/icon/icon-type';
import { FieldMapCell } from './cell/field-map-cell';
import {
  StyledFieldMapContainer,
  StyledFieldMapDeleteCell,
  StyledFieldMapRow
} from './field-map-style';
import { IFieldMapHeader, IFieldMapProps } from './field-map-type';

export function FieldMap(props: IFieldMapProps): ReactElement {
  const {
    headers,
    children,
    gap = '20px',
    addItemText = 'Add a new row',
    removeIcon = IconName.DELETE,
    onAddItemClick,
    onRemoveItemClick
  } = props;
  // const [items, setItems] = useState<any[]>([{}]);

  // console.log({ items });

  return (
    <StyledFieldMapContainer>
      <StyledFieldMapRow gap={gap}>
        {headers.map((field: IFieldMapHeader, index: number): ReactElement => {
          const { title, customWidth } = field;

          return (
            <FieldMapCell key={index} customWidth={customWidth}>
              {title}
            </FieldMapCell>
          );
        })}
        <StyledFieldMapDeleteCell></StyledFieldMapDeleteCell>
      </StyledFieldMapRow>
      {children.map((row: any, rowIndex: number): ReactElement => {
        return (
          <StyledFieldMapRow key={rowIndex} gap={gap}>
            {row}
            {/* {fields.map((field: IFieldMapItemType, fieldIndex: number): ReactElement => {
              const { title, customWidth, component } = field;

              return (
                <StyledFieldMapCell customWidth={customWidth}>
                  {component}
                  <Field
                    {...fieldOption}
                    key={fieldIndex}
                    value={items[itemIndex][fieldIndex]}
                    onChange={(value: any): void => {
                      console.log({ value });

                      items[itemIndex][fieldIndex] = value;

                      setItems([...items]);
                    }}
                  />
                </StyledFieldMapCell>
              );
            })} */}
            <StyledFieldMapDeleteCell>
              <Button
                variant={ButtonVariant.SECONDARY}
                color={ButtonColor.RED}
                icon={
                  typeof removeIcon === 'string' ? (
                    <Icon iconName={removeIcon as IconName} />
                  ) : (
                    removeIcon
                  )
                }
                onClick={(): void => {
                  onRemoveItemClick(rowIndex);
                }}
              />
            </StyledFieldMapDeleteCell>
          </StyledFieldMapRow>
        );
      })}
      <Button
        onClick={(): void => {
          onAddItemClick();
        }}
      >
        {addItemText}
      </Button>
    </StyledFieldMapContainer>
  );
}
