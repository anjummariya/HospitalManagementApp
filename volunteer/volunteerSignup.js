import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const FormPage = ({navigation}) => {
  const [address, setAddress] = useState('');
  const [qualification, setQualification] = useState('');
  const [adhaarId, setAdhaarId] = useState('');

  const handleSubmit = () => {
    // handle form submission logic
  };

  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('volunteer')}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      <View><Text style={styles.title}>Volunteer SignUp</Text></View>
      <View><Text style={styles.heading}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
        placeholderTextColor="#000"
      />
      <Text style={styles.heading}>Qualification</Text>
      <TextInput
        style={styles.input}
        value={qualification}
        onChangeText={setQualification}
        placeholder="Enter your qualification"
        placeholderTextColor="#000"
      />
      <Text style={styles.heading}>Adhaar ID</Text>
      <TextInput
        style={styles.input}
        value={adhaarId}
        onChangeText={setAdhaarId}
        placeholder="Enter your Adhaar ID"
        placeholderTextColor="#000"
      />
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('campsHome')}}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da3e56',
    padding: 20,
    paddingTop:'25%',
  },
  title:{
    color:'white',
    fontSize:30,
    fontWeight:600,
    textAlign:'center',
    marginBottom:25,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal:'25%',
    marginTop:'10%',
    borderRadius: 10,
    width:'50%',
    alignItems:'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default FormPage;
