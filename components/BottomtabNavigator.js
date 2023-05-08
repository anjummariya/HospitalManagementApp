import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function BottomTabNavigator({navigation, routeName}) {
    let ScreenName = routeName
  // const navigation = useNavigation()
  return (
    <View style={[styles.container,{display:ScreenName =="Entry" || ScreenName =="SignUp" || ScreenName=="Login" || ScreenName =="Profile" || ScreenName == "Logout" || ScreenName == "Index"
      || ScreenName == "volunteer" ||ScreenName == "volunteerSignup" || ScreenName == "" || ScreenName=="Dashboard" ? 'none' :'flex'}]}>
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainerInner} onPress={()=>navigation.navigate("House")}>
                {ScreenName == "House" ? (<Image source={require("../assets/icons/home-active.png")} style={{width:30,height:30}}/>) : (
                    <Image source={require("../assets/icons/home.png")} style={{width:30,height:30}}/>
                )}
            </TouchableOpacity >
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainerInner} onPress={()=>navigation.navigate("DonorNotification")}>
                {ScreenName == "Donor" ? (
                <Image source={require("../assets/icons/heart-active.png")} style={{width:30,height:30}}/>

                ) : (
                <Image source={require("../assets/icons/heart.png")} style={{width:30,height:30}}/>

                )}
            </TouchableOpacity >
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainerInner} onPress={()=>navigation.navigate("Recipient")}>
                {ScreenName == "Recipient" ? (
                    <Image source={require("../assets/icons/cardiogram-active.png")} style={{width:30,height:30}} />
                ) :(
                    <Image source={require("../assets/icons/cardiogram.png")} style={{width:30,height:30}}/>
                )}
                
            </TouchableOpacity >
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainerInner} onPress={()=>navigation.navigate("Guide")}>
                {ScreenName == "guide"? (<Image source={require("../assets/icons/guide-active.png")} style={{width:30,height:30}}/>)
                : (<Image source={require("../assets/icons/guide.png")} style={{width:30,height:30}}/>)}
            </TouchableOpacity >
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"8%",
    // backgroundColor:"red",
    bottom:0,
    alignItems:'center',
    justifyContent:'center'
  },
  wrapper:{
    width:"100%",
    height:"10%",
    backgroundColor:"white",
    position:"absolute",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  iconContainer:{
    width:"24%",
    height:"100%",
    backgroundColor:"white"
  },
  iconContainer:{
    width:"24%",
    height:"100%",
    backgroundColor:"white"
  },
  iconContainerInner:{
    width:"100%",
    height:"100%",
    alignItems:'center',
    justifyContent:'center'
  }
});