import { NavigationContainer,   createNavigationContainerRef,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Home from './Screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PrivacyPolicy from './components/PrivacyPolicy';
import LoginPage from './Screens/login';
import House from './Donor/HouseScreen';
import SignUp from './Screens/signup';
import Profile from './Screens/profile';
import MyProfile from './components/MyProfile';
import Index from './Screens/Index';
import Donor from './Donor/Donor';
import DonorForm from './Donor/DonorForm';
import DonorJoin from './Donor/DonorJoin';
import bookedslots from './Donor/bookedslots';
import Recipient from './Recipient_module/Recipient';
import RecipientNotification from './Recipient_module/RecipientNotification';
import RecipientForm from './Recipient_module/RecipientForm';
import Logout from './Screens/logout';
import Dashboard from './dashboard/dashboard';
import Guide from './Screens/Guide';
import volunteer from './volunteer/volunteer';
import volunteerSignup from './volunteer/volunteerSignup';
import campsHome from './volunteer/campsHome';
import campDetails from './volunteer/campDetails';
import RegisterForCamp from './volunteer/RegisterForCamp';
import DoctorJoin from './Doctor/DoctorJoin';
import DoctorSignUp from './Doctor/DoctorSignUp';
import DoctorHome from './Doctor/DoctorHome';
import DoctorProfile from './Doctor/DoctorProfile';
import BottomTabNavigator from './components/BottomtabNavigator';
import DonorNotification from './Donor/DonorNotification';


const Tab = createBottomTabNavigator();
const navigationRef = createNavigationContainerRef();

export default function LoginSignupPage() {
  const [routeName,setRouteName] = useState("")
  // const navigation = useNavigation()
  return (
    < >
      {/* <LoginScreen /> */}
      {/* <HomeScreen /> */}
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          setRouteName(navigationRef.getCurrentRoute().name);
        }}
        onStateChange={async () => {
          const previousRouteName = routeName;
          const currentRouteName = navigationRef.getCurrentRoute().name;
          // console.log('route', currentRouteName);
          setRouteName(currentRouteName);
        }}
      >
        <Tab.Navigator
             tabBar={props => (
              <BottomTabNavigator {...props} routeName={routeName} />
            )}
            screenOptions={{
              headerShown: false,
              tabBarHideOnKeyboard: true,
            }}
            initialRouteName='Entry'
          >
            <Tab.Screen name="Entry" component={Home}/>
            <Tab.Screen name="Login" component={LoginPage} />
            <Tab.Screen name="House" component={House} />
            <Tab.Screen name="SignUp" component={SignUp}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="ViewProfile" component={MyProfile} />
            <Tab.Screen name="Index" component={Index}/>
            <Tab.Screen name="Donor" component={Donor}/>
            <Tab.Screen name="DonorForm" component={DonorForm} />
            <Tab.Screen name="DonorJoin" component={DonorJoin} />
            <Tab.Screen name="DonorNotification" component={DonorNotification} />
            <Tab.Screen name="bookedslots" component={bookedslots} />
            <Tab.Screen name="Recipient" component={Recipient}/>
            <Tab.Screen name="RecipientNotification" component={RecipientNotification} />            
            <Tab.Screen name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="DoctorJoin" component={DoctorJoin}/>
            <Tab.Screen name="DoctorSignUp" component={DoctorSignUp}/>
            <Tab.Screen name="DoctorHome" component={DoctorHome}/>
            <Tab.Screen name="DoctorProfile" component={DoctorProfile}/>
            <Tab.Screen name="Guide" component={Guide}/>
            <Tab.Screen name="Logout" component={Logout}/>
            <Tab.Screen name="volunteer" component={volunteer}/>
            <Tab.Screen name="volunteerSignup" component={volunteerSignup}/>
            <Tab.Screen name="campsHome" component={campsHome}/>
            <Tab.Screen name="campDetails" component={campDetails}/>
            <Tab.Screen name="RegisterForCamp" component={RegisterForCamp} />
            <Tab.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Tab.Screen name="RecipientForm" component={RecipientForm} />


          </Tab.Navigator>
          </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#da3e56',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color:'#fff',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '65%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:15,
  },
});