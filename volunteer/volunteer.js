import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const RegisterVolunteerPage = ({ navigation }) => {
  const handleSignUp = () => {
    // handle sign up logic
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Index')}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      <View style={styles.content}>
      <Text style={styles.title}>Register as a Volunteer?</Text>
      <View style={styles.box}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('volunteerSignup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('campsHome')}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da3e56',
   paddingTop:'10%',
   paddingLeft:'5%',
    
  },
  content:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  box:{
    flexDirection:'row',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default RegisterVolunteerPage;
