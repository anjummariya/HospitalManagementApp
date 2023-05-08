import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const DoctorCard = ({ name, speciality, experience,mail, phone, days,note }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Speciality: <Text style={styles.bold}>{speciality}</Text></Text>
      <Text style={styles.text}>Experience: <Text style={styles.bold}>{experience}</Text></Text>
      <Text style={styles.text}>Email: <Text style={styles.bold} >{mail}</Text></Text>
      <Text style={styles.text}>Phone: <Text style={styles.bold}>{phone}</Text></Text>
      <Text style={styles.text}>Availability Days: <Text style={styles.bold}>{days}</Text></Text>
      <Text style={styles.text}>Note: <Text style={styles.bold} >{note}</Text></Text>
      
    </View>
  );
};

const App = ({navigation}) => {
  const doctor = {
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    experience: '10 years',
    mail: ' johndoe@gmail.com',
    phone: '+1 123 456 7890',
    days: 'Monday - Friday',
    note:'Book an appointment using the contact information above.'
  };

  return (
    <View style={styles.container}>
     <TouchableOpacity  onPress={() => navigation.navigate('DoctorHome')} style={styles.box}>
            <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.content}>
        <DoctorCard {...doctor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da3e56',
    justifyContent: 'center',
  },
  content:{
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    paddingLeft:20,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    paddingVertical:50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#da3e56',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    marginBottom: 5,
    color: '#000',
  
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default App;
