import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const RecipientFormScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [patientName, setPatientName] = useState('');
  const [relationWithPatient, setRelationWithPatient] = useState('');
  const [unitsRequired, setUnitsRequired] = useState('');
  const [adhaarID, setAdhaarID] = useState('');

  const handleFormSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <ScrollView>
      <View style={styles.container}> 
        <View style={styles.formContainer}>
          <TouchableOpacity  onPress={() => navigation.navigate('Recipient')}>
                <Ionicons name="arrow-back" size={30} color="#da3e56" />
          </TouchableOpacity>
          <Text style={{textAlign:'center', color:'#da3e56' , fontWeight:800, fontSize:20,}}>Recipient Form</Text>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            placeholderTextColor="#888"
            value={age}
            onChangeText={setAge}
          />
          <Text style={styles.label}>Gender:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your gender"
            placeholderTextColor="#888"
            value={gender}
            onChangeText={setGender}
          />
          <Text style={styles.label}>Patient Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter patient name"
            placeholderTextColor="#888"
            value={patientName}
            onChangeText={setPatientName}
          />
          <Text style={styles.label}>Relation with Patient:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your relation with patient"
            placeholderTextColor="#888"
            value={relationWithPatient}
            onChangeText={setRelationWithPatient}
          />
          <Text style={styles.label}>Units Required:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter units required"
            placeholderTextColor="#888"
            value={unitsRequired}
            onChangeText={setUnitsRequired}
          />
          <Text style={styles.label}>Adhaar ID:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Adhaar ID"
            placeholderTextColor="#888"
            value={adhaarID}
            onChangeText={setAdhaarID}
          />
          <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('House')}>
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
    padding:10,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop:'10%',
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
  },
  submitButtonText:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
  },
});
export default RecipientFormScreen;