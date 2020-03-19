import React from 'react';

import Logo from '../../assets/logo.png';
import { Container, Wrapper } from './styles';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="Heart devs" />
        <ul>
          <li>
            <a href="#">Página inicial</a>
          </li>
          <li>
            <a href="#">Repositório</a>
          </li>
          <li>
            <a href="#">Quem sou eu?</a>
          </li>
        </ul>
      </Wrapper>
    </Container>
  );
}
