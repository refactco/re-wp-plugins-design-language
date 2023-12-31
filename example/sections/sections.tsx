import { ReactElement } from 'react';
import { SectionHeader } from '../../src/components/section/header/section-header';
import { Section } from '../../src/components/section/section';
import { Button } from '../../src/elements/button/button';
import { ButtonVariant } from '../../src/elements/button/button-type';
import { Input } from '../../src/elements/input/input';
import Layout from '../layout/layout';

export default function Sections(): ReactElement {
  return (
    <Layout backgroundColor="lightgray">
      <SectionHeader title="Title of section" description="Description goes here" infoText="Hello Man" />
      <br />
      <Section
        headerProps={{
          title: 'Title of section',
          description: 'Description goes here',
          infoText: 'Hello Man'
        }}
      >
        <p>this is body</p>
        <br />
        <Input placeholder="Placeholder" label="Sample Label" help="This is hint" />
        <br />
        <div style={{ display: 'flex', gap: '4px' }}>
          <Button>Submit</Button>
          <Button variant={ButtonVariant.SECONDARY}>Cancel</Button>
        </div>
      </Section>
      <br />
    </Layout>
  );
}
