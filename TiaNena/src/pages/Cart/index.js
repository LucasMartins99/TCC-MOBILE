import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import {
  Container,
  Title,
  List,
  Finalizar,
  Total,
  Text,
  Valor,
  Footer,
} from './styles';
import Background from '../../componentes/Background';
import Ingressos from '../../componentes/Ingressos';
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  function handleFinalizar() {
  

  }

  const dispatch = useDispatch();

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, event) => {
        return (
          totalSum +
          event.amountPF * event.valuepistaf +
          event.amountPM * event.valuepistam +
          event.amountCF * event.valuecamarotef +
          event.amountCM * event.valuecamarotem
        );
      }, 0)
    )
  );

  const cart = useSelector((state) =>
    state.cart.map((event) => ({
      ...event,
    }))
  );

  const data = [
    {
      name: 'Pista Masculino',
      price: cart[0].pricePM,
      quantidade: cart[0].amountPM,
      id: cart[0].id,
    },
    {
      name: 'Pista Feminino',
      price: cart[0].pricePF,
      quantidade: cart[0].amountPF,
      id: cart[0].id,
    },
    {
      name: 'Camarote Masculino',
      price: cart[0].priceCM,
      quantidade: cart[0].amountCM,
      id: cart[0].id,
    },
    {
      name: 'Camarote Feminino',
      price: cart[0].priceCF,
      quantidade: cart[0].amountCF,
      id: cart[0].id,
    },
  ];

  function increment(item) {
    if (item.name === 'Pista Masculino') {
      dispatch(
        CartActions.updateAmountRequest(item.id, item.quantidade + 1, item.name)
      );
    }
    if (item.name === 'Pista Feminino') {
      dispatch(
        CartActions.updateAmountRequest(item.id, item.quantidade + 1, item.name)
      );
    }
    if (item.name === 'Camarote Masculino') {
      dispatch(
        CartActions.updateAmountRequest(item.id, item.quantidade + 1, item.name)
      );
    }
    if (item.name === 'Camarote Feminino') {
      dispatch(
        CartActions.updateAmountRequest(item.id, item.quantidade + 1, item.name)
      );
    }
  }

  function decrement(item) {
    if (item.name === 'Pista Masculino') {
      dispatch(
        CartActions.updateAmountRequest(item.id, item.quantidade - 1, item.name)
      );
    }
    if (item.name === 'Pista Feminino') {
      dispatch(
        CartActions.updateAmountRequest(item.id, item.quantidade - 1, item.name)
      );
    }
    if (item.name === 'Camarote Masculino') {
      dispatch(
        CartActions.updateAmountRequest(item.id, item.quantidade - 1, item.name)
      );
    }
    if (item.name === 'Camarote Feminino') {
      dispatch(
        CartActions.updateAmountRequest(item.id, item.quantidade - 1, item.name)
      );
    }
  }

  return (
    <Background>
      <Container>
        <Title>CONVITES</Title>
        <List
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Ingressos
              data={item}
              increment={() => increment(item)}
              decrement={() => decrement(item)}
            />
          )}
        />
      </Container>
      <Footer>
        <Finalizar onPress={handleFinalizar}>Finalizar Compra</Finalizar>
        <Total>
          <Text>TOTAL</Text>
          <Valor>{total}</Valor>
        </Total>
      </Footer>
    </Background>
  );
}
Cart.navigationOptions = {
  tabBarLabel: 'Carrinho',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-grocery-store" size={20} color={tintColor} />
  ),
};
