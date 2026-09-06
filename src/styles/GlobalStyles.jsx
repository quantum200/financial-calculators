import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
      font-family: 'Inter', sans-serif;
      background: #D3D3D3;
      color: #333;
      min-height: 100vh;
  }
`;

export const AppContainer = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  padding: 40px;
`;
