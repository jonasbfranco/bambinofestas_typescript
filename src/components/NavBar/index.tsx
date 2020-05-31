import React, { useState, useCallback } from 'react';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Background, Container, MenuDrawer } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
      } else {
        setOpen(!open);
      }
    },
    [open],
  );

  return (
    <Background>
      <Container>
        <Link to="/" onClick={(): void => handleOpen(true)}>
          <h1>B</h1>
        </Link>
        <FiMenu size={50} color="#fff" onClick={(): void => handleOpen()} />
        <ul>
          <FiSun size={28} color="#fff" />
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="Ambientes">
            <li>Ambientes</li>
          </Link>
          <Link to="Cardapios">
            <li>Cardápios</li>
          </Link>
          <Link to="Estrutura">
            <li>Estrutura</li>
          </Link>
        </ul>
      </Container>
      <MenuDrawer isOpen={open}>
        <FiX size={55} color="#fff" onClick={(): void => handleOpen()} />
        <Link to="/" onClick={(): void => handleOpen()}>
          <li>Home</li>
        </Link>
        <Link to="Ambientes" onClick={(): void => handleOpen()}>
          <li>Ambientes</li>
        </Link>
        <Link to="Cardapios" onClick={(): void => handleOpen()}>
          <li>Cardápios</li>
        </Link>
        <Link to="Estrutura" onClick={(): void => handleOpen()}>
          <li>Estrutura</li>
        </Link>
        <FiSun size={28} color="#fff" />
      </MenuDrawer>
    </Background>
  );
};

export default NavBar;
