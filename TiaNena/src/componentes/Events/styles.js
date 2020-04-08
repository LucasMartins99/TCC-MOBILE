import styled from 'styled-components/native';
import Button from '../Button';
export const Container = styled.View`
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Avatar = styled.Image`
    width: 250px;
    height: 250px;
    border-radius: 10px;
`;
export const Info = styled.View`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #000;
`;

export const Date = styled.Text`
    margin-top: 5px;
    color: #000;
    font-size: 18px;
    font-weight: bold;
`;

export const Time = styled.Text`
    margin-top: 5px;
    color: #000;
    font-size: 18px;
    font-weight: bold;
`;
export const Comprar = styled(Button)`
    margin: 12px;
    border-radius: 4px;
    padding: 10px;
`;

export const Lista = styled(Button)`
    margin: 12px;
    background: #000;
    border-radius: 4px;
    padding: 14px;
`;
export const Div = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
