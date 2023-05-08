import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Ionicons} from'@expo/vector-icons';

export default function DoctorSignUpForm({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [phone, setPhone] = useState('');
  const [workingAt, setWorkingAt] = useState('');
  const [experience, setExperience] = useState('');

  const handleSignUp = () => {
    // Handle doctor sign up logic here
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate('DoctorJoin')} style={styles.box}>
            <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Doctor Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="grey"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="grey"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Specialty"
          placeholderTextColor="grey"
          value={specialty}
          onChangeText={setSpecialty}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Working At ?"
          placeholderTextColor="grey"
          value={workingAt}
          onChangeText={setWorkingAt}
        />
        <TextInput
          style={styles.input}
          placeholder="Experience (in years)"
          placeholderTextColor="grey"
          value={experience}
          onChangeText={setExperience}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorHome')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da3e56',
    padding:'10%',
  },
  content:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#da3e56',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius:5,
    padding:15,
    paddingHorizontal:25,
  },
});
