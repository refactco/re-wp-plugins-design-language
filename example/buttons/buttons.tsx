import { Button } from '@elements/button/button';
import { ButtonColor, ButtonIconPosition, ButtonSize, ButtonVariant } from '@elements/button/button-type';
import { IconManager } from '@elements/icon/icon';
import { IconId, IconSize } from '@elements/icon/icon-type';
import { ReactElement } from 'react';
import Layout from '../layout/layout';

export default function Buttons(): ReactElement {
  return (
    <Layout>
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
        text="hello world"
      />
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
    </Layout>
  );
}
