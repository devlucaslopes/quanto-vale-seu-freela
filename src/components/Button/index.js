import React from 'react';

import { Container } from './styles';

export default function Button({ handleOnClick }) {
  return (
    <Container onClick={handleOnClick}>Quero fazer um orçamento</Container>
  );
}
