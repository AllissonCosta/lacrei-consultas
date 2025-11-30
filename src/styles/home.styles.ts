import styled from 'styled-components';

export const HomeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem; 
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  min-height: calc(100vh - 400px); 
  justify-content: flex-start; 
  
  /* Aumenta o padding e ajusta a altura em telas maiores */
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 6rem 2rem;
    /* Centraliza melhor em telas grandes */
    justify-content: center;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2.8rem;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 1rem;
  
 
  padding: 0;

  /* TABLET */
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 3.6rem;
  }

  /* DESKTOP */
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 4.8rem;
    padding: 0 4rem; /* Aqui podemos adicionar o padding se necessário */
  }
`;

export const HomeDescription = styled.p`
  font-size: 1.6rem; 
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 3rem;
  

  padding: 0;

  /* TABLET */
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }
`;