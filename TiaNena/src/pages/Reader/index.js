import React, { useState, useEffect } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RNCamera } from 'react-native-camera';
import { Text, Modal, Button } from 'react-native';
import Background from '../../componentes/Background';
import { Container, CenterModal, Div, DivPayed, DivNotPayed } from './styles';
import api from '../../services/api';

export default function Reader() {
  const [modalVisible, setModalVisible] = useState(false);
  const [camaroteMenQtd, setCamaroteMenQtd] = useState(0);
  const [camaroteWomanQtd, setCamaroteWomanQtd] = useState(0);
  const [pistaMenQtd, setPistaMenQtd] = useState(0);
  const [pistaWomanQtd, setPistaWomanQtd] = useState(0);
  const [isPayed, setIsPayed] = useState(false);

  async function onSuccess(e) {
    const dados = JSON.parse(e.data);
    const { userId, eventId } = dados;
    const response = await api.get(
      `/orders/users/${parseInt(userId, 0)}/events/${parseInt(eventId, 0)}`
    );
    setIsPayed(response.data.payed);
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
  }

  return (
    <Background>
      <Container>
        <QRCodeScanner
          onRead={onSuccess}
          showMarker
          checkAndroid6Permissions
          flashMode={RNCamera.Constants.FlashMode.torch}
          reactivate
        />

        <CenterModal>
          <Modal
            animationType="slide"
            statusBarTranslucent
            visible={modalVisible}
          >
            {isPayed ? (
              <DivPayed>
                <Text>Ingresso pago</Text>
              </DivPayed>
            ) : (
              <DivNotPayed>
                <Text>Ingresso não pago</Text>
              </DivNotPayed>
            )}
            <Div color={isPayed}>
              <Button title="Close" onPress={closeModal} />
            </Div>
          </Modal>
        </CenterModal>
      </Container>
    </Background>
  );
}
Reader.navigationOptions = {
  tabBarLabel: 'QRCode',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="camera-alt" size={20} color={tintColor} />
  ),
};
