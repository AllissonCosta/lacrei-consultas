import React from 'react';
import router, { useRouter } from 'next/router';
import Button from '../Button';
import styled from 'styled-components';
import * as S from './styles';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ButtonExample = () => {
  
  // Função para o botão "Buscar Serviços"
const handleBuscarServicos = () => {
    router.push('/servicos');
  };

  // Função para o botão "Entrar em Contato"
  const handleEntrarEmContato = () => {
    router.push('/agendamento');
  };

  return (
    
    <S.ButtonGroup>
      <S.ButtonContainer color="primary" aria-label="Ir para a página de serviços" onClick={handleBuscarServicos} >
        Buscar Serviços
      </S.ButtonContainer>
      
      <S.ButtonContainer color="primary" type="button" onClick={handleEntrarEmContato} >
        Entrar em Contato
      </S.ButtonContainer>
      
    </S.ButtonGroup>
  );
};

export default ButtonExample;