import React from "react";
import Dashboardscreen from "../Screens/Dashboard/Dashboardscreen";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { stackOptions } from "./SideDrawerNavigation";
import { Settings } from "../Screens/Settings/Settings";
import ForgotPasswordScreen from "../Screens/forgetpassword/Forgetpass";
import Login from "../Screens/Login/Login";
import Otp from "../Screens/OTP/Otpscreen";
import StockDetails from "../Screens/StockDetails/StockDetails";
import PhoneEmail from "../Screens/PhoneEmail/PhoneEmail";
import DataLazyLoading from "../Screens/lazy/DataLazyLoading";

import BottomTab from "./BottomTab";
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import BuySell from "../Screens/BuySell/BuySell";
import MyTabs from "./topTabNavigation";
import { useSelector } from "react-redux";
import Profile from "../Screens/Profile/Profile";
import Webview from "../Screens/Webview/Webview";

export type AppStackParamList = {
  Dashboard: undefined;
  BuySell: undefined;
  Settings: undefined;
  Stock: undefined;
  MyTabs: undefined
  ForgotPassword: undefined;
  Login: undefined;
  Otp: undefined;
  Profile:undefined;
  Constituents:undefined;
  PhoneEmail:undefined;
  DataLazyLoading:undefined;
};
export type dashboardScreenProp = StackNavigationProp<
  AppStackParamList

>;

const DashboardNavigator = createStackNavigator();

export const DashboardNavigation = () => {
  const newLog = useSelector(state => state.Login.firsttime );
  return (

    <DashboardNavigator.Navigator screenOptions={stackOptions}  >
      {newLog?
        <DashboardNavigator.Screen name="Otp" component={Otp} options={{gestureEnabled:false}} />
        :
        <DashboardNavigator.Screen name="Login" component={Login} options={{gestureEnabled:false}} />
      }
      <DashboardNavigator.Screen name="Stock" component={BottomTab} />
      <DashboardNavigator.Screen name="Profile" component={Profile} />
      <DashboardNavigator.Screen name="BuySell" component={BuySell} />
      <DashboardNavigator.Screen name="Settings" component={Settings} />
      <DashboardNavigator.Screen name="Constituents" component={MyTabs} />
      <DashboardNavigator.Screen name="Dashboard" component={Dashboardscreen} />

      <DashboardNavigator.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <DashboardNavigator.Screen name="PhoneEmail" component={PhoneEmail} />
      <DashboardNavigator.Screen name="DataLazyLoading" component={DataLazyLoading} />
      <DashboardNavigator.Screen name="Webview" component={Webview} />





    </DashboardNavigator.Navigator>
    
  );
};

