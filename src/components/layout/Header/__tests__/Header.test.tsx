import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import Header from '..';
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

describe('Header Component', () => {
  it('deve renderizar o logo e os links de navegação', () => {
    renderWithTheme(<Header />);

    // Verifica se o nome da aplicação está presente
    // O componente renderiza a tag <h1> que envolve a <img> com alt="Logo Lacrei Saúde"
    expect(screen.getByRole('heading', { name: /Logo Lacrei Saúde/i })).toBeInTheDocument();
    
    // Busca a navegação
    const navigationElement = screen.getByRole('navigation', { hidden: true });
    expect(navigationElement).toBeInTheDocument();
    
    // Verifica se os links principais estão presentes. 
    expect(screen.getByRole('link', { name: /Inicio/i, hidden: true })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ajuda/i, hidden: true })).toBeInTheDocument();
    
    // Testa o botão "Entrar"
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
  });
  
  it('deve aplicar o estilo de fundo do tema (gradiente)', () => {
    const { container } = renderWithTheme(<Header />);
    // O container.firstChild é o <header>
    const headerElement = container.firstChild;
    
    // O componente usa 'background: linear-gradient(...)', 
    // então testamos a presença de 'linear-gradient' na propriedade 'background'.
    expect(headerElement).toHaveStyleRule('background', expect.stringContaining('linear-gradient'));
  });
});