import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '../../componentes/Input';
import Button from '../../componentes/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const Form = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  align-self: stretch;
  margin-top: 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  align-self: center;
`;

export const LogoutButtom = styled(Button)`
  margin-top: 20px;
  background: #f64c75;
`;
