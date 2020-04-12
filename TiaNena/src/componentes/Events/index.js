/* eslint-disable camelcase */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
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
import api from '../../services/api';

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
  const name = useSelector((state) => state.user.name);
  const cpf = useSelector((state) => state.user.cpf);
  function handleComprar(id) {
    dispatch(CartActions.addToCartRequest(id));
    navigation.navigate('Cart');
  }
  async function handleLista(id2) {
    const id_events = parseInt(id2, 0);
    try {
      await api.post(`/list/${id_events}`, {
        name,
        cpf,
      });
      Alert.alert('Nome na lista com sucesso !!');
    } catch (err) {
      Alert.alert('Error entre em contato com ADM');
    }
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
        <Lista onPress={() => handleLista(data.id)}>Nome na Lista</Lista>
      </Div>
    </Container>
  );
}
