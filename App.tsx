import React, { useEffect } from "react";
import 'react-native-gesture-handler';
import { AppNavigation } from "./src/Navigation/AppNavigation";
import { requestUserPermission, notificationListener } from "./src/utils/notification";
import { store, persistor } from "./src/Redux/Store";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import KeepAwake from 'react-native-keep-awake';
import { checkRooted } from "./src/utils/checkRooted";
import { NetworkInfo } from "react-native-network-info";
import IMEI from "react-native-imei";


var DeviceInfo = require('react-native-device-info');
const version = DeviceInfo.getVersion();


const App = () => {

  React.useEffect(() => {
    checkRooted();
    requestUserPermission()
    notificationListener()
    
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("Device Model : " + DeviceInfo.getModel());
    console.log("Device Brand : " + DeviceInfo.getBrand());
    // console.log("Device Carrier : " + DeviceInfo.getCarrier());
    console.log("Device ID : " + DeviceInfo.getDeviceId());
    console.log("Application Version : " + DeviceInfo.getVersion());
    //console.log("Device UniqueId : " + DeviceInfo.getUniqueId());
    console.log("Device SystemVersion : " + DeviceInfo.getSystemVersion());
    console.log("Device SerialNumber : "  + DeviceInfo.getSerialNumber());

  };
  
  NetworkInfo.getIPAddress().then((ipAddress: any) => {
    console.log("Device IP : " + ipAddress);
  });

  IMEI.getImei().then((imeiList: any) => {
    console.log(imeiList)
});
  
  //  NetworkInfo.getIPAddress((ip: any) => {
  //    console.log("Kushal IP :" +ip);
  //  });

//   GetAppName.getAppName((appName: any) => {
//     console.log("Here is your app name:", appName)      
//  });

    
//Get Local IP
// NetworkInfo.getIPAddress((ip) => {
//   console.log("Network IP : " + ip);
// });



  useEffect(() => {
    KeepAwake.activate();
    console.log(KeepAwake,"JJSJJSJSJS----->>>");
    
    return () => {
      KeepAwake.deactivate();
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}loading={null}>
        <AppNavigation />
      </PersistGate>

    </Provider>

  )
}

export default App;

