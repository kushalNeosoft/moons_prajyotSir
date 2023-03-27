import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Screen1 from './Screen1';

const Screen3 = () => {
  const [cordinates, setCordinates] = useState({
    latitude: 12.9539974,
    longitude: 77.6309395,
  });
  // const cordinates = {latitude: 12.9539974, longitude: 77.6309395};
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: 12.9539974,
          longitude: 77.6309395,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          draggable
          coordinate={cordinates}
          onDragEnd={e => {
            setCordinates(e.nativeEvent.coordinate);
            console.log(e.nativeEvent.coordinate);
          }}
        />
      </MapView>
    </View>
  );
};
export default Screen3;