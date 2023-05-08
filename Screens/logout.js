import React, { useState } from 'react';
import { View, Text, Button,StyleSheet, TouchableOpacity }  from 'react-native';

export default function Logout({navigation}) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    // Perform any necessary cleanup or API calls here
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      
        <Text style={styles.note} >You are logged out.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#da3e56',
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  note:{
    fontSize:24,
    color:'white',
    fontWeight:'bold',
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
 
});
