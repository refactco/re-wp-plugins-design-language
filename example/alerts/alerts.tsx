import { ReactElement, useState } from 'react';
import { AlertList } from '../../src/components/alert-list/alert-list';
import { Alert } from '../../src/components/alert/alert';
import { AlertStatus } from '../../src/components/alert/alert-type';
import { Tooltip } from '../../src/components/tooltip/tooltip';
import { TooltipMode, TooltipPlace } from '../../src/components/tooltip/tooltip-type';
import { Icon } from '../../src/elements/icon/icon';
import { IconName } from '../../src/elements/icon/icon-type';
import { Select } from '../../src/elements/select/select';

export default function Alerts(): ReactElement {
  const [tooltipPlacement, setTooltipPlacement] = useState<TooltipPlace>(TooltipPlace.TOP);

  return (
    <div style={{ backgroundColor: 'lightgray', position: 'relative' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '33%' }}></div>
        <div
          style={{
            width: '33%',
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '12px',
            flexDirection: 'column'
          }}
        >
          <Alert status={AlertStatus.SUCCESS} explicitDismiss>
            Hello guys
          </Alert>
          <Alert status={AlertStatus.ERROR} explicitDismiss>
            Hello guys
          </Alert>
          <Alert status={AlertStatus.WARNING} explicitDismiss>
            Hello guys
          </Alert>
          <Alert status={AlertStatus.INFO} explicitDismiss>
            Hello guys
          </Alert>
        </div>
        <div style={{ width: '33%' }}>
          <h2>Tooltip</h2>
          <Select
            label="Tooltip Placement"
            value={tooltipPlacement}
            onChange={(value: string) => {
              setTooltipPlacement(value as TooltipPlace);
            }}
            options={[
              {
                label: 'Bottom',
                value: 'bottom'
              },
              {
                label: 'Bottom End',
                value: 'bottom-end'
              },
              {
                label: 'Bottom Start',
                value: 'bottom-start'
              },
              {
                label: 'Top',
                value: 'top'
              },
              {
                label: 'Top End',
                value: 'top-end'
              },
              {
                label: 'Top Start',
                value: 'top-start'
              },
              {
                label: 'Left',
                value: 'left'
              },
              {
                label: 'Left End',
                value: 'left-end'
              },
              {
                label: 'Left Start',
                value: 'left-start'
              },
              {
                label: 'Right',
                value: 'right'
              },
              {
                label: 'Right End',
                value: 'right-end'
              },
              {
                label: 'Right Start',
                value: 'right-start'
              }
            ]}
          />
          <br />
          <Tooltip
            content="Hello from inside the tooltip"
            id="my-tooltip-1"
            place={tooltipPlacement}
            mode={TooltipMode.DARK}
          >
            <div style={{ backgroundColor: 'green' }}>dark mode tooltip (hover me)</div>
          </Tooltip>
          <br />
          <br />
          <br />
          <Tooltip
            content="Hello from inside the tooltip"
            id="my-tooltip-2"
            place={tooltipPlacement}
          >
            <div style={{ backgroundColor: 'green', display: 'inline-block' }}>
              light mode tooltip (hover me)
            </div>
          </Tooltip>
        </div>
      </div>
      <AlertList
        onRemove={() => {}}
        notices={[
          {
            id: '1',
            content: 'Hello guys',
            status: AlertStatus.SUCCESS,
            explicitDismiss: true
          },
          {
            id: '2',
            content: 'Hello guys 2',
            status: AlertStatus.ERROR,
            explicitDismiss: true
          },
          {
            id: '3',
            content: 'Alert with custom icon',
            status: AlertStatus.ERROR,
            explicitDismiss: true,
            icon: <Icon iconName={IconName.DELETE} />
          },
          {
            id: '3',
            content: 'Alert without dismiss icon',
            status: AlertStatus.ERROR
          }
        ]}
      />
    </div>
  );
}
