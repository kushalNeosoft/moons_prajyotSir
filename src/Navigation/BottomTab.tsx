import React, {useContext} from 'react';
import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  LogBox,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {NavigationContainer} from '@react-navigation/native';
import StockDetails from '../Screens/StockDetails/StockDetails';
import Screen1 from '../Screens/Extra/Screen1';
import Screen2 from '../Screens/Extra/Screen2';
import Screen3 from '../Screens/Extra/Screen3';
import Screen4 from '../Screens/Extra/Screen4';

// LogBox.ignoreAllLogs()

const BottomTab = () => {
  const _renderIcon = (routeName: any, selectedTab: any) => {
    switch (routeName) {
      case 'StockDetails':
        return (
          <Image
            source={require('../assets/watchlist.png')}
            style={{height: 25, width: 25}}
          />
        );
        break;
      case 'Screen2':
        return (
          <Image
            source={require('../assets/market.png')}
            style={{height: 25, width: 25}}
          />
        );
      case 'Screen3':
        return (
          <Image
            source={require('../assets/orders.png')}
            style={{height: 25, width: 25}}
          />
        );
      case 'Screen4':
        return (
          <Image
            source={require('../assets/portfolio.jpeg')}
            style={{height: 30, width: 30}}
          />
        );
        break;
    }
  };
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
        <CurvedBottomBar.Navigator
          screenOptions={{headerShown: false}}
          style={styles.bottomBar}
          height={55}
          circleWidth={50}
          bgColor="white"
          initialRouteName="title1"
          borderTopLeftRight
          renderCircle={({selectedTab, navigate}) => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => navigate('Screen1')}>
                <Image
                  source={require('../assets/search.png')}
                  style={{
                    height: 25,
                    width: 25,
                    transform: [{rotate: '45deg'}],
                  }}
                />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="StockDetails"
            position="LEFT"
            component={StockDetails}
          />
          <CurvedBottomBar.Screen
            name="Screen2"
            component={Screen2}
            position="LEFT"
          />
          <CurvedBottomBar.Screen
            name="Screen3"
            component={Screen3}
            position="RIGHT"
          />
          <CurvedBottomBar.Screen
            name="Screen4"
            component={Screen4}
            position="RIGHT"
          />
          <CurvedBottomBar.Screen
            name="Screen1"
            component={Screen1}
            position="CIRCLE"
          />
        </CurvedBottomBar.Navigator>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 55,
    height: 55,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    transform: [{rotate: '-45deg'}],
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 40,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default BottomTab;
