import * as React from 'react';
import { Button, View,Text, ScrollView,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DonorHistory from './DonorHistory';
import HouseScreen from './HouseScreen';
import DonorGuide from './DonorGuide';
import Donor from './Donor';
import AboutUsScreen from '../components/AboutUsScreen';
import { Ionicons,FontAwesome5 ,FontAwesome,Fontisto,MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export default function HomeScreen({ navigation }) {
    return (
      
      <ScrollView contentContainerStyle={{ flex: 1,  
      flexDirection: 'column', justifyContent: 'space-between' }}>
         
        {/*footer */}
         
        <Tab.Navigator style={{bottom:0,}}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'House') {
                  iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                }else if (route.name === 'Donor') {
                  iconName = focused
                    ? 'water'
                    : 'water-outline';
                }else if (route.name === 'History') {
                  iconName = focused
                    ? 'fitness'
                    : 'fitness-outline';
                }else if (route.name === 'guide') {
                  iconName = focused
                    ? 'ios-book'
                    : 'ios-book-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              
            }}
          >
            <Tab.Screen name="House" component={HouseScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Donor" component={Donor} options={{headerShown: false}}/>
            <Tab.Screen name="History" component={DonorHistory}options={{headerShown: false}} />
            <Tab.Screen name="guide" component={DonorGuide} options={{headerShown: false}}/>
            
          
          </Tab.Navigator>
          
          
      {/*footer end */}
      
      
      </ScrollView>
      
      
    );
  }
  const styles = StyleSheet.create({
    
    
    
  })