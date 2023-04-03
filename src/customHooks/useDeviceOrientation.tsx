import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState(null);

  useEffect(() => {
    const getOrientation = () => {
      const {width, height} = Dimensions.get('window');
      if (width < height) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    };
    getOrientation();
    const listen = Dimensions.addEventListener('change', getOrientation);
    return () => {
      listen.remove();
    };
  }, []);

  return orientation;
};

export default useDeviceOrientation;
