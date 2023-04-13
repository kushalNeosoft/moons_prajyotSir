import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import ConstituentsList from '../../Component/NiftyComponent/constituentsList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Holdings = ({setScrollValue}) => {
  const [stockData, setStockData] = useState([]);
  const [handleRefresh, setHandleRefresh] = useState(false);
  useEffect(() => {
    pushStockData();
  }, []);
  const pushStockData = () => {
    setHandleRefresh(true);
    let StockArraydata = [];
    for (let i = 0; i < 5; i++) {
      StockArraydata.push({
        companyName: 'AXISBANK',
        title: 'vol.Gainer',
        index: 'NSE',
        value: 1035.78 + Math.floor(Math.random() * 999),
        changes: '+3.65(+0.44%)',
      });
    }
    setStockData(StockArraydata);

    setHandleRefresh(false);
  };
  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 10}}>
        <ConstituentsList
          stockName={item.companyName}
          stockTtile={item.title}
          price={item.value}
          changes={item.changes}
        />
        <View
          style={{
            borderWidth: 0.2,
            width: '100%',
            backgroundColor: '#EBECF0',
            marginTop: 23,
          }}></View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 50,
        }}>
        <Text style={{color: 'black', marginLeft: 15, fontWeight: '400'}}>
          5 Scrips
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="search-sharp"
              size={25}
              color="black"
              style={{marginRight: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="options-outline"
              size={25}
              color="black"
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.1,
          width: '90%',
          backgroundColor: '#EBECF0',
          alignSelf: 'center',
        }}></View>

      <FlatList
        data={stockData}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        refreshing={handleRefresh}
        onRefresh={() => {
          pushStockData();
        }}
        onScroll={evt => {
          if (evt?.nativeEvent?.contentOffset.y == 0) {
            setScrollValue(0);
          } else {
            if (evt?.nativeEvent?.contentOffset.y > 100) {
              setScrollValue(1);
            }
          }
        }}
        // renderScrollComponent={props => (
        //   <ScrollView
        //     {...props}
        //     onScroll={evt => {
        //       // console.log(
        //       //   'VALUES>>>>>>>',
        //       //   evt,
        //       //   evt?.nativeEvent?.contentOffset,
        //       // );

        //       if (evt?.nativeEvent?.contentOffset.y == 0) {
        //         setScrollValue(0);
        //       } else {
        //         if (evt?.nativeEvent?.contentOffset.y > 100) {
        //           setScrollValue(1);
        //         }
        //       }
        //     }}
        //   />
        // )}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          <View
            style={{
              width: '100%',
              height: Dimensions.get('window').height / 2.5,
              marginBottom: 50,
            }}></View>
        }
        contentContainerStyle={{
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 40,
  },
});
export default Holdings;
