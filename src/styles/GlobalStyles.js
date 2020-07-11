import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--black);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, input, button {
    border: 0;
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background-color: var(--white);
  }
  :root {
    --white: #fff;
    --black: #000;
    --primary: blue;
    --secondary: red;
    --grey: #ccc;
  }
`;
