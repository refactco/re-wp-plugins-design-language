import { Button } from '@elements/button/button';
import { ButtonColor, ButtonIconPosition, ButtonSize, ButtonVariant } from '@elements/button/button-type';
import { IconManager } from '@elements/icon/icon';
import { IconId, IconSize } from '@elements/icon/icon-type';
import { ReactElement } from 'react';
import Layout from '../layout/layout';

export default function Buttons(): ReactElement {
  return (
    <Layout>
      <h1>Primary</h1>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          size={ButtonSize.LARGE}
          color={ButtonColor.GREEN}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          onClick={() => {
            console.log('here');
          }}
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.MEDIUM}
          color={ButtonColor.GREEN}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button size={ButtonSize.SMALL} icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}>
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
      <h2>Primary (Disabled)</h2>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          size={ButtonSize.LARGE}
          color={ButtonColor.GREEN}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.MEDIUM}
          color={ButtonColor.GREEN}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
        <Button size={ButtonSize.SMALL} icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />} disabled>
          hello world
        </Button>
        <Button size={ButtonSize.X_SMALL} icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />} disabled>
          hello world
        </Button>
        <Button
          size={ButtonSize.XX_SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
      </div>
      <hr />
      <h1>Secondary</h1>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.LARGE}
          color={ButtonColor.GREEN}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          color={ButtonColor.GREEN}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.X_SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.XX_SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
      </div>
      <h2>Secondary (Error)</h2>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.LARGE}
          color={ButtonColor.RED}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          color={ButtonColor.RED}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.RED}
          size={ButtonSize.SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.RED}
          size={ButtonSize.X_SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.XX_SMALL}
          color={ButtonColor.RED}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
      </div>
      <h2>Secondary (Disabled)</h2>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.LARGE}
          color={ButtonColor.RED}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          color={ButtonColor.RED}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.RED}
          size={ButtonSize.SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.RED}
          size={ButtonSize.X_SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.XX_SMALL}
          color={ButtonColor.RED}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
      </div>
      <hr />
      <h1>Icon Button</h1>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.LARGE}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        />
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          color={ButtonColor.RED}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        />
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.GREEN}
          size={ButtonSize.SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
        />
        <Button
          variant={ButtonVariant.PRIMARY}
          color={ButtonColor.RED}
          size={ButtonSize.X_SMALL}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        />
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.XX_SMALL}
          color={ButtonColor.RED}
          icon={<IconManager id={IconId.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        />
      </div>
    </Layout>
  );
}
