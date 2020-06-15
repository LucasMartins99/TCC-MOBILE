import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);
  const profileType = useSelector((state) => state.user.type);
  let adm = false;
  if (profileType === 'adm' || profileType === 'promoter') {
    adm = true;
  }
  const Routes = createRouter(signed, adm);
  return <Routes />;
}
