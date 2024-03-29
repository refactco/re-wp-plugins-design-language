import { ReactElement } from 'react';
import { Button } from '../../src/elements/button/button';
import {
  ButtonColor,
  ButtonIconPosition,
  ButtonSize,
  ButtonVariant
} from '../../src/elements/button/button-type';
import { Icon } from '../../src/elements/icon/icon';
import { IconName, IconSize } from '../../src/elements/icon/icon-type';
import { MediaScreenSize, mediaStyle } from '../../src/styles/media';

export default function Buttons(): ReactElement {
  const result = mediaStyle(MediaScreenSize.MOBILE)`
    color: red;
  `;

  console.log({ result });

  return (
    <>
      <h1>Primary</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          size={ButtonSize.LARGE}
          color={ButtonColor.GREEN}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
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
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.X_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.XX_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
      </div>
      <h2>Primary (Disabled)</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          size={ButtonSize.LARGE}
          color={ButtonColor.GREEN}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.MEDIUM}
          color={ButtonColor.GREEN}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.X_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        >
          hello world
        </Button>
        <Button
          size={ButtonSize.XX_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
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
          flexWrap: 'wrap',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.LARGE}
          color={ButtonColor.GREEN}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          color={ButtonColor.GREEN}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.X_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.XX_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
      </div>
      <h2>Secondary (Error)</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.LARGE}
          color={ButtonColor.RED}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          color={ButtonColor.RED}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.RED}
          size={ButtonSize.SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.RED}
          size={ButtonSize.X_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.XX_SMALL}
          color={ButtonColor.RED}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
        >
          hello world
        </Button>
      </div>
      <h2>Secondary (Disabled)</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.LARGE}
          color={ButtonColor.RED}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          color={ButtonColor.RED}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          iconPosition={ButtonIconPosition.END}
          disabled
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.RED}
          size={ButtonSize.SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.RED}
          size={ButtonSize.X_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        >
          hello world
        </Button>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.XX_SMALL}
          color={ButtonColor.RED}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
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
          flexWrap: 'wrap',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        <Button
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.LARGE}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        />
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          color={ButtonColor.RED}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        />
        <Button
          variant={ButtonVariant.SECONDARY}
          color={ButtonColor.GREEN}
          size={ButtonSize.SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
        />
        <Button
          variant={ButtonVariant.PRIMARY}
          color={ButtonColor.RED}
          size={ButtonSize.X_SMALL}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        />
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.XX_SMALL}
          color={ButtonColor.RED}
          icon={<Icon iconName={IconName.NOTIFICATION_ON} size={IconSize.TINY} />}
          disabled
        />
      </div>
    </>
  );
}
