import React from 'react';
import {Image} from 'react-native';

interface DogImageProps {
  url: string;
}
const DogImage = ({url}: DogImageProps) => {
  return (
    <Image
      style={{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
      }}
      source={{
        uri: url,
      }}
    />
  );
};
export default DogImage;
