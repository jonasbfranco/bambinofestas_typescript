import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Ambientes from './pages/Ambientes';
import Cardapios from './pages/Cardapios';
import Estrutura from './pages/Estrutura';

import PageNotFound from './pages/404';

const Routes: React.FC = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Ambientes" component={Ambientes} />
      <Route path="/Cardapios" component={Cardapios} />
      <Route path="/Estrutura" component={Estrutura} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
