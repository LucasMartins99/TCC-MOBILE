/* eslint-disable no-nested-ternary */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Perfil from './pages/Perfil';

import Lista from './pages/Lista';

export default (isSigned = false, isAdm) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
          Register,
        }),
        App: createBottomTabNavigator(
          {
            Main,
            Perfil,
          },

          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          }
        ),
        Adm: createBottomTabNavigator(
          {
            Main,
            Cart,
            Lista,
            Perfil,
          },

          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          }
        ),
      },
      {
        initialRouteName:
          isSigned && !isAdm ? 'App' : !isSigned ? 'Sign' : 'Adm',
      }
    )
  );
