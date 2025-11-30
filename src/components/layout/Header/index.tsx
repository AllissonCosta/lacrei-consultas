import Link from 'next/link';
import * as S from './styles';

const Header = () => {
  return (
    // Usa o Container
    <S.HeaderContainer>
      
      <S.NavContent>
        <S.Logo>
          <Link href="/" passHref>
          <S.LogoImage 
              src="/logo1.svg"
              alt="Logo Lacrei Saúde" 
            />
          </Link>
        </S.Logo>

        {/* Links de Navegação e Botão de Ação */}
        <S.NavLinksGroup>
          {/* Navegação Principal */}
          <S.NavList>
            <S.Ul>
              <S.Li>
                <Link href="/">
                  Inicio
                </Link>
              </S.Li>
              <S.Li>
                <Link href="/servicos">
                  Serviços
                </Link>
              </S.Li>
              <S.Li>
                <Link href="/">
                  Ajuda
                </Link>
              </S.Li>
            </S.Ul>
          </S.NavList>

          {/* Botão de Ação com Dropdown */}
          <S.EntryButton type="button" aria-haspopup="true" aria-expanded="false">
            Entrar
            <S.DropdownIcon>
              &#9660; 
            </S.DropdownIcon>
          </S.EntryButton>

        </S.NavLinksGroup>
      </S.NavContent>
    </S.HeaderContainer>
  );
};

export default Header;