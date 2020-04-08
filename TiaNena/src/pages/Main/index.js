import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Title, List } from './styles';
import Background from '../../componentes/Background';
import Events from '../../componentes/Events';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        async function loadEvents() {
            const response = await api.get('/events');

            setEvents(response.data);
        }
        loadEvents();
    }, []);
    const data = [1, 2, 3, 4];
    return (
        <Background>
            <Container>
                <Title>EVENTOS</Title>
                <List
                    data={events}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <Events data={item} />}
                />
            </Container>
        </Background>
    );
}
Main.navigationOptions = {
    tabBarLabel: 'Eventos',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="event" size={20} color={tintColor} />
    ),
};
