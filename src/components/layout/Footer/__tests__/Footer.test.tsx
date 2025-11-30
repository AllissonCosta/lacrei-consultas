import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import Footer from '..';
import 'jest-styled-components';

// Mock do Next Router para evitar erros de ambiente em testes
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}));

// Função auxiliar para renderizar o componente com o tema
const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Footer Component', () => {
  it('deve renderizar o elemento semântico footer e a informação de copyright', () => {
    renderWithTheme(<Footer />);

    // Verifica se a tag semântica 'footer' está presente
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // Verifica se o texto de Copyright está presente
    expect(screen.getByText(/Copyright © 2024 Lacrei Saúde/i)).toBeInTheDocument();

    // Verifica o botão "Voltar ao topo"
    expect(screen.getByRole('button', { name: /Voltar ao topo da página/i })).toBeInTheDocument();
  });

  it('deve conter os títulos das seções de navegação e legal', () => {
    renderWithTheme(<Footer />);

    // Usando strings exatas para evitar conflitos de substrings
    expect(screen.getByRole('heading', { name: 'Lacrei Saúde', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Saúde', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Segurança e Privacidade', level: 2 })).toBeInTheDocument();
  });

  it('deve renderizar os links de navegação principais', () => {
    renderWithTheme(<Footer />);

    // Verifica alguns links chave
    expect(screen.getByRole('link', { name: /Quem Somos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Política de Privacidade/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Buscar atendimento/i })).toBeInTheDocument();
    
    // Verifica a presença da logo
    expect(screen.getByRole('img', { name: /Logo Lacrei Saúde/i })).toBeInTheDocument();
  });
});