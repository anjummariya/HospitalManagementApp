import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity , Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function FormPage({navigation}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <View style={styles.container}> 
        <TouchableOpacity  onPress={() => navigation.navigate('DonorNotification')} style={{paddingLeft:16, paddingTop:20,}}>
            <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      <View style={styles.content}>
        <Text style={{color:'white', fontWeight:800, fontSize:20}}>Book Your Slot</Text>
      <TextInput
        style={styles.input}
        placeholder="Date"
        placeholderTextColor="#000"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        placeholderTextColor="#000"
        value={time}
        onChangeText={setTime}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("bookedslots")}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#da3e56',
  },
  content:{
    flex: 1,
    backgroundColor: '#da3e56',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
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
