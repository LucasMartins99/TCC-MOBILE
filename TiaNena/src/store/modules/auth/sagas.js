import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(loginSuccess(token, user));
    /* history.push("/main"); */
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Houve um erro verifique seus dados');
    yield put(loginFailure());
  }
}
export function* createUser({ payload }) {
  try {
    const { name, email, password, type, cpf } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      type,
      cpf,
    });

    /* history.push("/"); */
    Alert.alert('Usuario cadastrado com suceeso !!');
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Houve um erro verifique seus dados');
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  /* history.push("/"); */
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/CREATE_USER_REQUEST', createUser),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
