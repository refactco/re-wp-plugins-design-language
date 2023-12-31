import { ReactElement } from 'react';
import { Container } from '../../src/components/container/container';
import { ContainerType } from '../../src/components/container/container-type';
import Layout from '../layout/layout';

export default function Containers(): ReactElement {
  return (
    <Layout backgroundColor="gray" padding="0">
      <br />
      <h1>Containers:</h1>
      <Container type={ContainerType.FULL_WIDTH}>Hello world</Container>
      <br />
      <Container>Hello world</Container>
      <br />
      <Container type={ContainerType.MARGIN_AUTO} width="120px">
        Hello world
      </Container>
    </Layout>
  );
}
