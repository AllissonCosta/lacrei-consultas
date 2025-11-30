import * as S from './styles'; 
import Link from 'next/link';

// Definição da Interface
interface CardData {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  iconSrc: string; 
}

// Simulação de dados para os cards
const cardsData: CardData[] = [
  { 
    title: 'Segurança', 
    description: 'Entenda como validamos pacientes e profissionais da saúde.',
    buttonText: 'Entenda', 
    href: '/', 
    iconSrc: '/seguranca.svg'
  },
  { 
    title: 'Acessibilidade', 
    description: 'Conheça nossos recursos que tornam a plataforma Lacrei Saúde acessível.',
    buttonText: 'Conheça', 
    href: '/', 
    iconSrc: '/acessibilidade.svg'
  },
  { 
    title: 'Dúvidas Frequentes', 
    description: 'Acesse nossa lista de perguntas frequentes e tire suas dúvidas.',
    buttonText: 'Acesse', 
    href: '/', 
    iconSrc: '/duvidas_frequentes.svg'
  },
];

const ValueCardsSection = () => {
  return (
    <S.SectionContainer>
      <S.TitleGroup>
        <h2>Nos preocupamos com cada detalhe de sua experiência</h2>
      </S.TitleGroup>
      
      <S.CardsWrapper>
        {cardsData.map((card, index) => (
          <S.Card key={index}>
            <S.IconContainer>
              {/* Renderização da Imagem usando iconSrc */}
              <img 
                src={card.iconSrc}
                alt={`Ícone de ${card.title}`}
                width={90}
                height={90}
                style={{ width: '90px', height: '90px' }}
              />
            </S.IconContainer>
            
            <S.CardTitle>{card.title}</S.CardTitle>
            
            <S.CardDescription>{card.description}</S.CardDescription>
            
            <Link href={card.href} passHref>
              <S.CardButton>
                {card.buttonText}
              </S.CardButton>
            </Link>
          </S.Card>
        ))}
      </S.CardsWrapper>
    </S.SectionContainer>
  );
};

export default ValueCardsSection;