import * as React from 'react';
import { Button, View,Text ,StyleSheet,Divider,ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function House({ navigation }) {
    return (
      <ScrollView >
        <View style={styles.HomeWrapper}>
            <Text style={styles.HomeTitle}>ID:18654792100</Text>
            <Text style={styles.HomeContent}>Some quick example text to build on the card title and make up the bulk of the card's content.</Text>
        </View>
            
      </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    HomeWrapper:{
      backgroundColor:'#da3e56',
      height:150,
      margin:12,
      borderRadius:10,
      padding:20,
      marginVertical:20,
      
    },
    HomeTitle:{
      fontSize:20,
      color:'white',
      paddingBottom:10,
      fontWeight:800,
    },
    HomeContent:{
      color:'white',
      fontSize:18,
      padding:10,
    },
    
    
  })