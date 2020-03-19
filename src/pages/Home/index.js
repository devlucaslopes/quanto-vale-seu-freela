import React from 'react';

import history from '../../services/history';
import Button from '../../components/Button';
import { Container } from './styles';

export default function Home() {
  function _handleOnClick() {
    history.push('/fazer-orcamento');
  }

  return (
    <Container>
      <h1>
        Quanto vale seu <span>freela</span>?
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tristique malesuada justo et congue. Nunc turpis metus, vestibulum ac
        vehicula et, tristique in dui. Mauris a risus euismod, blandit mauris
        sed, fringilla felis. Mauris pellentesque, tellus auctor fringilla
        fringilla, odio odio lacinia purus, sed lacinia urna dolor et eros. Sed
        molestie eros lacus, quis porttitor orci pellentesque eget. Proin felis
        dolor, congue ac purus vitae, iaculis tempus lorem. In rhoncus nec mi ac
        porta. Pellentesque convallis justo eu augue ullamcorper, quis
        pellentesque urna vulputate. Morbi varius, neque quis venenatis commodo,
        est risus tempus mauris, id ultrices risus metus rhoncus ligula.
        Vestibulum non dui ullamcorper, faucibus velit sit amet, consequat est.
      </p>
      <Button handleOnClick={_handleOnClick}>Quero fazer um orçamento</Button>
    </Container>
  );
}
