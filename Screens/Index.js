import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons,FontAwesome5 ,FontAwesome,Fontisto,MaterialCommunityIcons } from '@expo/vector-icons';


const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('DonorJoin')}>
          <Ionicons name="ios-heart" size={48} color="black" />
          <Text style={styles.boxText}>Donor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Recipient')}>
        <Fontisto name="blood-drop" size={48} color="black" />
          <Text style={styles.boxText}>Receipent</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Guide')}>
          <Ionicons name="ios-book" size={48} color="black" />
          <Text style={styles.boxText}>Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('BookBloodTest')}>
        <FontAwesome5 name="syringe" size={48} color="black" />
          <Text style={styles.boxText}>Book your Blood Test</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('DoctorJoin')}>
        <FontAwesome name="stethoscope" size={48} color="black" />
          <Text style={styles.boxText}>Book a doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('volunteer')}>
          <Ionicons name="ios-people" size={48} color="black" />
          <Text style={styles.boxText}>Volunteer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Dashboard')}>
        <MaterialCommunityIcons name="view-dashboard" size={48} color="black" />
            <Text style={styles.boxText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Logout')}>
          <MaterialCommunityIcons name="logout" size={48} color="black" />
            <Text style={styles.boxText}>Logout</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.exitButton} onPress={() => navigation.goBack()}>
        <Ionicons name="ios-close" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da3e56',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  row: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 16,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 8,
  },
  exitButton: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
});

export default HomePage;
