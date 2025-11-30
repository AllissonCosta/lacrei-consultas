import { NextPage } from 'next'; 
import Layout from '../src/components/layout/Layout';
import ButtonExample from '../src/components/layout/ui/ButtonExample'; 
import ValueCardsSection from '../src/components/content/ValueCardsSection'; 
import * as S from '../src/styles/home.styles';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <S.HomeWrapper>
        
        <S.HomeTitle>
          Bem-vindo à Lacrei Saúde
        </S.HomeTitle>
        
        <S.HomeDescription>
          Desenvolvendo experiências digitais inclusivas, acessíveis e seguras.
        </S.HomeDescription>
        
        
        <ButtonExample /> 
        
      </S.HomeWrapper>

      
      <ValueCardsSection />
      
    </Layout>
  );
};

export default HomePage;