import React, {Suspense, lazy, useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
// const DogImage = React.lazy(() => import('./components/DogImage'));

const DogImage = lazy(() => import('./components/DogImage'));

const DataLazyLoading = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  useEffect(() => {
    console.log('Something');
    fetchRandomDogs();
  }, []);

  const fetchRandomDogs = async () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response: any) => response.json())
      .then(d => {
        setData(d);
        setLoading(false);
        // console.log(d);
      });
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
