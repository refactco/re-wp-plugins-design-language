import { ReactElement, ReactNode } from 'react';
import { StyledMultiSelect } from './multi-select-style';
import './multi-select-style.css';
import { IMultiSelectProps } from './multi-select-type';

export function MultiSelect(props: IMultiSelectProps): ReactElement {
  const { suggestions = [], renderItem, showHelp = true, ...restProps } = props;

  console.log('value: ', props.value);

  return (
    <StyledMultiSelect
      {...restProps}
      suggestions={suggestions}
      __experimentalAutoSelectFirstMatch
      __experimentalExpandOnFocus
      __experimentalShowHowTo={showHelp}
      __experimentalRenderItem={(value) => {
        if (renderItem) {
          return renderItem(value);
        }

        let newValue: ReactNode = value.item;

        suggestions.forEach((suggestion: string) => {
          if (suggestion === value.item) {
            newValue = (
              <div>
                <strong>{suggestion}</strong>
              </div>
            );
          }
        });

        return newValue;
      }}
    />
  );
}
