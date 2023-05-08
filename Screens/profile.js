import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
const handleSubmit = () => {
  console.log('Phone Number:', phoneNumber);
  console.log('Age:', age);
  console.log('City:', city);
  console.log('State:', state);
};
function ProfilePage({navigation}) {
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');


  function handlePhoneChange(text) {
    setPhone(text);
  }

  function handleAgeChange(text) {
    setAge(text);
  }

  function handleCityChange(text) {
    setCity(text);
  }

  function handleStateChange(text) {
    setState(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Profile</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={handlePhoneChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          value={age}
          onChangeText={handleAgeChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          value={city}
          onChangeText={handleCityChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>State</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your state"
          value={state}
          onChangeText={handleStateChange}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("Index")}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da3e56',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '78%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfilePage;
