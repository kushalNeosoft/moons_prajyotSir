import axios from 'axios';
import React, {Suspense, lazy, useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import '../../axios/interceptors';
// const DogImage = React.lazy(() => import('./components/DogImage'));

const DogImage = lazy(() => import('./components/DogImage'));

const DataLazyLoading = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchRandomDogs();
  }, []);

  const fetchRandomDogs = async () => {
    setLoading(true);
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    });
    // fetch('https://dog.ceo/api/breeds/image/random')
    //   .then((response: any) => response.json())
    //   .then(d => {
    //     setData(d);
    //     setLoading(false);
    //     // console.log(d);
    //   });
  };
  return (
    <View style={{flex: 1}}>
      {data && (
        <Suspense fallback={<Text>Loading</Text>}>
          <DogImage url={data.message} />
        </Suspense>
      )}
      {loading && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A000000',
            shadowOpacity: 0.2,
            zIndex: 10,
          }}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};
export default DataLazyLoading;
