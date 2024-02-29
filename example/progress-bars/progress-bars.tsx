import { ReactElement } from 'react';
import { Progress } from '../../src/elements/progress/progress';

export default function ProgressBars(): ReactElement {
  return (
    <div>
      <br />
      <Progress value={0.5} />
      <br />
      <Progress value={0.7} />
      <br />
      <Progress value={35} max={100} />
      <br />
      <Progress />
      <br />
    </div>
  );
}
