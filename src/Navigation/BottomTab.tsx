import React, { useContext } from 'react';
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
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg'
import StockDetails from '../Screens/StockDetails/StockDetails';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Screen1 from '../Screens/Extra/Screen1';
import Screen2 from '../Screens/Extra/Screen2';
import Screen3 from '../Screens/Extra/Screen3';
import Screen4 from '../Screens/Extra/Screen4';

// LogBox.ignoreAllLogs()
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  
  const CustomButton = () => (
    <View
      style={{
        alignItems: "center",
      }}

    >
      <Svg
        width={94}
        height={38}
        viewBox="0 0 94 40"
        
      >
        <Path
          d="M.333 0c7.364 0 13.334 5.969 13.334 13.333v3.334C13.667 29.553 34.113 40 47 40c13 .5 33.333-10.447 33.333-23.333v-3.334C80.333 5.97 86.303 0 93.667 0H.333z"
          fill="#F5F5F5"
        />
      </Svg>
      <TouchableOpacity >
        <View style={styles.customtab}>
          <Fontisto name="search" size={25} style={{ transform: [{ rotate: '-45deg' }] }} />
        </View>
      </TouchableOpacity>

    </View>
  );
  
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { position: 'absolute' },
    }}

    >
      <Tab.Screen name="StockDetails"
        component={StockDetails}

        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/watchlist.png')}
              style={{ height: 25, width: 25 }}
            />
          )

        }}
      />
      <Tab.Screen name="Right" component={Screen1}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/market.png')}
              style={{ height: 25, width: 25 }}
            />
          )
        }}
      />
      <Tab.Screen name="Settings" component={Screen2}
        options={{
          tabBarButton: (props) => <CustomButton {...props} />,
        }}
      />
      <Tab.Screen name="Settingsone" component={Screen3}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/orders.png')}
              style={{ height: 25, width: 25 }}
            />
          )
        }}
      />
      <Tab.Screen name="Left" component={Screen4}
        options={{

          tabBarIcon: () => (
            <Image
              source={require('../assets/portfolio.jpeg')}
              style={{ height: 25, width: 25 }}
            />
          )
        }}
      />

    </Tab.Navigator>

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
    transform: [{ rotate: '-45deg' }],
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
  customtab: {
    height: 48,
    width: 48,
    backgroundColor: 'white',
    borderRadius: 10,
    top: -69, transform: [{ rotate: '45deg' }],
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 4
  }
});

export default BottomTab;
