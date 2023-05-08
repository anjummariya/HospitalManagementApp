import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const LabCard = ({ name, address, openHours, yearsInBusiness, contactNo, website }) => {
  const handlePhonePress = () => {
    Linking.openURL(`tel:${contactNo}`);
  };

  const handleWebsitePress = () => {
    Linking.openURL(`https://${website}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Address:</Text> {address}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Open Hours:</Text> {openHours}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Years in Business:</Text> {yearsInBusiness}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Contact No.:</Text>{' '}
        <Text style={styles.link} onPress={handlePhonePress}>
          {contactNo}
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Website:</Text>{' '}
        <Text style={styles.link} onPress={handleWebsitePress}>
          {website}
        </Text>
      </Text>
      <Text style={styles.note}>
        Contact on the above information to book an appointment.
      </Text>
    </View>
  );
};

const App = () => {
  const lab = {
    name: 'ABC Diagnostic Center',
    address: '1234 Main Street, Anytown USA',
    openHours: 'Mon-Fri: 8am-6pm, Sat: 9am-4pm',
    yearsInBusiness: '10 years',
    contactNo: '+1 123-456-7890',
    website: 'www.abcdiagnostics.com',
  };

  return (
    <View style={styles.container}>
      <LabCard {...lab} />
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
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
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
    textAlign: 'center', // added
  },
  text: {
    fontSize: 17,
    marginBottom: 10,
    color: '#000',
    marginLeft: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  note: {
    fontSize: 15,
    marginTop: 20,
    color: '#555',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default App;
