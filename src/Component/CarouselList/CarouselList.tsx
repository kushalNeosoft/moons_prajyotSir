import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {colors} from '../../constants/colors';
import alignment from '../../utils/alignment';
import {CarouselProps} from './type';
import {buyData, sellData} from './constData';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function CarouselList(props: CarouselProps) {
  const navigation=useNavigation();
  const buyView = () => {
    return (
      <View style={styles.buySellViewContainer}>
        <View style={{...alignment.row_SpaceB}}>
          <Text style={styles.ordersHeaderText}>Qty</Text>
          <Text style={styles.ordersHeaderText}>Orders</Text>
          <Text style={styles.ordersHeaderText}>Bid</Text>
        </View>
        <FlatList
          data={buyData}
          renderItem={({item}) => (
            <View style={{...alignment.row_SpaceB, padding: 4}}>
              <Text style={styles.buyText}>{item.qty}</Text>
              <Text style={styles.buyText}>{item.orders}</Text>
              <Text style={styles.buyText}>{item.bid}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  const sellView = () => {
    return (
      <View style={styles.buySellViewContainer}>
        <View style={{...alignment.row_SpaceB}}>
          <Text style={styles.ordersHeaderText}>Ask</Text>
          <Text style={styles.ordersHeaderText}>Orders</Text>
          <Text style={styles.ordersHeaderText}>Qty</Text>
        </View>
        <FlatList
          data={sellData}
          renderItem={({item}) => (
            <View style={{...alignment.row_SpaceB, padding: 4}}>
              <Text style={styles.sellText}>{item.ask}</Text>
              <Text style={styles.sellText}>{item.orders}</Text>
              <Text style={styles.sellText}>{item.qty}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  const renderItemList = ({item, index}: any) => {
    return (
      <View style={styles.subContainer}>
        <ScrollView
          overScrollMode="always"
          showsVerticalScrollIndicator={false}>
          {/* Header View */}
          <View style={styles.headerView}>
            <View>
              <Text
                style={
                  styles.companyName_Value_Text
                }>{`${item.companyName} EQ`}</Text>
            </View>

            <View>
              <Text
                style={[styles.companyName_Value_Text, {textAlign: 'right'}]}>
                {item.value}
              </Text>
              <Text>{`${item.dayValue}(${item.percentage}%)`}</Text>
              <Text>Images</Text>
            </View>
          </View>
          {/* End Header View */}
          {/* Button View */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{borderRadius: 10, backgroundColor: '#50C878'}}>
              <Text style={styles.buy_sell_Text}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{borderRadius: 10, backgroundColor: '#D70040'}}>
              <Text style={styles.buy_sell_Text}>Sell</Text>
            </TouchableOpacity>
          </View>
          {/* Button View Ends */}
          {/* Orders List View */}
          <View style={styles.ordersView}>
            {buyView()}
            {sellView()}
          </View>
          {/* Orders List View Ends */}
          {/* Total Bids View */}
          <View style={{...alignment.row_SpaceB}}>
            <Text>Total Bids</Text>
            <Text>Total Asks</Text>
          </View>

          <View style={styles.progressMain}>
            <View style={styles.progressOuter}>
              <Text>10</Text>
            </View>
            <Text style={{textAlign: 'right'}}>30</Text>
          </View>
          {/* End total Bids View */}
          <Button title="Close" onPress={() => props.onCloseCarousel()} />
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Hello</Text>
        </ScrollView>
      </View>
    );
  };

  return (
    <Carousel
      style={styles.container}
      width={screenWidth}
      defaultIndex={props.index}
      data={props.listData}
      renderItem={renderItemList}
      panGestureHandlerProps={{
        activeOffsetX: [-50, 50],
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: screenHeight / 4.4,
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: 'center',
    zIndex: 100,
  },
  subContainer: {
    borderRadius: 20,
    width: screenWidth - 50,
    height: screenHeight / 1.5,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  companyName_Value_Text: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 17,
  },
  buy_sell_Text: {
    paddingHorizontal: 50,
    fontSize: 20,
    paddingVertical: 7,
  },
  buttonContainer: {
    ...alignment.row_SpaceB,
    paddingVertical: 10,
  },
  ordersView: {
    ...alignment.row_SpaceB,
  },
  buySellViewContainer: {
    height: 160,
    width: 150,
  },
  buyText: {
    color: colors.bright_green,
  },
  sellText: {
    color: colors.red,
  },
  ordersHeaderText: {
    color: colors.black,
    fontWeight: 'bold',
  },
  progressMain: {
    backgroundColor: '#D70040',
    height: 20,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressOuter: {
    width: '50%',
    backgroundColor: '#50C878',
    height: 20,
    borderRadius: 10,
  },
});

export default CarouselList;
