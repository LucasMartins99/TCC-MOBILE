/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Modal } from 'react-native';
import PropTypes from 'prop-types';
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
  Fechar,
  CenterModal,
  List,
  DivList,
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
export default function Events({ data, navigation, lista }) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const cpf = useSelector((state) => state.user.cpf);
  const [modalVisible, setModalVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const cartVazio = useSelector((state) => state.cart.length);
  function handleComprar(id) {
    dispatch(CartActions.addToCartRequest(id));
    if (cartVazio >= 1) {
      navigation.navigate('Cart');
    } else {
      navigation.navigate('Main');
    }
  }
  async function handleModal(id) {
    setModalVisible(true);
    const id_events = parseInt(id, 0);
    const response = await api.get('/list');
    setEvents(response.data);
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
      Alert.alert('Seu nome já esta na lista');
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
      {!lista ? (
        <Div>
          <Comprar onPress={() => handleComprar(data.id)}>
            Comprar convite
          </Comprar>
          <Lista onPress={() => handleLista(data.id)}>Nome na Lista</Lista>
        </Div>
      ) : (
        <Div>
          <Comprar onPress={() => handleModal(data.id)}>
            Ver nomes na lista
          </Comprar>
        </Div>
      )}
      <CenterModal>
        <Modal
          animationType="slide"
          statusBarTranslucent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has ben closed');
          }}
        >
          <List
            data={events}
            keyExtractor={(item) => String(item.cpf)}
            renderItem={({ item }) => (
              <DivList>
                <Name>Nome: {item.name}</Name>
                <Name>CPF: {item.cpf}</Name>
              </DivList>
            )}
          />
          <Div>
            <Fechar onPress={() => setModalVisible(false)}>Fechar lista</Fechar>
          </Div>
        </Modal>
      </CenterModal>
    </Container>
  );
}
Events.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  lista: PropTypes.bool,
};
Events.defaultProps = {
  data: {},
  lista: false,
};
