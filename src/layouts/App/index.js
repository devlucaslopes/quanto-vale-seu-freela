import React from 'react';

import Header from '../../components/Header';
import { Container, Wrapper } from './styles';

export default function App({ children }) {
  return (
    <Container>
      <Header />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
