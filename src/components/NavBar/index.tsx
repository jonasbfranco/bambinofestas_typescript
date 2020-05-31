import React, { useState, useCallback } from 'react';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Background, Container, MenuDrawer } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback((): void => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <Background>
        <Container>
          <Link to="/">
            <h1>B</h1>
          </Link>
          <FiMenu size={50} color="#fff" onClick={(): void => handleOpen()} />
          <ul>
            <FiSun size={30} color="#fff" />
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
          <FiX size={28} color="#fff" onClick={(): void => handleOpen()} />
          <li>Home</li>
          <li>Ambientes</li>
          <li>Cardápios</li>

          <li>Estrutura</li>

          <FiSun size={30} color="#fff" />
        </MenuDrawer>
      </Background>
    </>
  );
};

export default NavBar;
