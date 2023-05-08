import * as React from 'react';
import { Button, View,Text, ScrollView,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RecipientHistory from './RecipientHistory';
import HouseScreen from './HouseScreen';
import RecipientGuide from './RecipientGuide';
import Recipient from './Recipient';
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
                }else if (route.name === 'Recipient') {
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
            <Tab.Screen name="Recipient" component={Recipient} options={{headerShown: false}}/>
            <Tab.Screen name="History" component={RecipientHistory}options={{headerShown: false}} />
            <Tab.Screen name="guide" component={RecipientGuide} options={{headerShown: false}}/>
            
          
          </Tab.Navigator>
          
          
      {/*footer end */}
      
      
      </ScrollView>
      
      
    );
  }
  const styles = StyleSheet.create({
    
    
    
  })