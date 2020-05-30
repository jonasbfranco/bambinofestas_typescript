import React from 'react';

import NavBar from './components/NavBar';

import { GlobalStyle } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <h2>Bambino Festas</h2>
      <h1>Onde os Sonhos viram Festas</h1>
      <a
        href="https://wa.me/5517996330704"
        target="_blank"
        rel="noopener noreferrer"
      >
        agende sua festa
      </a>
      <GlobalStyle />
    </>
  );
};

export default App;
