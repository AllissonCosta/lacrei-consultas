import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../../styles/theme';
import Button from '..'; 
import 'jest-styled-components';

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Button Component', () => {
  it('deve renderizar com o texto correto', () => {
    renderWithTheme(<Button>Testar Clique</Button>);
    
    // Busca o botão pelo texto que o usuário veria
    expect(screen.getByRole('button', { name: /testar clique/i })).toBeInTheDocument();
  });

  it('deve chamar a função onClick quando clicado', () => {
    // Cria uma função mock para monitorar o clique
    const handleClick = jest.fn();
    
    renderWithTheme(<Button onClick={handleClick}>Clique Aqui</Button>);
    
    // Simula o clique do usuário no botão
    fireEvent.click(screen.getByRole('button', { name: /clique aqui/i }));
    
    // Verifica se a função foi chamada exatamente uma vez
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('deve aplicar a cor primária do tema por padrão', () => {
    const { getByRole } = renderWithTheme(<Button>Botão Primário</Button>);
    const button = getByRole('button');

    // Verifica se a cor de fundo corresponde à variável do tema
    expect(button).toHaveStyleRule('background-color', theme.colors.buttonPrimaryBackground);
  });
});