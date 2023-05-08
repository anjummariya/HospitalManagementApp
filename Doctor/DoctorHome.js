import React from 'react';
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const doctors = [
  { name: 'Dr. John Doe', speciality: 'Cardiologist', experience: '10 years' },
  { name: 'Dr. Jane Smith', speciality: 'Pediatrician', experience: '8 years' },
  { name: 'Dr. Mike Johnson', speciality: 'Dermatologist', experience: '12 years' },
  { name: 'Dr. Sarah Lee', speciality: 'Gynecologist', experience: '6 years' },
  { name: 'Dr. David Kim', speciality: 'Orthopedic Surgeon', experience: '15 years' },
];
const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate('Index')} style={{paddingLeft:10}}>
            <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.content}>
      <Text style={styles.heading}>Doctors List</Text>
      <ScrollView contentContainerStyle={styles.cardContainer} showsVerticalScrollIndicator={false}>
        {doctors.map((doctor, index) => (
          <Card key={index} name={doctor.name} speciality={doctor.speciality} experience={doctor.experience} navigation={navigation} />
        ))}
      </ScrollView>
      </View>
    </View>
  );
};
const Card = ({ name, speciality, experience, navigation}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Speciality: {speciality}</Text>
      <Text style={styles.text}>Experience: {experience}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorProfile')}>
        <Text style={styles.buttonText} >View Details</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#da3e56',
    paddingTop:'10%',
  },
  content:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal:60,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#da3e56',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color:'black',
  },
  button: {
    backgroundColor: '#da3e56',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
