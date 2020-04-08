import React, { useState } from 'react';
import {
    Info,
    Avatar,
    Left,
    Type,
    Valor,
    Container,
    Finalizar,
    Qtd,
} from './styles';
import logo from '../../assets/imagens/teste1.jpeg';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Ingressos({ data }) {
    return (
        <Container>
            <Left>
                <Avatar source={logo} />
                <Info>
                    <Type>{data.name}</Type>
                    <Valor>R$ 50,00</Valor>
                </Info>
            </Left>
            <TouchableOpacity onPress={() => {}}>
                <Icon name="add" size={20} color="#000" />
            </TouchableOpacity>
            <Qtd> 1 </Qtd>
            <TouchableOpacity onPress={() => {}}>
                <Icon name="remove" size={20} color="#000" />
            </TouchableOpacity>
        </Container>
    );
}
