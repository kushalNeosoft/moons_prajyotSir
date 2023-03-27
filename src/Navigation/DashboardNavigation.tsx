import React from "react";
import Dashboardscreen from "../Screens/Dashboard/Dashboardscreen";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { stackOptions } from "./SideDrawerNavigation";
import { Settings } from "../Screens/Settings/Settings";
import ForgotPasswordScreen from "../Screens/forgetpassword/Forgetpass";
import Login from "../Screens/Login/Login";
import Otp from "../Screens/OTP/Otpscreen";
import StockDetails from "../Screens/StockDetails/StockDetails";

import BottomTab from "./BottomTab";
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import BuySell from "../Screens/BuySell/BuySell";
import MyTabs from "./topTabNavigation";
import { useSelector } from "react-redux";

export type AppStackParamList = {
  Dashboard: undefined;
  BuySell: undefined;
  Settings: undefined;
  StockDetails: undefined;
  MyTabs: undefined
  ForgotPassword: undefined;
  Login: undefined;
  Otp: undefined;

};
export type dashboardScreenProp = StackNavigationProp<
  AppStackParamList,
  'Dashboard',
  'BuySell'

>;

const DashboardNavigator = createStackNavigator<AppStackParamList>();

export const DashboardNavigation = () => {



  const newLog = useSelector(state => state.Login.firsttime);
  console.log(newLog, "gdgdgdgdgdgdgdg------------->>>>>>>>")
  return (

    <DashboardNavigator.Navigator screenOptions={stackOptions} >
      {newLog?
        <DashboardNavigator.Screen name="Otp" component={Otp} options={{gestureEnabled:false}} />
        :
        <DashboardNavigator.Screen name="Login" component={Login} options={{gestureEnabled:false}} />
      }
      <DashboardNavigator.Screen name="StockDetails" component={BottomTab} />
      <DashboardNavigator.Screen name="BuySell" component={BuySell} />
      <DashboardNavigator.Screen name="Settings" component={Settings} />
      <DashboardNavigator.Screen name="Constituents" component={MyTabs} />

      <DashboardNavigator.Screen name="ForgotPassword" component={ForgotPasswordScreen} />





    </DashboardNavigator.Navigator>
    // <DashboardNavigator.Navigator
    //    screenOptions={stackOptions}
    //   initialRouteName="Dashboard"


    // >
    //   <DashboardNavigator.Screen
    //     name="Dashboard"
    //     component={Dashboardscreen}
    //     options={dashboardScreenOptions}

    //   />

    //   {/* <DashboardNavigator.Screen name="Settings" component={Settings} /> */}


    // </DashboardNavigator.Navigator>
  );
};

export const dashboardScreenOptions = (props: any) => {
  return {
    title: 'Dashboard',
    headerLeft: () => (
      <HeaderButtons >
        <Item
          title="menu"
          iconName="menu-outline"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),

  };
};