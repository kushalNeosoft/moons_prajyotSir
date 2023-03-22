import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Overview = () => {
  return (
    <View style={styles.container}>
      
<Text style={styles.heading}>Key Stats</Text>
<View style={{flexDirection:'row',justifyContent:'space-between',marginRight:12}}>
  <View>
  <Text style={styles.subHead}>
    Open
  </Text>
  <Text style={{color:'black',marginLeft:20}}>
    39061.90
  </Text>
  </View>

  <View>
  <Text style={styles.subHead}>
    Close
  </Text>
  <Text style={{color:'black',marginLeft:20}}>
    39061.90
  </Text>
  </View>
  
  <View>
  <Text style={styles.subHead}>
    Daily Price Range
  </Text>
  <Text style={{color:'black',marginLeft:20}}>
    39061.90
  </Text>
  </View>

</View>
<View style={styles.border}></View>
<Text style={styles.rangeHeading}>Today (Low - High)</Text>
      </View>
    
  );
};
const styles = StyleSheet.create({
  container:{

  },
  heading:{
    color:'black',
    fontWeight:'500',
    fontSize:23,
    marginLeft:20,
    marginVertical:20
  },
  subHead:{
  color:'black',
  fontWeight:'600',
  fontSize:15,
  marginBottom:8,
  marginLeft:20,
  },
  border:{
    width:'90%',
    borderWidth:0.5,
    borderColor:'grey',
    alignSelf:'center',
    marginVertical:28
  },
  rangeHeading:{
    color:'black',
    fontWeight:'600',
    marginLeft:20,
    fontSize:15
  }
})
export default Overview;
