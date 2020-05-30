import React from 'react';
import { FiSun } from 'react-icons/fi';

import { Background, Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Background>
      <Container>
        <h1>B</h1>
        <ul>
          <FiSun size={30} color="#fff" />
          <li>Home</li>
          <li>Ambientes</li>
          <li>Cardápios</li>
          <li>Estrutura</li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;
