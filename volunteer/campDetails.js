import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , ScrollView} from 'react-native';
import { Ionicons,FontAwesome5 ,FontAwesome,Fontisto,MaterialCommunityIcons } from '@expo/vector-icons';


const BloodDonationCampCard = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.cardContainer}>
      <TouchableOpacity  onPress={() => navigation.navigate('campsHome')}>
            <Ionicons name="arrow-back" size={30} color="#da3e56" />
      </TouchableOpacity>
        <Text style={styles.title}>Be a Donor, Save a Life </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.date}>June 1st, 2023</Text>
          <Text style={styles.time}>2:00 pM - 7:00 PM</Text>
          <Text style={styles.location}> 5th Avenue, Los Angeles - CA</Text>
          <Text style={styles.description}>Join us for our upcoming blood donation camp! All donors will receive a free t-shirt and a chance to win a gift card.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterForCamp')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#da3e56',
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    paddingVertical:30,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#da3e56',
    textAlign: 'center',
    marginBottom: 10,
  },
  detailsContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    padding:10,
    paddingLeft:20,

  },
  date: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000',
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000',
  },
  location: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },
  button: {
    backgroundColor: '#da3e56',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BloodDonationCampCard;
