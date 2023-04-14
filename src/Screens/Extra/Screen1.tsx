
  import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';
import React, { lazy, Suspense } from 'react';

const Drag = React.lazy(() => import('./comp/Drag'));
  
  const Screen1 =(props: any)=>  {
    return (
      <View style={{flex: 1}}>

          <Suspense fallback={<Text>Loading</Text>}>
              <Drag />
          </Suspense>
          {/* <ActivityIndicator size="large" color="#00ff00" />  */}
      </View>


  )
  }

  export default React.memo(Screen1);
  const Rowitem = React.lazy(()=> import ('./comp/Rowitem'))
  function NewRow() {
  
    return (
      <View style={{flex: 1}}>

      <Suspense fallback={<Text>Loading</Text>}>
          <Rowitem />
      </Suspense>
      {/* <ActivityIndicator size="large" color="#00ff00" />  */}
  </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
    },
    text: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 32,
    },
    underlayRight: {
      flex: 1,
      backgroundColor: 'teal',
      justifyContent: 'flex-start',
    },
    underlayLeft: {
      flex: 1,
      backgroundColor: 'tomato',
      justifyContent: 'flex-end',
    },
  });
  