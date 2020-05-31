import styled from 'styled-components';

interface MenuDrawerProps {
  isOpen: boolean;
}

export const Background = styled.div`
  background-color: #422680;
  height: 60px;
  color: #fff;

  a {
    color: #fff;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 95vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > svg {
    display: none;
  }

  @media (max-width: 1200px) {
    > svg {
      display: block;
    }

    ul {
      display: none;
    }
  }
`;

/*
.nav-menu {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  background-color: #be2edd;
  transition: all 0.2s;
  z-index: 98;
  display: flex;
  overflow-y: auto;
  &.show {
    left: 0;
  }
*/

export const MenuDrawer = styled.ul<MenuDrawerProps>`
  position: absolute;
  background-color: #422680;
  top: 0px;
  height: 100vh;
  width: 40vw;
  right: 0;
  display: ${(props): string => (props.isOpen ? 'block' : 'none')};
  svg:first-child {
    height: 60px;
    color: #fff;
    margin-left: calc(100% - 60px);
  }
  li {
    padding: 10px 0 10px 25px;
    border-bottom: solid 1px #737373;
  }
  svg:last-child {
    margin: 20px 0 0 25px;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
    a {
      text-align: center;
    }
  }
  @media (max-width: 460px) {
    width: 70vw;
  }
  @media (max-width: 320px) {
    width: 70vw;
    li {
      font-size: 35px !important;
    }
  }
`;
