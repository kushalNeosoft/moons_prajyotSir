import React, { useEffect } from "react";
import 'react-native-gesture-handler';
import { AppNavigation } from "./src/Navigation/AppNavigation";
import { requestUserPermission, notificationListener } from "./src/utils/notification";
import { store, persistor } from "./src/Redux/Store";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import KeepAwake from 'react-native-keep-awake';
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
      <PersistGate persistor={persistor}loading={null}>
        <AppNavigation />
      </PersistGate>

    </Provider>

  )
}

export default App;

