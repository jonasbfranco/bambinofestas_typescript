import { createGlobalStyle } from 'styled-components';

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
    background-color: #fff;
    -webkit-font-smoothing: antialiased !important;
    color: #fafafa;
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
`;
