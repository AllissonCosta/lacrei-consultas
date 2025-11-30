import Link from 'next/link';
import * as S from './styles';

// Placeholder para os ícones
const SocialIcon = ({ iconName }: { iconName: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24">{/* Placeholder SVG */}<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10">{iconName}</text></svg>
);

const Footer = () => {
  // Função simples para rolar ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.FooterContainer>
      <S.MainContent>
        {/* Coluna 1: Logo e Redes Sociais */}
        <S.LogoSocialGroup>

          <Link href="/" passHref>
            <S.LogoImage 
              src="/logo.svg" 
              alt="Logo Lacrei Saúde" 
              
            />
          </Link>
        </S.LogoSocialGroup>

        {/* Coluna 2: Links */}
        <S.FooterLinkColumn>
          <h2>Lacrei Saúde</h2>
          <li><Link href="/">Quem Somos</Link></li>
          <li><Link href="/">Nosso Propósito</Link></li>
          <li><Link href="/">Missão, Visão e Valor</Link></li>
          <li><Link href="/">Acessibilidade</Link></li>
        </S.FooterLinkColumn>
        
        {/* Coluna 3: Links */}
        <S.FooterLinkColumn>
          <h2>Saúde</h2>
          <li><a href="/" target="_blank" rel="noopener noreferrer">Buscar atendimento</a></li>
          <li><a href="/" target="_blank" rel="noopener noreferrer">Oferecer atendimento</a></li>
        </S.FooterLinkColumn>
        
        {/* Coluna 4: Links */}
        <S.FooterLinkColumn>
          <h2>Segurança e Privacidade</h2>
          <li><Link href="/">Política de Privacidade</Link></li>
          <li><Link href="/">Termos de Uso</Link></li>
          <li><Link href="/">Direitos de Titular</Link></li>
        </S.FooterLinkColumn>
      </S.MainContent>
      
      {/* Seção avisos e Botão Voltar ao Topo */}
      <S.LegalSection>
        <S.LegalText>
          <p>A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.</p>
          <p>Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site <a href="https://cvv.org.br/" target="_blank" rel="noopener noreferrer">www.cvv.org.br</a></p>
          <p>Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</p>
        </S.LegalText>
        
        <S.BackToTopButton onClick={scrollToTop} aria-label="Voltar ao topo da página">
          {/* Ícone de seta para cima */}
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>
        </S.BackToTopButton>
      </S.LegalSection>
    </S.FooterContainer>
  );
};

export default Footer;