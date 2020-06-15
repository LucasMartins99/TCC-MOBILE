import React, { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Title,
  LogoutButtom,
} from './styles';
import Background from '../../componentes/Background';
import { updatedUserRequest, signOut } from '../../store/modules/auth/actions';

export default function Perfil() {
  const profile = useSelector((state) => state.user);
  const passwordRef = useRef();
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const dispatch = useDispatch();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type] = useState('Cliente');
  const [userId] = useState(profile.id);

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updatedUserRequest(
        name,
        email,
        password,
        oldPassword,
        confirmPassword,
        type,
        userId
      )
    );
  }
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>
        <Form>
          <FormInput
            icon="person"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha antiga"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova senha"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha novamente"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <SubmitButton onPress={handleSubmit}>Alterar</SubmitButton>
          <LogoutButtom onPress={handleSignOut}>Sair</LogoutButtom>
        </Form>
      </Container>
    </Background>
  );
}
Perfil.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
