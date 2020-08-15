import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none
  }
  ul {
    list-style: none
  }
  *, button, input {
    font-family: Roboto, sans-serif;
  }
  :root {
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-white: #fff;
    --color-black: #000;
    --color-blue: #0061ff;
    --color-border: #bdc4c9;
  } 
  
`;