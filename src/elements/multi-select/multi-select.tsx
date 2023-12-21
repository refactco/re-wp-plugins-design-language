import { ReactElement, ReactNode } from 'react';
import { StyledMultiSelect } from './multi-select-style';
import './multi-select-style.css';
import { IMultiSelectProps } from './multi-select-type';

export function MultiSelect(props: IMultiSelectProps): ReactElement {
  const { suggestions = [], renderItem, showHelp = true, ...restProps } = props;

  return (
    <StyledMultiSelect
      {...restProps}
      suggestions={suggestions}
      __experimentalAutoSelectFirstMatch
      __experimentalExpandOnFocus
      __experimentalShowHowTo={showHelp}
      __experimentalRenderItem={(suggestionValue) => {
        if (renderItem) {
          return renderItem(suggestionValue);
        }

        const { item } = suggestionValue;

        let newValue: ReactNode = item;

        suggestions.forEach((suggestion: string) => {
          if (suggestion === item) {
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
