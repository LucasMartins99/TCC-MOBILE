import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Container, Title, List } from './styles';
import Background from '../../componentes/Background';
import Events from '../../componentes/Events';
import api from '../../services/api';

export default function Lista({ navigation }) {
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
        <Title>Escolha o evento</Title>
        <List
          data={events}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Events lista data={item} navigation={navigation} />
          )}
        />
      </Container>
    </Background>
  );
}
Lista.navigationOptions = {
  tabBarLabel: 'Lista',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="assignment" size={20} color={tintColor} />
  ),
};
Lista.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
