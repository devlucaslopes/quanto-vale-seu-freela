import React from 'react';
import { useSelector } from 'react-redux';

import history from '../../services/history';
import Button from '../../components/Button';
import { Container, Actions } from './styles';

export default function Home() {
  const { totalPerHour } = useSelector(state => state.budget);

  function _handleOnClick() {
    history.push('/fazer-orcamento');
  }

  return (
    <Container>
      <h1>Resultado!</h1>

      <p>
        O valor pela sua hora de trabalho é de:{' '}
        <span>{`R$ ${totalPerHour.toFixed(2)}`}.</span>
      </p>

      <p>
        Levamos em consideração todos os valores informados anteriormente e a
        conta para chegar nesse resultado é a seguinte:
      </p>

      <p>
        (Valor do projeto / (Dias trabalhaods * 4 * Horas diárias) ) + ( (
        Férias * Dias trabalhaods * Horas diárias ) ).
      </p>

      <Actions>
        <Button handleOnClick={() => {}}>Fazer outro orçamento</Button>
      </Actions>
    </Container>
  );
}
