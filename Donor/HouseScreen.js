
import React, { useState } from 'react';
import { Button, View,Text ,StyleSheet,Divider,ScrollView,Modal, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function House({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
    return (
      <ScrollView >
        {/*modal start */}
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
            <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('ViewProfile')}>
              <Text style={{fontWeight:600, fontSize:17}}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('PrivacyPolicy')}>
              <Text style={{fontWeight:600, fontSize:18}}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('bookedslots')}>
              <Text style={{fontWeight:600, fontSize:18}}>User History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Logout')}>
              <Text style={{fontWeight:600, fontSize:18}}>Logout</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </Modal>
    </View>
        {/*modal end */}
      <View>
        <View style={styles.header}></View>
        <View style={styles.HomeWrapper}>
            <Text style={styles.HomeTitle}>ID:18654792100</Text>
            <Text style={styles.HomeContent}>Some quick example text to build on the card title and make up the bulk of the card's content.</Text>
        </View>
      </View>
            
      </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal:'5%',
      paddingVertical:'8%',
      backgroundColor:'#da3e56',      
    },
    modalContainer: {
      flex: 1,
      backgroundColor: '#da3e56',
      paddingHorizontal: 16,
      paddingVertical: 24,
      width:'80%',
    },
    navigationContainer: {
      width: '100%',
      marginBottom: 24,
    },
    navigationButton: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      marginBottom: 12,
      borderRadius:10,
    },
    closeButton: {
      marginBottom: 16,
    },
    HomeWrapper:{
      backgroundColor:'#da3e56',
      height:150,
      margin:12,
      borderRadius:10,
      padding:20,
      marginBottom:'30%',
      
    },
    HomeTitle:{
      fontSize:20,
      color:'white',
      paddingBottom:10,
      fontWeight:800,
    },
    HomeContent:{
      color:'white',
      fontSize:18,
      padding:10,
    },
    
    
  })