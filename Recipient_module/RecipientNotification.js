import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Divider } from 'react-native-paper';

export default function RecipientNotification() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.Title}>Notifications</Text>
      <Text style={styles.Slots}>Check your slots here</Text>
        <View style={styles.HomeWrapper}>
            <Text style={styles.HomeTitle}>Alert!!</Text>
            <Divider />
            <Text style={styles.HomeContent}>You are requested to donate blood</Text>
            <View style={styles.contain}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Decline</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.bottomText}> ---- 13 days ago</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:50,
    paddingHorizontal:20,
  },
  Title:{
    textAlign:'center',
    color:'#da3e56',
    fontWeight:800,
    fontSize:30,
  },
  Slots:{
    color:'skyblue',
    fontSize:18,
    paddingLeft:20,
    paddingTop:30,
  },
  HomeWrapper:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,.125)',
    margin:12,
    borderRadius:10,
    marginVertical:20,
    
  },
  HomeTitle:{
    backgroundColor:'rgba(0,0,0,.03)',
    fontSize:20,
    paddingBottom:10,
    fontWeight:800,
    padding:20,
  },
  HomeContent:{
    padding:20,
    fontSize:18,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: 'pink',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '48%', // Adjust this to change the width of the buttons
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomText:{
    padding:20,
    fontSize:18,
    color:'grey',
  },
});
