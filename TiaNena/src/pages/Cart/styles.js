import styled from 'styled-components/native';
import Button from '../../componentes/Button';
export const Container = styled.SafeAreaView`
    flex: 1;
`;
export const Title = styled.Text`
    font-size: 20px;
    color: #ffff;
    font-weight: bold;
    align-self: center;
    margin-top: 50px;
`;
export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 30 },
})``;
export const Finalizar = styled(Button)`
    margin: 12px;
    border-radius: 4px;
    padding: 10px;
`;
export const Total = styled.View`
    display: flex;
    align-items: baseline;
    margin-right: 14px;
`;
export const Text = styled.Text`
    font-size: 25px;
    color: rgba(000, 000, 000, 0.4);
`;
export const Valor = styled.Text`
    font-size: 25px;
    color: #000;
`;
export const Footer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 2px;
`;
