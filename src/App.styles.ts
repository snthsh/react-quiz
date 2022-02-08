import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    height:100%;
  }
  body {
    background: #F2F9FF;
    margin:50px auto;
    display:flex;
    justify-content:center;
    color:#2599FB;
  }
  *{
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
  }
`;
