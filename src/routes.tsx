import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';
import { useTheme } from './context/theme';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Ambientes from './pages/Ambientes';
import Cardapios from './pages/Cardapios';
import Estrutura from './pages/Estrutura';
import Contato from './pages/Contato';
import PageNotFound from './pages/404';

const Routes: React.FC = () => {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <GlobalStyle theme={theme} />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Ambientes" component={Ambientes} />
        <Route path="/Cardapios" component={Cardapios} />
        <Route path="/Estrutura" component={Estrutura} />
        <Route path="/Contato" component={Contato} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
