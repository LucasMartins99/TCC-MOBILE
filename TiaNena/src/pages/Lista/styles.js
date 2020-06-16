import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #ffff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;
export const List = styled.FlatList.attrs({
  contentContainerStyle: { padding: 30 },
})``;
export const Meses = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 25px;
`;
export const Header = styled.View`
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
