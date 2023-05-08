import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Ionicons,FontAwesome5 ,FontAwesome,Fontisto,MaterialCommunityIcons } from '@expo/vector-icons';

const bloodGroups = [
  { group: 'A+', donors: 20, recipients: 30 },
  { group: 'B+', donors: 25, recipients: 35 },
  { group: 'AB+', donors: 15, recipients: 25 },
  { group: 'O+', donors: 30, recipients: 40 },
  { group: 'A-', donors: 10, recipients: 20 },
  { group: 'B-', donors: 5, recipients: 15 },
  { group: 'AB-', donors: 3, recipients: 8 },
  { group: 'O-', donors: 8, recipients: 18 },
];

const Dashboard = ({navigation}) => {
  const totalDonors = bloodGroups.reduce((total, group) => total + group.donors, 0);
  const totalRecipients = bloodGroups.reduce((total, group) => total + group.recipients, 0);

  return (
    <View style={styles.dashboard}>
	<TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Index')}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      <View style={styles.totalContainer}>
        <Text style={styles.totalTitle}>Total Donors:</Text>
        <Text style={styles.totalValue}>{totalDonors}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalTitle}>Total Recipients:</Text>
        <Text style={styles.totalValue}>{totalRecipients}</Text>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Blood Group</Text>
          <Text style={styles.headerText}>Donors Count</Text>
          <Text style={styles.headerText}>Recipients Count</Text>
        </View>
        {bloodGroups.map((group, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{group.group}</Text>
            <Text style={styles.cell}>{group.donors}</Text>
            <Text style={styles.cell}>{group.recipients}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: '#da3e56',
    paddingTop:50,
    padding: 30,
    
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
   
  },
  totalTitle: {
    fontWeight: 'bold',
    color: '#ffff',
    fontSize: 20,
  },
  totalValue: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 10,
    padding:20,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    padding:10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
  },
});

export default Dashboard;
