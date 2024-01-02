import { Accordion } from '../../src/components/accordion/accordion';

import { ReactElement, useState } from 'react';
import { Button } from '../../src/elements/button/button';
import { ButtonVariant } from '../../src/elements/button/button-type';
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
            content: 'lorem ipsum'
          },
          {
            header: 'Please open me 2',
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
