import { Button as WordPressButton } from '@wordpress/components';
import type { ReactElement } from 'react';
import { IButtonProps } from './button-type';

export function Button(props: IButtonProps): ReactElement {
  return <WordPressButton {...props} />;
}
