import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(225deg, #abc8de 0%, #c7c9d8 16.6%, #e5cccf 33.3%, #ffd3c7 50%, #ffdbc2 66.6%, #ffe4c0 83.3%, #ffedc3 100%);
      color: #333;
      min-height: 100vh;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }
`;

export const AppContainer = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  padding: 40px;
`;
