import React from 'react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

import FotoPerfil from '../../assets/foto_perfil.png';
import { Container, Hello, Section, SocialMedia } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Hello>
        <img src={FotoPerfil} alt="" />
        <h1>Olá!</h1>
      </Hello>
      <Section>
        <p>
          Meu nome é Jonas B. Franco, sou Desenvolvedor Fullstack com foco nas
          tecnologias: React JS, React Native e Node JS
        </p>
        <SocialMedia>
          <a
            href="https://www.instagram.com/jonasbfranco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={36} color="#000" />
            <p>Jonas - Instagram</p>
          </a>
          <br />
          <a
            href="https://www.github.com/jonasbfranco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} color="#000" />
            <p>Jonas - GitHub</p>
          </a>
          <br />
          <a
            href="https://www.youtube.com/jonasfranco?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={36} color="#000" />
            <p>Tecnoob - Youtube</p>
          </a>
        </SocialMedia>
      </Section>
    </Container>
  );
};

export default Home;
