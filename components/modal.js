import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const ModalWithVerticalNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Icon name="menu" size={28} color="#fff"/>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
        <Icon name="x" size={28} color="#000" />
          </TouchableOpacity>
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.navigationButton}>
              <Text>Navigation Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton}>
              <Text>Navigation Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton}>
              <Text>Navigation Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton}>
              <Text>Navigation Option 4</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:'5%',
    paddingVertical:'8%',
    backgroundColor:'#da3e56',
    
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  navigationContainer: {
    width: '100%',
    marginBottom: 24,
  },
  navigationButton: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    marginBottom: 12,
  },
  closeButton: {
    marginBottom: 16,
  },
});

export default ModalWithVerticalNavigation;
