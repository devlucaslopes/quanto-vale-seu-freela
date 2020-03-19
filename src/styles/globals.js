import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    color: #fff;
    background: #202932;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  input, button {
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input, select {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  button {
    cursor: pointer;
  }
`;
