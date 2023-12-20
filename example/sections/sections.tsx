import { SectionHeader } from '@components/section/header/section-header';
import { Section } from '@components/section/section';
import { Button } from '@elements/button/button';
import { ButtonVariant } from '@elements/button/button-type';
import { Input } from '@elements/input/input';
import { ReactElement } from 'react';
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
