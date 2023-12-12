import { createRoot } from 'react-dom/client';
import Main from './main/main';

console.log('salam');

const root = createRoot(document.getElementById('root')!);

root.render(<Main />);
