import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CurrencyInput from 'react-currency-input';
import * as Yup from 'yup';

import history from '../../services/history';
import { calculate } from '../../store/modules/budget/actions';
import Button from '../../components/Button';
import { Container, InputGroup } from './styles';

const schema = Yup.object().shape({
  total: Yup.number().required(),
  dailyHours: Yup.number()
    .positive()
    .min(1)
    .max(24)
    .required(''),
  workedDays: Yup.number()
    .positive()
    .min(1)
    .required('')
    .positive(),
  vacation: Yup.number()
    .positive()
    .required(''),
});

export default function Home() {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(1000);
  const [dailyHours, setDailyHours] = useState(8);
  const [workedDays, setWorkedDays] = useState(7);
  const [vacation, setVacation] = useState(1);

  function _handleOnChange(_, maskedvalue, floatvalue) {
    setTotal(floatvalue);
  }

  async function _handleSubmit() {
    try {
      await schema.validate({ total, dailyHours, workedDays, vacation });
    } catch (error) {
      alert(error.message);
    }

    dispatch(calculate(total, dailyHours, workedDays, vacation));

    history.push('/resultado');
  }

  return (
    <Container>
      <h1>
        Vamos as <span>contas</span>!
      </h1>
      <form action="">
        <InputGroup>
          <label>Valor total do projeto</label>
          <CurrencyInput
            value={total}
            onChangeEvent={_handleOnChange}
            prefix="R$ "
            decimalSeparator=","
            thousandSeparator="."
            placeholder="R$ 0,00"
          />
        </InputGroup>
        <InputGroup>
          <label>Quantidade de horas trabalhadas por dia</label>
          <input
            type="text"
            placeholder="ex.: 8 (máximo de 24)"
            value={dailyHours}
            onChange={e => setDailyHours(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label>Dias efetivos trabalhados na semana</label>
          <input
            type="text"
            placeholder="ex: 7"
            value={workedDays}
            onChange={e => setWorkedDays(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label>Dias de férias pelo projeto</label>
          <input
            type="text"
            placeholder="ex.: 3"
            value={vacation}
            onChange={e => setVacation(e.target.value)}
          />
        </InputGroup>
      </form>
      <Button handleOnClick={_handleSubmit}>Calcular</Button>
    </Container>
  );
}
