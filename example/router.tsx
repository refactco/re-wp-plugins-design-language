import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buttons from './buttons/buttons';
import Icons from './icons/icons';
import { Inputs } from './inputs/inputs';

export default function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Buttons} />
        <Route path="/buttons" Component={Buttons} />
        <Route path="/icons" Component={Icons} />
        <Route path="/inputs" Component={Inputs} />
      </Routes>
    </BrowserRouter>
  );
}
