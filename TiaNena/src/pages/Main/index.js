import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { Container, Title, List } from './styles';
import Background from '../../componentes/Background';
import Events from '../../componentes/Events';

export default function Main({ navigation }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('/events');

      setEvents(response.data);
    }
    loadEvents();
  }, []);

  return (
    <Background>
      <Container>
        <Title>EVENTOS</Title>
        <List
          data={events}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Events data={item} navigation={navigation} />
          )}
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
