import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const labData = [
  { id: 1, name: 'Apollo Diagnostics', rating: 4.5 },
  { id: 2, name: 'Vijaya Diagnostics Centre', rating: 4.2 },
  { id: 3, name: 'Peoples Diagnostic Center', rating: 3.9 },
  { id: 4, name: 'Zeal Biologicals', rating: 4.1 },
  { id: 5, name: 'Mptri Microbiology Testing Laboratory', rating: 4.6 },
  { id: 6, name: 'Max Path Labs', rating: 4.3 },
  { id: 7, name: 'Global Diagnostics', rating: 4.0 }
];

const LabCard = ({ lab, navigation }) => (
  <View style={styles.card}>
    <View style={styles.cardDetails}>
      <Text style={styles.cardText}>{lab.name}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{lab.rating}</Text>
        <Text style={styles.starIcon}>★</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>View Details</Text>
    </TouchableOpacity>
  </View>
);

const Laboratories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate('Index')} style={styles.box}>
            <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Laboratories</Text>
        <ScrollView style={styles.cardContainer}>
          {labData.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </ScrollView>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    paddingTop:15,
    paddingLeft:10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    alignSelf: 'center',
    marginTop:'10%',
  
  },
  cardContainer: {
    width: '100%',
    alignSelf: 'center',
    marginLeft:40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 100,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardDetails: {
    flex: 1,
    marginRight: 10,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    color: '#808080',
    marginRight: 5,
  },
  starIcon: {
    fontSize: 20,
    color: '#808080',
  },
  button: {
    backgroundColor: '#da3e56',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Laboratories;
