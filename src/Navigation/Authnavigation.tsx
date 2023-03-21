import React from 'react';
import ForgotPasswordScreen from '../Screens/forgetpassword/Forgetpass';
import Login from '../Screens/Login/Login';
import Otp from '../Screens/OTP/Otpscreen';
import { Settings } from '../Screens/Settings/Settings';

import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';



export type LogStackParamList = {

  Login: undefined;
  ForgotPasswordScreen: undefined;
  Otp:undefined;
  Settings:undefined;
};
export type LoginScreenProp = StackNavigationProp<
  LogStackParamList,
  'Login'
  >;

const AuthStack = createStackNavigator<LogStackParamList>();


export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        name="Otp"
        component={Otp}
      />
      <AuthStack.Screen
        name='ForgotPasswordScreen'
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen
        name="Settings"
        component={Settings}
      />
       
    </AuthStack.Navigator>
  );
};


