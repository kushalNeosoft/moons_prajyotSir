// import React from 'react';
// import {useState} from 'react';
// import {Text, View} from 'react-native';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

// const Screen3 = () => {
//   const [cordinates, setCordinates] = useState({
//     latitude: 12.9539974,
//     longitude: 77.6309395,
//   });
//   const staticCordinates = [
//     {
//       latitude: 12.9539,
//       longitude: 77.6329395,
//     },
//     {
//       latitude: 12.9515,
//       longitude: 77.6309395,
//     },
//     {
//       latitude:  12.952196681615682,
//       longitude: 77.6259458810091
//     },
//   ];
//   // const cordinates = {latitude: 12.9539974, longitude: 77.6309395};
//   return (
//     <View style={{flex: 1}}>
//       <MapView
//         style={{flex: 1}}
//         // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//         region={{
//           latitude: 12.9539974,
//           longitude: 77.6309395,
//           latitudeDelta: 0.005,
//           longitudeDelta: 0.0121,
//         }}>
//         {staticCordinates.map(c => {
//           return <Marker coordinate={c} pinColor="blue" />;
//         })}

//         <Marker
//           draggable
//           coordinate={cordinates}
//           onDragEnd={e => {
//             setCordinates(e.nativeEvent.coordinate);
//             console.log(e.nativeEvent.coordinate);
//           }}
//         />
//       </MapView>
//     </View>
//   );
// };

import React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const Screen3 = () => {
  const [cordinates, setCordinates] = useState({
    latitude: 12.95636167593042,
    longitude: 77.62900058180094
  });
  const staticCordinates = [
    {
      title: '63 Moons 1',
      latitude: 12.9539974,
      longitude: 77.6309395,
    },
    { 
              title: '63 Moons 2',
             latitude: 12.95421106153262,
             longitude: 77.63554383069277,
           },
           {
            title: '63 Moons 3',
             latitude: 12.9515,
             longitude: 77.6309395,
           },
           {
            title: '63 Moons 4',
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
        {staticCordinates.map((c, index) => {
          // return (
          //   <View key={index}>
          //     <View
          //       style={{width: 2, height: 2, backgroundColor: 'red'}}></View>
          //   </View>
          // );
          return (
            <>
              <Marker coordinate={c}>
                <View>
                  <View style={{backgroundColor: 'red', borderRadius: 16}}>
                    <Text
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        fontSize: 14,
                        color: 'white',
                      }}>
                      {c.title}
                    </Text>
                  </View>

                  <View
                    style={{
                      borderBottomLeftRadius: 2,
                      borderBottomRightRadius: 2,
                      width: 4,
                      height: 16,
                      backgroundColor: 'red',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                </View>
              </Marker>
              {/* <Marker coordinate={c}>
                <View>
                  <Text>Sample</Text>
                </View>
              </Marker> */}
            </>
          );
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