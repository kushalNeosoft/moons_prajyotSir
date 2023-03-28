import React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const Screen3 = () => {
  const [cordinates, setCordinates] = useState({
    latitude: 12.9539974,
    longitude: 77.6309395,
  });
  const staticCordinates = [
    {
      latitude: 12.9539,
      longitude: 77.6329395,
    },
    {
      latitude: 12.9515,
      longitude: 77.6309395,
    },
    {
      latitude:  12.952196681615682,
      longitude: 77.6259458810091
    },
  ];
  // const cordinates = {latitude: 12.9539974, longitude: 77.6309395};
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: 12.9539974,
          longitude: 77.6309395,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0121,
        }}>
        {staticCordinates.map(c => {
          return <Marker coordinate={c} pinColor="blue" />;
        })}

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