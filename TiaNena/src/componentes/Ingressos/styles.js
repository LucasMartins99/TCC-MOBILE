import styled from 'styled-components/native';
import Button from '../Button';

export const Container = styled.View`
  margin-top: 30px;
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Info = styled.View`
  margin-left: 15px;
`;
export const Type = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: bold;
`;

export const Valor = styled.Text`
  margin-top: 10px;
  color: #000;
  font-size: 15px;
`;
export const Qtd = styled.TextInput`
  color: #000;
  border-radius: 4px;
  width: 28px;
  padding: 6px;
  border: 1px solid #ddd;
`;
