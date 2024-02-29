import { Accordion } from '../../src/components/accordion/accordion';

import { ReactElement, useState } from 'react';
import { IAccordionItemButtonClickParams } from '../../src/components/accordion/accordion-type';
import { Button } from '../../src/elements/button/button';
import { ButtonColor, ButtonVariant } from '../../src/elements/button/button-type';
import { Input } from '../../src/elements/input/input';
import { InputType } from '../../src/elements/input/input-type';

export default function Accordions(): ReactElement {
  const [transitionTimeout, setTransitionTimeout] = useState<number>(500);

  return (
    <>
      <Input
        label="Accordion Animation Speed (milliseconds)"
        type={InputType.NUMBER}
        placeholder="Transition Timeout"
        value={transitionTimeout.toString()}
        onChange={(changedValue) => {
          setTransitionTimeout(Number(changedValue));
        }}
      />
      <br />
      <h1>Single Item Accordion</h1>
      <Accordion
        transitionTimeout={transitionTimeout}
        items={[
          {
            header: 'Please open me',
            content: (
              <>
                <p>this is body</p>
                <br />
                <Input placeholder="Placeholder" label="Sample Label" help="This is hint" />
                <br />
                <div style={{ display: 'flex', gap: '4px' }}>
                  <Button>Submit</Button>
                  <Button variant={ButtonVariant.SECONDARY}>Cancel</Button>
                </div>
              </>
            )
          }
        ]}
      />
      <br />
      <h1>Multiple Item Accordion</h1>
      <Accordion
        transitionTimeout={transitionTimeout}
        items={[
          {
            header: 'Please open me',
            content: 'lorem ipsum',
            // like this
            initialEntered: true,
            buttons: [
              {
                text: 'Edit',
                onClick(params: IAccordionItemButtonClickParams): void {
                  const { itemIndex, item, event } = params;

                  console.log({ itemIndex, item, event });
                }
              },
              {
                text: 'Delete',
                variant: ButtonVariant.SECONDARY,
                color: ButtonColor.RED
              }
            ]
          },
          {
            header: 'Please open me 2',
            buttons: [
              {
                text: 'Edit'
              },
              {
                text: 'Delete',
                variant: ButtonVariant.SECONDARY,
                color: ButtonColor.RED
              }
            ],
            content: (
              <>
                <p>this is body</p>
                <br />
                <Input placeholder="Placeholder" label="Sample Label" help="This is hint" />
                <br />
                <div style={{ display: 'flex', gap: '4px' }}>
                  <Button>Submit</Button>
                  <Button variant={ButtonVariant.SECONDARY}>Cancel</Button>
                </div>
              </>
            )
          }
        ]}
      />
    </>
  );
}
