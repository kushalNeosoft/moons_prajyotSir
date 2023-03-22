import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import DateComponent from '../../Component/NiftyComponent/DateComponent';

const OptionChain = () => {

  const Data = [{date:15,month:'MAR',year:23},
  {date:7,month:'MAR',year:23},
  {date:11,month:'MAR',year:23},
  {date:19,month:'MAR',year:23},
  {date:6,month:'APR',year:23},
  {date:9,month:'APR',year:23},
  {date:11,month:'APR',year:23},
  {date:15,month:'APR',year:23},
  {date:17,month:'APR',year:23},
  {date:20,month:'APR',year:23},
]
  const renderItem = ({item}) => {
    console.log('date data',item)
    return (
     <DateComponent date={item.date} month={item.month} year={item.year}/>
    );
  };
  return (
    <View style={styles.container}>
      <View>
      <FlatList
      style={{marginLeft:18}}
          data={Data}
          renderItem={ renderItem}
          keyExtractor={(_, index) => `item-${index}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          
        />
       <Text style={styles.subTitile}>*10 Expiries available till dec'23</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:18,marginRight:20}}>
        <Text style={styles.headerText}>Calls</Text>
        <Text style={styles.headerText}>puts</Text>
       </View>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{

  },
  headerText:{
    color:'black',
    fontSize:16,
    fontWeight:'600'
  },
  subTitile:{
    fontSize:12,
    color:'grey',
    marginLeft:18,
    marginVertical:25

  }

})
export default OptionChain;
