import React from 'react';
import logo from '../../assets/imagens/teste1.jpeg';
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
function handleSubmit() {}
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
export default function Events({ data }) {
    return (
        <Container>
            <Avatar source={{ uri: data.File.url }} />
            <Info>
                <Name>{data.attraction}</Name>
                <Date>{formatDate(data.date)}</Date>
                <Time>{formatHours(data.hours)}</Time>
            </Info>
            <Div>
                <Comprar onPress={handleSubmit}>Comprar convite</Comprar>
                <Lista onPress={handleSubmit}>Nome na Lista</Lista>
            </Div>
        </Container>
    );
}
