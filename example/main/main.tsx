import { ReactElement } from 'react';
import { Button } from '../../src/elements/button/button';
import { ButtonColor, ButtonIconPosition, ButtonSize, ButtonVariant } from '../../src/elements/button/button-type';
import { IconManager } from '../../src/elements/icon/icon';
import { IconId, IconSize } from '../../src/elements/icon/icon-type';

export default function Main(): ReactElement {
  return (
    <div>
      <p>hello</p>
      <IconManager id={IconId.CHEVRON_DOWN} fill="green" size={IconSize.LARGE} />
      <IconManager id={IconId.CARET_UP} fill="green" size={IconSize.LARGE} />
      <IconManager id={IconId.CARET_UP} fill="green" size={IconSize.LARGE} />
      <IconManager id={IconId.NOTIFICATIONS_OUTLINED} fill="#ff00ff" size={IconSize.MEDIUM} />

      <Button
        size={ButtonSize.LARGE}
        color={ButtonColor.GREEN}
        disabled
        icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        iconPosition={ButtonIconPosition.END}
      >
        hello world
      </Button>
      <Button
        size={ButtonSize.LARGE}
        color={ButtonColor.GREEN}
        disabled
        icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
      />
      <Button
        onClick={() => {}}
        size={ButtonSize.MEDIUM}
        variant={ButtonVariant.SECONDARY}
        icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        iconPosition={ButtonIconPosition.END}
      >
        hello world
      </Button>
      <Button
        size={ButtonSize.SMALL}
        variant={ButtonVariant.SECONDARY}
        color={ButtonColor.RED}
        disabled
        icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
      >
        hello world
      </Button>
      <Button size={ButtonSize.X_SMALL} icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}>
        hello world
      </Button>
      <Button
        size={ButtonSize.XX_SMALL}
        icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        iconPosition={ButtonIconPosition.END}
      >
        hello world
      </Button>
    </div>
  );
}
