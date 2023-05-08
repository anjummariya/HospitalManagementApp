import * as React from 'react';
import { Button, View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

export default function MyProfileScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity  onPress={() => navigation.navigate('House')} style={{paddingLeft:10, paddingTop:20}}>
                <Ionicons name="arrow-back" size={30} color="#da3e56" />
        </TouchableOpacity>
        <Text style={styles.title}>Your Profile</Text>
        <View style={styles.content}>
          <View style={styles.textLeft}><Text>Name</Text></View>
          <View style={styles.textcenter}><Text>:</Text></View>
          <View style={styles.textRight}><Text>sana</Text></View>
        </View>
        <View style={styles.content}>
          <View style={styles.textLeft}><Text>Age</Text></View>
          <View style={styles.textcenter}><Text>:</Text></View>
          <View style={styles.textRight}><Text>20</Text></View>
        </View>
        <View style={styles.content}>
          <View style={styles.textLeft}><Text>Designation</Text></View>
          <View style={styles.textcenter}><Text>:</Text></View>
          <View style={styles.textRight}><Text>Donor</Text></View>
        </View>
        <View style={styles.content}>
          <View style={styles.textLeft}><Text>Blood Type</Text></View>
          <View style={styles.textcenter}><Text>:</Text></View>
          <View style={styles.textRight}><Text>B+</Text></View>
        </View>
        <View style={styles.content}>
          <View style={styles.textLeft}><Text>Contact</Text></View>
          <View style={styles.textcenter}><Text>:</Text></View>
          <View style={styles.textRight}><Text>+91 7075858406</Text></View>
        </View>
        <View style={styles.content}>
          <View style={styles.textLeft}><Text>Email</Text></View>
          <View style={styles.textcenter}><Text>:</Text></View>
          <View style={styles.textRight}><Text>abc@gmail.com</Text></View>
        </View>
        <View style={styles.content}>
          <View style={styles.textLeft}>
          <TouchableOpacity style={{paddingLeft:10, paddingTop:20}}>
                <Ionicons name="code-download" size={32} color="#da3e56" />
        </TouchableOpacity>
          </View>
          <View style={styles.textcenter}>
          <TouchableOpacity style={{paddingLeft:10, paddingTop:20}}>
                <Ionicons name="arrow-redo" size={28} color="#da3e56" />
        </TouchableOpacity>
          </View>
          <View style={styles.textRight}>
          <TouchableOpacity style={{paddingLeft:10, paddingTop:20}}>
                <Ionicons name="create-outline" size={33} color="#da3e56" />
        </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingVertical:'20%',
      paddingHorizontal:5,
    },
    title:{
      color:'#da3e56',
      fontSize:25,
      fontWeight:500,
      paddingBottom:20,
      textAlign:'center',
    },
    content:{
      flex:0,
      paddingBottom:10,
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:'20%',
     
    },
    textLeft:{
      width:'30%',
      textAlign:'left',
    },
    textcenter:{
      width:'20%',
    },
    textRight:{
      width:'30%',
    }
  });