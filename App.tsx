import React from "react";
import 'react-native-gesture-handler';
import { AppNavigation } from "./src/Navigation/AppNavigation";
import { requestUserPermission, notificationListener } from "./src/utils/notification";
import { store } from "./src/Redux/Store";
import { Provider } from 'react-redux';

import SplashScreen from 'react-native-splash-screen';




const App = () => {

  React.useEffect(() => {
    SplashScreen.hide();
    requestUserPermission()
    notificationListener()
  }, []);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>

  )
}

export default App;

