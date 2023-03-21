import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Otpcomponent from '../Component/Otptxtcomponent/Otpcomponent';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>password</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  activeTintColor: 'white',
  inactiveTintColor: 'black',
  indicatorStyle: { backgroundColor: 'red', height: '100%' },
  pressOpacity: 1,
}

export default function Tabnavigation() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="M-pin" component={Otpcomponent} />
        <Tab.Screen name="Password" component={SettingsScreen} />
      </Tab.Navigator>
   
  );
}
