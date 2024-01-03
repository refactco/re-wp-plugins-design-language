// import '@wordpress/components/build-style/style.css';
import { createRoot } from 'react-dom/client';
import { FontStyles } from '../src/components/font/font';
import { StyledWordpressComponent } from '../src/styles/wordpress-components-style';
import Router from './router';

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <StyledWordpressComponent />
    <FontStyles />
    <Router />
  </>
);
