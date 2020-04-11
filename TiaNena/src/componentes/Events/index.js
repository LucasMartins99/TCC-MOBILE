import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Avatar,
  Info,
  Name,
  Date,
  Time,
  Comprar,
  Lista,
  Div,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import * as AuthActions from '../../store/modules/auth/actions';

function formatDate(date) {
  const dia = date.split('-')[2];
  const mes = date.split('-')[1];
  const ano = date.split('-')[0];
  return `${dia}-${mes}-${ano}`;
}
function formatHours(hours) {
  const hora = hours.split(':')[0];
  const minuto = hours.split(':')[1];
  return `${hora}:${minuto}`;
}
export default function Events({ data, navigation }) {
  const dispatch = useDispatch();
  function handleComprar(id) {
    dispatch(CartActions.addToCartRequest(id));
    navigation.navigate('Cart');
  }
  function handleLista() {
    dispatch(AuthActions.signOut());
  }
  return (
    <Container>
      <Avatar source={{ uri: data.File.url }} />
      <Info>
        <Name>{data.attraction}</Name>
        <Date>{formatDate(data.date)}</Date>
        <Time>{formatHours(data.hours)}</Time>
      </Info>
      <Div>
        <Comprar onPress={() => handleComprar(data.id)}>
          Comprar convite
        </Comprar>
        <Lista onPress={handleLista}>Nome na Lista</Lista>
      </Div>
    </Container>
  );
}
