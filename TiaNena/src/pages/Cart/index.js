import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
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

const data = [{ name: 'Pista Masculino' }, { name: 'Pista Feminino' }];
export default function Cart() {
    function handleFinalizar() {}
    return (
        <Background>
            <Container>
                <Title>CONVITES</Title>
                <List
                    data={data}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <Ingressos data={item} />}
                />
            </Container>
            <Footer>
                <Finalizar onPress={handleFinalizar}>
                    Finalizar Compra
                </Finalizar>
                <Total>
                    <Text>TOTAL</Text>
                    <Valor>R$ 110,00</Valor>
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
