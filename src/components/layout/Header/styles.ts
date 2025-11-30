import styled, { css } from 'styled-components';

// Container Principal
export const HeaderContainer = styled.header`
  width: 100%;
  
  background: linear-gradient(
    rgb(245, 255, 251) 31.04%, 
    rgb(255, 255, 255) 100%
  );
  
  /* Mantém o Header no topo */
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

// Seção da Logo e Navegação
export const NavContent = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 1rem 2rem;
  
  display: flex;
  justify-content: space-between; 
  align-items: center;
`;

// Estilização do Logotipo
export const Logo = styled.h1`
  font-size: 2.2rem; 
  font-weight: 700; 

  a {
    color: ${(props) => props.theme.colors.logoPrimary || '#008479'}; 
    display: flex;
    align-items: center;
    gap: 0.5rem; 
  }
`;

export const LogoImage = styled.img`
  width: 170px; /* Largura da logo */
  height: auto;
`;

// Container dos Links e Botão
export const NavLinksGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem; /* Espaçamento entre links/botões */
`;

// Estilização da navegação (Links 'Quem Somos' e 'Ajuda')
export const NavList = styled.nav`
  /* Em mobile, a navegação de links simples deve ser escondida */
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.8rem; 
`;

export const Li = styled.li`
  a {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 1.6rem;
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover, &:focus-visible {
      background-color: ${(props) => props.theme.colors.linkHoverBackground || '#F0F0F0'}; 
      outline: none;
    }
  }
`;

// Estilização do Botão Dropdown "Entrar"
export const EntryButton = styled.button`
  background-color: ${(props) => props.theme.colors.buttonPrimaryBackground};
  color: ${(props) => props.theme.colors.buttonPrimaryText};
  border: none;
  border-radius: 8px;
  padding: 1rem 1.6rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonPrimaryHover};
  }
`;

// Icone do dropdown
export const DropdownIcon = styled.span`
  font-size: 1.2rem;
  margin-left: 0.4rem;
`;