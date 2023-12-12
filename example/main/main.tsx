import { ReactElement } from 'react';
import IconManager from '../../src/elements/icon/icon';
import { IconSize } from '../../src/elements/icon/icon-type';

export default function Main(): ReactElement {
  return (
    <div>
      <p>salam</p>
      <IconManager id="chevron_down" fill="green" size={IconSize.LARGE} />
      <IconManager id="caret_up" fill="green" size={IconSize.LARGE} />
    </div>
  );
}
