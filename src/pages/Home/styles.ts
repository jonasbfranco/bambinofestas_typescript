import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 90vw;
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
