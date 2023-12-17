import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ILayoutProps } from './layout-type';

export default function Layout(props: ILayoutProps): ReactElement {
  const { children } = props;

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/icons">Icons</Link>
          </li>
          <li>
            <Link to="/buttons">Buttons & Links</Link>
          </li>
          <li>
            <Link to="/inputs">Inputs</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
