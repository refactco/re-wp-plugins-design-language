import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Alerts from './alerts/alerts';
import Buttons from './buttons/buttons';
import Icons from './icons/icons';
import { Inputs } from './inputs/inputs';
import Sections from './sections/sections';

export default function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Buttons} />
        <Route path="/buttons" Component={Buttons} />
        <Route path="/icons" Component={Icons} />
        <Route path="/inputs" Component={Inputs} />
        <Route path="/alerts" Component={Alerts} />
        <Route path="/sections" Component={Sections} />
      </Routes>
    </BrowserRouter>
  );
}
