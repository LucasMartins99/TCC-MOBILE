import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Perfil from './pages/Perfil';

export default (isSigned = false, isCart = 0) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
          Register,
          Cart,
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
        Cart: createBottomTabNavigator(
          {
            Main,
            Cart,

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
          isSigned && !isCart ? 'App' : !isSigned ? 'Sign' : 'Cart',
      }
    )
  );
