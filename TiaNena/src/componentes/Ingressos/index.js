import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Info, Avatar, Left, Type, Valor, Container, Qtd } from './styles';
import logo from '../../assets/imagens/teste1.jpeg';

export default function Ingressos({ data, increment, decrement }) {
  return (
    <Container>
      <Left>
        <Avatar source={logo} />
        <Info>
          <Type>{data.name}</Type>
          <Valor>{data.price}</Valor>
        </Info>
      </Left>
      <TouchableOpacity onPress={increment}>
        <Icon name="add" size={20} color="#000" />
      </TouchableOpacity>
      <Qtd> {data.quantidade} </Qtd>
      <TouchableOpacity onPress={decrement}>
        <Icon name="remove" size={20} color="#000" />
      </TouchableOpacity>
    </Container>
  );
}
Ingressos.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Ingressos.defaultProps = {
  data: {},
};
