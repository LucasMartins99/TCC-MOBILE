import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLinkText,
  SignLink,
} from './styles';
import Background from '../../componentes/Background';
import { createUserRequest } from '../../store/modules/auth/actions';

export default function Register({ navigation }) {
  const passwordRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [type] = useState('Cliente');

  function handleSubmit() {
    dispatch(createUserRequest(name, email, password, type, cpf));
  }
  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => cpfRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="fingerprint"
            autoCorrect={false}
            placeholder="Digite seu CPF"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={cpf}
            onChangeText={setCpf}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}>Cadastrar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('Login')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
