import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const Table = ({navigation}) => {
  const data = [
    {  Task:'Donate', Date:'1/2/23', Time:'10:00am' },
    {  Task:'Recieve', Date:'1/2/23', Time:'10:00am' },
    {  Task:'Recieve', Date:'1/2/23', Time:'10:00am' },
    {  Task:'Donate', Date:'1/2/23', Time:'10:00am' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <TouchableOpacity  onPress={() => navigation.navigate('DonorNotification')} style={{paddingLeft:10}}>
            <Ionicons name="arrow-back" size={30} color="#da3e56" />
      </TouchableOpacity>
      <Text style={styles.Title}>Booked Slots</Text>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.heading}>Sno</Text>
          <Text style={styles.heading}>Task</Text>
          <Text style={styles.heading}>Date</Text>
          <Text style={styles.heading}>Time</Text>
        </View>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.row,
              index % 2 === 0 ? styles.evenRow : styles.oddRow,
            ]}
          >
            <Text style={styles.cell}>{index+1}</Text>
            <Text style={styles.cell}>{item.Task}</Text>
            <Text style={styles.cell}>{item.Date}</Text>
            <Text style={styles.cell}>{item.Time}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    paddingVertical:50,
    paddingHorizontal:20,
  },
  Title:{
    textAlign:'center',
    color:'#da3e56',
    fontWeight:800,
    fontSize:30,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderTopWidth:1,
    borderTopColor:'grey',
    marginTop:25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginLeft: -1, // to remove left border
    marginRight: -1, // to remove right border
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    width: '25%',
    paddingVertical: 10,
    
  },
  cell: {
    color: 'black',
    fontSize: 16,
    width: '25%',
    paddingVertical: 10,
  },
  evenRow: {
    backgroundColor: 'rgba(0,0,0,.05)',
  },
  oddRow: {
    backgroundColor: 'white',
  },
});

export default Table;
