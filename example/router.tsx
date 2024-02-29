import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accordions from './accordions/accordions';
import Alerts from './alerts/alerts';
import Blocks from './blocks/blocks';
import Buttons from './buttons/buttons';
import Containers from './containers/containers';
import FieldMaps from './field-maps/field-maps';
import Icons from './icons/icons';
import { Inputs } from './inputs/inputs';
import Layout from './layout/layout';
import ProgressBars from './progress-bars/progress-bars';
import Sections from './sections/sections';
import SortableCardsPage from './sortable-cards/sortable-cards-page';
import TabPanels from './tab-panels/tab-panels';
import Tables from './tables/tables';

export default function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Buttons} />
          <Route path="/buttons" Component={Buttons} />
          <Route path="/icons" Component={Icons} />
          <Route path="/inputs" Component={Inputs} />
          <Route path="/alerts" Component={Alerts} />
          <Route path="/sections" Component={Sections} />
          <Route path="/tab-panel-menu" Component={TabPanels} />
          <Route path="/sortable-cards" Component={SortableCardsPage} />
          <Route path="/accordions" Component={Accordions} />
          <Route path="/tables" Component={Tables} />
          <Route path="/blocks" Component={Blocks} />
          <Route path="/containers" Component={Containers} />
          <Route path="/progress-bars" Component={ProgressBars} />
          <Route path="/field-maps" Component={FieldMaps} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
