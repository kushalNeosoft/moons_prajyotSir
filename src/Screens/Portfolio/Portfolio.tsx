import React, {useState, useEffect} from 'react';
import {Easing} from 'react-native';
import {View, Text, StyleSheet, ScrollView, Animated} from 'react-native';
import AnimatedTopBar from './navigation/animationTopbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [scrollValue, setScrollValue] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState(new Animated.Value(0));
  const [headerOpacity2, setHeaderOpacity2] = useState(new Animated.Value(0));

  // This useEffect is calling for FadeIn and fadeOut effect
  useEffect(() => {
    if (scrollValue == 1) {
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
      Animated.timing(headerOpacity2, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(headerOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
      Animated.timing(headerOpacity2, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    }
  }, [scrollValue]);

  // this useEffect is calling for Header hight change
  useEffect(() => {
    if (scrollValue == 1) {
      Animated.timing(scrollY, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(scrollY, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    }
  }, [scrollValue]);

  const height = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [180, 80],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: height,
          backgroundColor: 'white',
        }}>
        {scrollValue == 1 ? (
          <Animated.View
            style={{
              opacity: headerOpacity,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Ionicons
                name="filter"
                size={25}
                color="black"
                style={{marginLeft: 7}}
              />
            </View>
            <View>
              <Text style={styles.PortfolioText}>Portfolio</Text>
              <Text style={styles.PortfolioSubTitle}>1,70,81,763.00</Text>
              <Text style={styles.PortfolioChanges}>1,65,74,858(97.28%)</Text>
            </View>
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              opacity: headerOpacity2,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.PortfolioText}>NIFTY 50</Text>
                <Text style={styles.PortfolioSubTitle}>17739.15</Text>
                <Text style={styles.PortfolioChanges}>+115.10(+2.28%)</Text>
              </View>
              <View>
                <Text style={styles.PortfolioText}>SENSEX</Text>
                <Text style={styles.PortfolioSubTitle}>474774.15</Text>
                <Text style={styles.PortfolioChanges}>+11533.10(+0.00%)</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 7,
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.currentValue}>Current value</Text>
                <Text style={styles.currentValueNumber}>$ 18,73,38,879.00</Text>
                <Text style={styles.overAllPl}>Overall P/L</Text>
                <Text style={styles.overAllPlNumber}>
                  $ 83,73,660.00(98.36%)
                </Text>
              </View>
              <View>
                <Text style={styles.investedValue}>Invested value</Text>
                <Text style={styles.investedValueNumber}>
                  $ 18,73,38,879.00
                </Text>
                <Text style={styles.todaysPl}>Todays P/L</Text>
                <Text style={styles.todaysNumber}>$ 83,73,660.00(98.36%)</Text>
              </View>
            </View>
          </Animated.View>
        )}
      </Animated.View>
      <AnimatedTopBar setScrollValue={setScrollValue} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PortfolioText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginLeft: 60,
    marginTop: 3,
  },
  PortfolioSubTitle: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500',
    marginLeft: 60,
  },
  PortfolioChanges: {
    fontSize: 14,
    color: 'green',
    fontWeight: '500',
    marginLeft: 60,
  },
  currentValue: {
    fontSize: 13,
    color: 'black',
    fontWeight: '500',
    marginLeft: 15,
  },
  currentValueNumber: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginLeft: 15,
  },
  overAllPl: {
    fontSize: 13,
    color: 'black',
    fontWeight: '500',
    marginLeft: 15,
  },
  overAllPlNumber: {
    fontSize: 13,
    color: 'green',
    fontWeight: '500',
    marginLeft: 15,
  },
  investedValue: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
    marginLeft: 15,
  },
  investedValueNumber: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 5,
  },
  todaysPl: {
    fontSize: 13,
    color: 'black',
    fontWeight: '500',
    marginLeft: 15,
  },
  todaysNumber: {
    fontSize: 13,
    color: 'red',
    fontWeight: '500',
    marginLeft: 15,
  },
});
export default Portfolio;
