import 'jest-styled-components';

// Tipagens do Jest/expect globalmente
declare module 'jest' {
  interface Matchers<R> {
    // Declara que o toHaveStyleRule existe e pode ser usado
    toHaveStyleRule(property: string, value?: string | number | RegExp, options?: {
      target?: string;
      media?: string;
      modifier?: string;
      supports?: string;
    }): R;
  }
}