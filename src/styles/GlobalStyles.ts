import {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components';

/* *** Fonts do projeto

font-family: 'Fredoka One', cursive;
font-family: 'Raleway', sans-serif;
font-family: 'Raleway Dots', cursive;
font-family: 'Ubuntu', sans-serif;
font-family: 'Voltaire', sans-serif;

*/

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Fredoka One', cursive;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height:100%;
  }
  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
  }
  body, input, button {
    font-size: 14px;
    font-family: 'Fredoka One', Helvetica, sans-serif, cursive;
  }
  button {
    cursor: pointer;
    border: 0;
  }
  svg {
    cursor: pointer
  }
  ul {
    list-style:none;
  }
  li {
    list-style-type: none;
    /* text-transform: uppercase; */
    font-family: 'Fredoka One', Arial, Helvetica, sans-serif, cursive;
    font-size: 40px;
    padding-left: 25px;
  }
  a {
    text-decoration:none;
  }
  h1 {
    text-transform: uppercase;
    font-family: 'Fredoka One', Arial, Helvetica, sans-serif, cursive;
    font-size: 50px;
    color: #fff;
  }
  h2 {
    color: #422680
  }


${(props): FlattenSimpleInterpolation =>
  props.theme === 'dark'
    ? css`
        body {
          background-color: #272727;
          color: #fafafa;
        }
        svg {
          color: #fafafa;
        }
        a {
          color: #fafafa;
        }
        p {
          color: #fafafa;
        }
        input,
        textarea {
          border: 1px solid #5c5c5c;
          background-color: #5c5c5c;
          color: #fafafa;
        }
      `
    : css`
        body {
          background-color: #fafafa;
          color: #272727;
        }
        svg {
          color: #272727;
        }
        a {
          color: #272727;
        }
        p {
          color: #272727;
        }
        input,
        textarea {
          border: 1px solid #e3e3e3;
          background-color: #e3e3e3;
          color: #858585;
        }
      `}
`;
