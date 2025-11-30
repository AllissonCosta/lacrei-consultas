import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  
  /* Margem um pouco menor */
  margin: 3rem auto 4rem auto; 
  padding: 0 1.5rem; /* Padding menor em mobile */
  text-align: center;
  
  /* Aumenta a margem/padding em telas maiores */
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 4rem auto 6rem auto;
    padding: 0 2rem;
  }
`;

export const TitleGroup = styled.div`
  margin-bottom: 3rem; /* Margem menor em mobile */
  
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-bottom: 4rem;
  }
  
  h2 {
    /* Tamanho da fonte menor */
    font-size: 2.4rem; 
    font-weight: 700;
    color: ${(props) => props.theme.colors.textPrimary};
    margin-bottom: 1rem;
    
    /* TABLET/DESKTOP: Aumenta a fonte */
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 3.2rem;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  gap: 2rem;
  /* Sempre 1 coluna */
  grid-template-columns: 1fr;

  /* BREAKPOINT TABLET: Mudamos para 2 colunas */
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* BREAKPOINT DESKTOP: Mudamos para 3 colunas */
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  padding: 3rem 2rem;
  border-radius: 12px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconContainer = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.colors.logoPrimary}; 
  border-radius: 50%;
  color: ${(props) => props.theme.colors.logoPrimary};
  
  
  font-size: 3rem; 
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.5;
`;

export const CardButton = styled.button`
  background-color: transparent; 
  color: ${(props) => props.theme.colors.logoPrimary};
  border: 2px solid ${(props) => props.theme.colors.logoPrimary};
  border-radius: 8px;
  padding: 1rem 3rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.logoPrimary};
    color: ${(props) => props.theme.colors.textInvert};
  }
`;