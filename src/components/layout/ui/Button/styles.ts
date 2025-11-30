import styled, { css } from 'styled-components';

// Define o tipo de cor para o botão
export type ButtonColor = 'primary' | 'secondary' | 'ghost';

interface ButtonContainerProps {
  color: ButtonColor;
}

// O componente estilizado base
export const ButtonContainer = styled.button<ButtonContainerProps>`
  /* Estilos Base para todos os botões */
  border: none;
  cursor: pointer;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s, opacity 0.3s;
  
  /* Garante que o texto do botão não vaze */
  white-space: nowrap;
  
  /*
    Regra: O outline deve ser visível para usuários de teclado.
    O foco deve ser bem definido.
  */
  &:focus-visible {
    outline: 2px solid #FFD700;
    outline-offset: 2px;
  }

  /* Estilos específicos */
  ${(props) => props.color === 'primary' && css`
    background-color: ${props.theme.colors.buttonPrimaryBackground};
    color: ${props.theme.colors.buttonPrimaryText};
    
    
    &:hover {
      background-color: ${props.theme.colors.buttonPrimaryHover};
      opacity: 1;
    }
  `}

  /* Estilos para outros tipos de botão */
  ${(props) => props.color === 'ghost' && css`
    background: transparent;
    color: ${props.theme.colors.textPrimary};
    border: 2px solid ${props.theme.colors.textPrimary};
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `}
`;