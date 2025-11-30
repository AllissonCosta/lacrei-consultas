import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 
  }

  body {
    background-color: ${props => props.theme.colors.backgroundPage};
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.sizeBase}; /* 16px */
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;