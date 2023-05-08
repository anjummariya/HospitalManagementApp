import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function SignupPage({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignup() {
    console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate('Entry')} style={{paddingLeft:10, paddingTop:25,}}>
            <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.innercontent}>
      <View style={styles.content}>
      <Text style={styles.heading}>Sign Up</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#da3e56',
    justifyContent: 'center',
    
  },
  innercontent:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
