import React, { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import {
  format,
  subMonths,
  addMonths,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Header, Meses, List } from './styles';
import Background from '../../componentes/Background';
import Events from '../../componentes/Events';
import api from '../../services/api';

export default function Lista({ navigation }) {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const dateFormated = useMemo(() => format(date, 'MMMM', { locale: pt }), [
    date,
  ]);
  const firstDay = startOfMonth(date);
  const lastDay = endOfMonth(date);

  const firstDayFormat = useMemo(
    () => format(firstDay, 'yyyy-MM-dd', { locale: pt }),
    [firstDay]
  );
  const lastDayFormat = useMemo(
    () => format(lastDay, 'yyyy-MM-dd', { locale: pt }),
    [lastDay]
  );

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('/event-month', {
        params: { firstDayFormat, lastDayFormat },
      });
      const data = response.data.map((event) => ({
        ...event,
      }));
      setEvents(data);
    }
    loadEvents();
  }, [firstDayFormat, lastDayFormat]);

  function handleNextMonth() {
    setDate(addMonths(date, 1));
  }
  function handlePrevMonth() {
    setDate(subMonths(date, 1));
  }

  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity onPress={handlePrevMonth}>
            <Icon name="keyboard-arrow-left" size={60} color="#000" />
          </TouchableOpacity>
          <Meses>{dateFormated}</Meses>
          <TouchableOpacity onPress={handleNextMonth}>
            <Icon name="keyboard-arrow-right" size={60} color="#000" />
          </TouchableOpacity>
        </Header>
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
