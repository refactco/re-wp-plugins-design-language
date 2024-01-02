import { ReactElement } from 'react';
import { Container } from '../../src/components/container/container';
import { ContainerType } from '../../src/components/container/container-type';

export default function Containers(): ReactElement {
  return (
    <div style={{ backgroundColor: 'gray', marginInline: '-10px' }}>
      <br />
      <h1>Containers:</h1>
      <Container type={ContainerType.FULL_WIDTH}>Full Width</Container>
      <br />
      <Container>Margin 32px</Container>
      <br />
      <Container type={ContainerType.MARGIN_AUTO} width="120px">
        Margin auto
      </Container>
    </div>
  );
}
