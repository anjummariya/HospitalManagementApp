import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FormScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [age, setAge] = useState('');
  const [adhaarID, setAdhaarID] = useState('');

  const handleFormSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Donor Form</Text>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Date of Birth:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your date of birth"
          placeholderTextColor="#888"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />
        <Text style={styles.label}>Gender:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your gender"
          placeholderTextColor="#888"
          value={gender}
          onChangeText={setGender}
        />
        <Text style={styles.label}>Blood Group:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your blood group"
          placeholderTextColor="#888"
          value={bloodGroup}
          onChangeText={setBloodGroup}
        />
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          placeholderTextColor="#888"
          value={age}
          onChangeText={setAge}
        />
        <Text style={styles.label}>Adhaar ID:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Adhaar ID"
          placeholderTextColor="#888"
          value={adhaarID}
          onChangeText={setAdhaarID}
        />
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('DonorNotification')}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da3e56',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  title:{
    textAlign:'center',
    color:'#da3e56',
    fontWeight:800,
    fontSize:20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    fontSize: 16,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#da3e56',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormScreen;
