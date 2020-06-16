import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes';

export default function App() {
  let adm = false;
  let cartVazio = false;
  const signed = useSelector((state) => state.auth.signed);
  const profileType = useSelector((state) => state.user.type);
  const cartSize = useSelector((state) => state.cart.length);
  console.log(cartSize);
  if (cartSize >= 1) {
    cartVazio = true;
  }

  if (profileType === 'adm' || profileType === 'promoter') {
    adm = true;
  }
  const Routes = createRouter(signed, adm, cartVazio);
  return <Routes />;
}
