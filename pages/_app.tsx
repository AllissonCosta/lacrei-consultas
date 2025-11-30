import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Aplica o tema em toda a aplicação
    <ThemeProvider theme={theme}>
      {/* Aplica os estilos globais (reset e body) */}
      <GlobalStyles />
      {/* Renderiza a página atual */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;