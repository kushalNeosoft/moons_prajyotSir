import React from "react";
import {View,Text} from 'react-native';
import WebView from "react-native-webview";

function Webview(){
  return(
    <View style={{flex:1}}>
      <View style={{height:70,backgroundColor:'yellow'}}/>
      <WebView source={{ uri: 'https://reactnative.dev/' }}/>
    </View>
  )
}

export default Webview;