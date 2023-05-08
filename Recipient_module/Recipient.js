import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const JoinUsPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate('Index')} style={styles.box}>
            <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.content}>
      <Text style={styles.message}>Required Blood?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('RecipientForm')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('House')}>
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
  },
  content:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  box:{
    paddingLeft:'5%',
    paddingTop:'5%',
  },
  message: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
     },
  skipButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default JoinUsPage;
