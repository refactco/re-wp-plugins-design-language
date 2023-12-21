import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ILayoutProps } from './layout-type';

export default function Layout(props: ILayoutProps): ReactElement {
  const { children, backgroundColor = '#fff' } = props;

  return (
    <div style={{ backgroundColor, minHeight: '100vh' }}>
      <nav>
        <ul style={{ margin: 0, paddingBlock: '10px' }}>
          <li>
            <Link to="/icons">Icons</Link>
          </li>
          <li>
            <Link to="/buttons">Buttons & Links</Link>
          </li>
          <li>
            <Link to="/inputs">Inputs</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts & Tooltips</Link>
          </li>
          <li>
            <Link to="/sections">Sections</Link>
          </li>
          <li>
            <Link to="/tab-panel-menu">Tab Panels</Link>
          </li>
        </ul>
      </nav>
      <div style={{ paddingInline: '10px' }}>{children}</div>
    </div>
  );
}
