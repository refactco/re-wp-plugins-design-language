import { FontStyles } from '@components/font/font';
import '@wordpress/components/build-style/style.css';
import { createRoot } from 'react-dom/client';
import Router from './router';

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <FontStyles />
    <Router />
  </>
);
