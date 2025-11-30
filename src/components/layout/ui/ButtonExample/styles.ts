import styled, { css } from 'styled-components';

// container do grupo
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem; /* Espaçamento entre os botões */
  margin-top: 2rem; /* Espaço abaixo da descrição */
  margin-bottom: 4rem; /* Espaço para separação do conteúdo */

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px; /* Limita a largura em mobile */
  }
`;

// Estilo Base do Botão
const buttonBase = css`
  padding: 1.2rem 3rem; /* Aumenta o padding para um botão */
  font-size: 1.8rem; /* Aumenta a fonte */
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

// Estilo Principal
const primaryStyle = css`
  background-color: ${(props) => props.theme.colors.buttonPrimaryBackground}; 
  color: ${(props) => props.theme.colors.buttonPrimaryText}; 
  border: 2px solid ${(props) => props.theme.colors.buttonPrimaryBackground};

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonPrimaryHover};
    border-color: ${(props) => props.theme.colors.buttonPrimaryHover};
  }
`;

export const ButtonContainer = styled.button<{ color: 'primary' | 'ghost' }>`
  ${buttonBase}
  ${(props) => props.color === 'primary' && primaryStyle}
  
  
  ${(props) => props.color === 'ghost' && css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.textPrimary};
    border: 2px solid ${(props) => props.theme.colors.textSecondary};

    &:hover {
      background-color: ${(props) => props.theme.colors.linkHoverBackground};
      border-color: ${(props) => props.theme.colors.textPrimary};
    }
  `}
`;