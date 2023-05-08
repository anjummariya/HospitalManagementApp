import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons,FontAwesome5 ,FontAwesome,Fontisto,MaterialCommunityIcons } from '@expo/vector-icons';


const camps = [
  { name: 'Blood donors United', count: 50 },
  { name: 'Blood warriors for a cause', count: 30 },
  { name: 'Blood for Life', count: 70 },
  { name: 'Be a Donor, Save a Life', count: 40 },
];

const CampsScreen = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Index')}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
       <Text style={styles.heading}>Ongoing Blood Camps</Text>
      {camps.map((camp, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{camp.name}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>{`${camp.count} participants`}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('campDetails')}}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da3e56',
    padding: 10,
    paddingTop:'15%',
    paddingBottom:'30%',
  },
  heading:{
    color:'#fff',
    paddingBottom:30,
    fontSize:25,
    fontWeight:'600',
    textAlign:'center',

  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:10,
  },
  info: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#da3e56',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CampsScreen;
