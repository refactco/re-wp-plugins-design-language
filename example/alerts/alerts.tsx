import { AlertList } from '@components/alert-list/alert-list';
import { Alert } from '@components/alert/alert';
import { AlertStatus } from '@components/alert/alert-type';
import { Tooltip } from '@components/tooltip/tooltip';
import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { Input } from '@elements/input/input';
import { InputType } from '@elements/input/input-type';
import { Select } from '@elements/select/select';
import { ReactElement, useState } from 'react';
import Layout from '../layout/layout';

export default function Alerts(): ReactElement {
  const [tooltipPlacement, setTooltipPlacement] = useState<string>('top-start');
  const [delay, setDelay] = useState<number>(0);

  return (
    <Layout backgroundColor="lightgray">
      <div style={{ display: 'flex' }}>
        <div style={{ width: '33%' }}></div>
        <div style={{ width: '33%', display: 'flex', flexWrap: 'nowrap', gap: '12px', flexDirection: 'column' }}>
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
              setTooltipPlacement(value);
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
          <Input
            label="Tooltip Delay"
            value={delay.toString()}
            type={InputType.NUMBER}
            help="In milliseconds"
            onChange={(value: string | undefined) => {
              setDelay(Number(value ?? '0'));
            }}
          />
          <br />
          <Tooltip text="This is the tooltip" placement={tooltipPlacement as any} delay={delay}>
            <div style={{ textAlign: 'center', backgroundColor: 'green' }}>Hover to show the tooltip</div>
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
            icon: <IconManager id={IconId.DELETE} />
          },
          {
            id: '3',
            content: 'Alert without dismiss icon',
            status: AlertStatus.ERROR
          }
        ]}
      />
    </Layout>
  );
}
