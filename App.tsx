import React, { useEffect , useState} from "react";
import 'react-native-gesture-handler';
import { AppNavigation } from "./src/Navigation/AppNavigation";
import { requestUserPermission, notificationListener } from "./src/utils/notification";
import { store, persistor } from "./src/Redux/Store";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import KeepAwake from 'react-native-keep-awake';
import { checkRooted } from "./src/utils/checkRooted";
import { NetworkInfo } from "react-native-network-info";
// import IMEI from "react-native-imei";
import crashlytics from '@react-native-firebase/crashlytics';
import { funContext } from "./src/context/AppContext";
import { one } from "./src/function/Function";

var DeviceInfo = require('react-native-device-info');


const App = () => {
  
const version = DeviceInfo.getVersion();
const [applicationName, setApplicationName] = useState<string>();
const [applicationVersion, setApplicationVersion] = useState<string>();
const [location, setLocation] = useState<string>();
  
  const [packageName, setPackageName] = useState<string>();

  React.useEffect(() => {
    checkRooted();
    requestUserPermission()
    notificationListener()
    
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setApplicationName(DeviceInfo.getApplicationName());
    setApplicationVersion(DeviceInfo.getVersion());
    //setUuid(DeviceInfo.getInstanceId());
    //console.log("UUID : " + DeviceInfo.getInstanceId());
    console.log("Application Name : " + DeviceInfo.getApplicationName());
    console.log("Application Version : " + DeviceInfo.getVersion());
    console.log("Device Model : " + DeviceInfo.getModel());
    console.log("Device Brand : " + DeviceInfo.getBrand());
    // console.log("Device Carrier : " + DeviceInfo.getCarrier());
    console.log("Device ID : " + DeviceInfo.getDeviceId());
   
    //console.log("Device UniqueId : " + DeviceInfo.getUniqueId());
    console.log("Device SystemVersion : " + DeviceInfo.getSystemVersion());
    console.log("Device SerialNumber : "  + DeviceInfo.getSerialNumber());

  };
  
  NetworkInfo.getIPAddress().then((ipAddress: any) => {
    console.log("Device IP : " + ipAddress);
  });

  DeviceInfo.getInstanceId().then((instanceId: any) => {
    // Android: da4e0245-5d6c-402a-a07c-0c5349f229e2
    //setUuid(instanceId);
    console.log("UDID : " + instanceId) ;
  });

//   // IMEI.getImei().then((imeiList: any) => {
//     console.log(imeiList)
// });
  
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
    // crashlytics().crash();
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

