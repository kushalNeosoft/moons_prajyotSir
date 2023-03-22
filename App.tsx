import React,{useEffect} from "react";
import 'react-native-gesture-handler';
import { AppNavigation } from "./src/Navigation/AppNavigation";
import { requestUserPermission, notificationListener } from "./src/utils/notification";
import { store } from "./src/Redux/Store";
import { Provider } from 'react-redux';
import KeepAwake from 'react-native-keep-awake';
import SplashScreen from 'react-native-splash-screen';
import { checkRooted } from "./src/utils/checkRooted";




const App = () => {

  React.useEffect(() => {
    checkRooted();
    requestUserPermission()
    notificationListener()
  }, []);

  useEffect(() => {
    KeepAwake.activate(); 
    return () => {
      KeepAwake.deactivate();
    };
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>

  )
}

export default App;

