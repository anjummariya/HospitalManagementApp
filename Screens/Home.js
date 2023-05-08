import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native';
import SignUp from './signup';

export default function LoginSignupPage({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.jpg')} />
      <Text style={styles.title}>Welcome to E-Blood Services</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#da3e56',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color:'#fff',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '65%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:15,
  },
});
