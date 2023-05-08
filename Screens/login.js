import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function LoginPage({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log(`Login button pressed with username: ${username} and password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate('Entry')} style={{paddingLeft:10}}>
            <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.Title}>LOGIN</Text>
      <View>
        <Text style={{color:'white', textAlign:'center', fontSize:18, fontWeight:'700',}}>Please enter your Credentials:</Text>
        <TextInput placeholder="Username" onChangeText={setUsername} style={styles.Wrapper}/>
        <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry={true}  style={styles.Wrapper}/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Index")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding:'10%',
    paddingBottom:'20%',
    backgroundColor:'#da3e56',
  },
  Wrapper:{
    backgroundColor:'white',
    padding:10,
    margin:20,
    borderRadius:5,
  },
  
  Title:{
    fontSize:25,
    textAlign:'center',
    color:'white',
    paddingBottom:50,
    fontWeight:'800',
  },
  
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    width:'45%',
    marginTop:30,
    marginHorizontal:'25%',
   
    

  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
})
