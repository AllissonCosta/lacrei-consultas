import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 2rem; /* Espaço para separar o conteúdo */
  background-color: ${(props) => props.theme.colors.footerBackground};
  color: ${(props) => props.theme.colors.footerText};
  border-top: 1px solid ${(props) => props.theme.colors.grayLight || '#E2E8F0'}; /* Linha divisória */
`;

// Conteúdo Principal
export const MainContent = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  
  /* Layout de 4 colunas em desktop */
  grid-template-columns: 1fr repeat(3, minmax(150px, 1fr)); 
  gap: 3rem;

  /* Layout em telas menores (Mobile: empilha ou 2 colunas) */
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// Coluna da Logo
export const LogoSocialGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LogoImage = styled.img`
  width: 170px; /* Largura da logo */
  height: auto;
`;

export const SocialLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${(props) => props.theme.colors.textSecondary};
    transition: color 0.2s;
    
    &:hover {
      color: ${(props) => props.theme.colors.logoPrimary};
    }
    
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

// Coluna de Links (Navegação)
export const FooterLinkColumn = styled.ul`
  list-style: none;
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.textPrimary};
  }
  li {
    margin-bottom: 1rem;
    a {
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.textAnchor};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: ${(props) => props.theme.colors.logoPrimary};
      }
    }
  }
`;

// Seção avisos e Direitos Autorais
export const LegalSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.grayLight || '#E2E8F0'};
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* Alinha o botão "Voltar ao topo" */

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

export const LegalText = styled.div`
  max-width: 70%;
  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.textSecondary};
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const BackToTopButton = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.colors.textSecondary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.linkHoverBackground};
  }

  svg {
    color: ${(props) => props.theme.colors.textPrimary};
    width: 24px;
    height: 24px;
  }
`;