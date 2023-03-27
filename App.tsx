import React, { useEffect } from "react";
import 'react-native-gesture-handler';
import { AppNavigation } from "./src/Navigation/AppNavigation";
import { requestUserPermission, notificationListener } from "./src/utils/notification";
import { store, persistor } from "./src/Redux/Store";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import KeepAwake from 'react-native-keep-awake';
import { checkRooted } from "./src/utils/checkRooted";


var DeviceInfo = require('react-native-device-info');


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
    console.log("Device Version : " + DeviceInfo.getVersion());
    //console.log("Device UniqueId : " + DeviceInfo.getUniqueId());
    console.log("Device SystemVersion : " + DeviceInfo.getSystemVersion());
    console.log("Device SerialNumber : "  + DeviceInfo.getSerialNumber());
  }
    //android.permission.ACCESS_WIFI_STATE Permission Needed
     //DeviceInfo.getMACAddress().then((mac: any) => {
       //console.log(mac);
     //});
      // DeviceInfo.getIPAddress().then((ip: any) => {
      //   console.log(ip)
;
      // });

    

// Get Local IP
// NetworkInfo.getIPAddress((ip: any) => {
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

