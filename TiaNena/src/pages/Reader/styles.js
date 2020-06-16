import styled from 'styled-components/native';
import Button from '../../componentes/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Div = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => (props.color ? 'green' : 'red')};
`;
export const Fechar = styled(Button)`
  margin-top: 5px;
`;
export const CenterModal = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: center;
`;
export const DivPayed = styled.SafeAreaView`
  flex: 1;
  background: green;
  justify-content: center;
  align-items: center;
`;

export const DivNotPayed = styled.SafeAreaView`
  flex: 1;
  background: red;
  justify-content: center;
  align-items: center;
`;
