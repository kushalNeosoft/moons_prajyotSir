import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { DashboardNavigation, dashboardScreenProp } from './DashboardNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerMenu } from '../Component/Customdrawer/Drawermenu';

export const stackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'blue' : '',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'skyblue',
  headerShown: false
};

const sideDrawerNavigator = createDrawerNavigator();

export const SideDrawerNavigation = () => {
  const navigation = useNavigation<dashboardScreenProp>();

  const sidedrawerScreenOptions = (props: any) => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <sideDrawerNavigator.Navigator
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'white',
          width: '100%',

        },
        drawerLabelStyle: {
          color: 'black',
        }
      }}
      drawerContent={props => {
        return (
          <SafeAreaView style={styles.rootContainer}>

            <View style={styles.closex}>
              <TouchableOpacity onPress={sidedrawerScreenOptions}>
                <Ionicons name="close" size={25} color='black' />
              </TouchableOpacity>
            </View>
            <View style={styles.signOutRootContainer}>

              <DrawerMenu />


            </View>
          </SafeAreaView>
        );
      }}>
      <sideDrawerNavigator.Screen
        name="DashboardNavigation"
        component={DashboardNavigation}
        options={{ headerShown: false }}


      />

    </sideDrawerNavigator.Navigator>
  );
};


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    borderWidth: 1
  },
  signOutRootContainer: {
    height: "100%",
    width: '100%',
  },
  signOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',


  },
  signOutText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 20,
    color: 'black'
  },
  signOutPressableContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "black",
    width: '92%',
  },
  closex: {
    backgroundColor: "white",
    height: 40,
    paddingLeft: 10,
    paddingTop: 5
  }
});
