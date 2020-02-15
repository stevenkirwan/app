import { createGlobalStyle, css } from "styled-components";

const bodyStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline: none;
  }
  html,
  body {
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    padding: 0;
    margin: 0;
    max-width: 100%;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    font-size: 10px;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    font-family: inherit;
    vertical-align: baseline;
    font-size: 1.6rem;
  }
  img {
    max-width: 100%;
  }

  p {
    font-size: 1.6rem;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }

  a {
    color: #3498db;
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
   	${bodyStyles} 
`;
export default GlobalStyle;
