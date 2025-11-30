import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

// Extende as propriedades nativas de um botão
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: S.ButtonColor;
}

const Button = ({ children, color = 'primary', ...rest }: ButtonProps) => {
  return (
    // Usa o elemento <button> e passa a cor e demais props
    <S.ButtonContainer color={color} {...rest}>
      {children}
    </S.ButtonContainer>
  );
};

export default Button;