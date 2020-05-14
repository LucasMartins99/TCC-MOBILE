/* eslint-disable no-nested-ternary */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Cart from './pages/Cart';

import Lista from './pages/Lista';

export default (isSigned = false, isCart = 0) =>
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
            Lista,
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
        Cart: createBottomTabNavigator(
          {
            Main,
            Cart,
            Lista,
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
          isSigned && !isCart ? 'App' : !isSigned ? 'Sign' : 'Cart',
      }
    )
  );
