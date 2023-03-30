import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  DeviceEventEmitter,
  NativeModules,
  Alert,
  TouchableOpacity,
} from 'react-native';
import TouchID from 'react-native-touch-id';

const FingerPrint = ({navigation}) => {
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);
  const optionalConfigObject = {
    title: 'Authentication Required',
    imageColor: '#e00606',
    imageErrorColor: '#ff0000',
    sensorDescription: 'Touch Sensor',
    sensorErrorDescription: 'Not Matched!',
    cancelText: 'Cancel',
  };
  const optionalTypeConfigObject = {
    unifiedErrors: false,
    passcodeFallback: false,
  };
  useEffect(() => {
    TouchID.isSupported(optionalTypeConfigObject)
      .then(biometryType => {
        console.log('type', biometryType);
        if (biometryType) {
          setIsBiometricAvailable(biometryType);
          checkFingerPrint();
        } else {
          console.log(' Biometric Not supported.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const checkFingerPrint = () => {
    TouchID.authenticate('Authenticate with Touch ID', optionalConfigObject)
      .then(success => {
        Alert.alert('Authenticated Successfully');
        // navigation.navigate('Tabs');
        console.log(success);
      })
      .catch(error => {
        console.log('Finger Print Error ==>', error);
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isBiometricAvailable === false ? (
        <Text style={{color: 'black'}}>
          Fingerprint scanner not available or you did not added on this device
        </Text>
      ) : null}
    </View>
  );
};
export default FingerPrint;
