import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
var indexScroll = 0;
const Market = () => {
  const scrollViewRef = useRef();
  // const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 8,
          //   backgroundColor: 'red',
          flexDirection: 'row',
        }}>
        <ScrollView
          horizontal={true}
          ref={scrollRef}
          contentContainerStyle={styles.topBar}
          showsHorizontalScrollIndicator={false}
          style={{
            borderRadius: 25,
            overflow: 'hidden',
            backgroundColor: 'rgba(0,0,0,0.10)',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={[
              styles.topBarOpacity,
              {backgroundColor: indexScroll == 0 ? '#002D62' : 'transparent'},
            ]}
            onPress={() => {
              //setIndex(0);
              indexScroll = 0;
              scrollViewRef.current.scrollTo({y: 0});
            }}>
            <Text style={styles.topBarText}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.topBarOpacity,
              {backgroundColor: indexScroll == 1 ? '#002D62' : 'transparent'},
            ]}
            onPress={() => {
              // setIndex(1);
              indexScroll = 1;
              scrollViewRef.current.scrollTo({y: 300});
            }}>
            <Text style={styles.topBarText}>Indices</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.topBarOpacity,
              {backgroundColor: indexScroll == 2 ? '#002D62' : 'transparent'},
            ]}
            onPress={() => {
              // setIndex(2);
              indexScroll = 2;
              scrollViewRef.current.scrollTo({y: 600});
            }}>
            <Text style={styles.topBarText} numberOfLines={1}>
              Screeners
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.topBarOpacity,
              {backgroundColor: indexScroll == 3 ? '#002D62' : 'transparent'},
            ]}
            onPress={() => {
              //setIndex(3);
              indexScroll = 3;
              scrollViewRef.current.scrollTo({y: 900});
            }}>
            <Text style={styles.topBarText}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.topBarOpacity,
              {backgroundColor: indexScroll == 4 ? '#002D62' : 'transparent'},
            ]}
            onPress={() => {
              // setIndex(4);
              indexScroll = 4;
              scrollViewRef.current.scrollTo({y: 1200});
            }}>
            <Text style={styles.topBarText}>Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.topBarOpacity,
              {backgroundColor: indexScroll == 5 ? '#002D62' : 'transparent'},
            ]}
            onPress={() => {
              //setIndex(5);
              indexScroll = 5;
              scrollViewRef.current.scrollTo({y: 1800});
            }}>
            <Text style={styles.topBarText}>IPO</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView
        ref={scrollViewRef}
        onScroll={event => {
          setScrollY(event.nativeEvent.contentOffset.y);
          // update index based on scroll position
          if (
            event.nativeEvent.contentOffset.y >= 0 &&
            event.nativeEvent.contentOffset.y < 300
          ) {
            //setIndex(0);
            indexScroll = 0;
            scrollRef?.current?.scrollTo({
              x: 0,
              animated: true,
            });
          } else if (
            event.nativeEvent.contentOffset.y >= 300 &&
            event.nativeEvent.contentOffset.y < 600
          ) {
            //setIndex(1);
            indexScroll = 1;
            scrollRef?.current?.scrollTo({
              x: 0,
              animated: true,
            });
          } else if (
            event.nativeEvent.contentOffset.y >= 600 &&
            event.nativeEvent.contentOffset.y < 900
          ) {
            //setIndex(2);
            indexScroll = 2;
          } else if (
            event.nativeEvent.contentOffset.y >= 900 &&
            event.nativeEvent.contentOffset.y < 1200
          ) {
            // setIndex(3);
            indexScroll = 3;
          } else if (
            event.nativeEvent.contentOffset.y >= 1100 &&
            event.nativeEvent.contentOffset.y < 1500
          ) {
            // setIndex(4);
            indexScroll = 4;
            scrollRef?.current?.scrollToEnd?.({
              x: 5,
              animated: true,
            });
          } else if (
            event.nativeEvent.contentOffset.y >= 1500 &&
            event.nativeEvent.contentOffset.y < 1800
          ) {
            // setIndex(5);
            indexScroll = 5;
            scrollRef?.current?.scrollToEnd?.({
              x: 5,
              animated: true,
            });
          }
        }}>
        <Text style={styles.scrollHead}>What's New</Text>

        <View style={styles.contentBox}></View>

        {/* <Text style={styles.scrollHead}>New products</Text>
        <View style={styles.contentBox}></View> */}
        <Text style={styles.scrollHead}>Indices</Text>
        <View style={styles.contentBox}></View>
        <Text style={styles.scrollHead}>Screeners</Text>
        <View style={styles.contentBox}></View>
        <Text style={styles.scrollHead}>News</Text>
        <View style={styles.contentBox}></View>
        <Text style={styles.scrollHead}>Events</Text>
        <View style={styles.contentBox}></View>
        <Text style={styles.scrollHead}>IPO</Text>
        <View style={styles.contentBox}></View>
        <View style={styles.contentBox}></View>
      </ScrollView>
    </View>
  );
};
export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',

    borderRadius: 25,
    // alignItems:"center",
    // justifyContent:"center",
  },
  topBarText: {
    fontSize: 13,
    marginHorizontal: 9,
    fontWeight: '500',
    color: 'white',
  },
  topBarOpacity: {
    paddingHorizontal: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  scrollHead: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 12,
  },
  contentBox: {
    height: 300,
    width: '95%',
    alignSelf: 'center',
  },
});
