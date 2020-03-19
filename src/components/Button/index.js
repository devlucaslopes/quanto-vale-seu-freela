import React from 'react';

import { Container } from './styles';

export default function Button({ handleOnClick, children }) {
  return <Container onClick={handleOnClick}>{children}</Container>;
}
