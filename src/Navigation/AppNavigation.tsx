/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthNavigation } from './Authnavigation';
import { DashboardNavigation } from './DashboardNavigation';
import { useDispatch, useSelector} from 'react-redux'
import { SideDrawerNavigation } from './SideDrawerNavigation';
import NetInfo from '@react-native-community/netinfo';
import {checkInternet, setAppState} from '../Redux/Action';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native/Libraries/AppState/AppState';


export const AppNavigation = () => {
  const [login , setLogin] = useState("false");
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch=useDispatch();
  

  React.useEffect(() => {
    const checkAsync = async () => {
      const value = await AsyncStorage.getItem('Keyvalue');
      useEffect(() => {
        NetInfo.addEventListener(state => {
          dispatch(checkInternet(state.isConnected));
        });
      }, []);
      useEffect(() => {
        const unsubscribe = AppState.addEventListener(
          'change',
          handleAppStateChange,
        );
        return () => {
          unsubscribe.remove();
        };
      }, []);
      const handleAppStateChange = (nextAppState: any) => {
        dispatch(setAppState(nextAppState));
      };
      console.log(value,"------------->>>>>>>>>>>.");
      
      if (value !== undefined && value !== null) {
        // setSelectedLang(value);
        setLogin(value)

      } else {
        setLogin('false')
      }
    };
    checkAsync();
  }, []);

  return (
    <NavigationContainer>
      <SideDrawerNavigation/>
    </NavigationContainer>
  );
};
