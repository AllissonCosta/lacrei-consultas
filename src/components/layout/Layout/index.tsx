import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';

// Container Flexbox para forçar o footer para baixo
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ocupa a altura total da viewport */
`;

const MainContent = styled.main`
  flex: 1; /* Faz o conteúdo principal ocupar todo o espaço restante */
  width: 100%;
  padding: 3rem 0; /* Espaçamento vertical para o conteúdo */
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainLayout>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </MainLayout>
  );
};

export default Layout;