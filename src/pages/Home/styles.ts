import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 100vw;
  }
`;

export const ContainerRosa = styled.div`
  margin-top: 0;
  background-color: #f54952;
  height: 60vh;
  @media (max-width: 450px) {
    height: 50vh;
  }
`;

export const Bambino = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    font-size: 70px;
    text-transform: capitalize !important;
    padding-top: 60px;
  }
  @media (max-width: 450px) {
    h2 {
      text-align: center;
      font-size: 25px;
      text-transform: capitalize !important;
      padding-top: 60px;
    }
  }
  @media (max-width: 700px) {
    h2 {
      text-align: center;
      font-size: 45px;
      text-transform: capitalize !important;
      padding-top: 60px;
    }
  }
`;

export const Sonhos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 100px;
    padding-top: 60px;
    text-transform: capitalize !important;
  }
  @media (max-width: 450px) {
    h1 {
      text-align: center;
      font-size: 40px;
      padding-top: 60px;
      text-transform: capitalize !important;
    }
  }
  @media (max-width: 700px) {
    h1 {
      text-align: center;
      font-size: 50px;
      padding-top: 60px;
      text-transform: capitalize !important;
    }
  }
`;

export const Festas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 120px;
    text-transform: capitalize !important;
  }
  @media (max-width: 450px) {
    h1 {
      text-align: center;
      font-size: 20px;
      text-transform: capitalize !important;
    }
  }
  @media (max-width: 700px) {
    h1 {
      text-align: center;
      font-size: 55px;
      text-transform: capitalize !important;
    }
  }
`;

export const Hello = styled.div`
  display: flex;
  margin-top: 150px;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 60px;
    font-size: 70px;
  }
  @media (max-width: 450px) {
    margin-top: 80px;
    p {
      font-size: 35px;
      margin-left: 15px;
    }
  }
`;

export const Section = styled.div`
  text-align: center;
  margin-top: 70px;
  p {
    font-size: 30px;
  }
  @media (max-width: 450px) {
    p {
      font-size: 22px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  a {
    display: flex;
    p {
      margin-left: 8px;
    }
  }
  @media (max-width: 870px) {
    justify-content: space-around;
    p {
      display: none;
    }
  }
`;
