import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  DeviceEventEmitter,
  NativeModules,
  Alert,
  TouchableOpacity,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const FingerPrintWithFaceId = ({navigation}) => {
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);
  useEffect(() => {
    checkFingerprintAvailability();
    return () => {
      FingerprintScanner.release();
    };
  }, []);

  const checkFingerprintAvailability = async () => {
    try {
      await FingerprintScanner.isSensorAvailable();
      setIsBiometricAvailable(true);
      console.log('check sensor =>', FingerprintScanner.isSensorAvailable());
      authenticateUser();
    } catch (error) {
      console.error(error);
      setIsBiometricAvailable(false);
    }
  };

  const authenticateUser = async () => {
    try {
      const result = await FingerprintScanner.authenticate({
        description: 'Authenticate to access the app',
      });
      console.log('result=>', result);

      const storedFingerprint = 'stored_fingerprint';
      console.log('stored FingerPrint====>', storedFingerprint);
      if (result === true) {
        console.log('valid');
        Alert.alert('Success', 'Access granted');
      } else {
        console.log('not valid');
        Alert.alert('Not Matched with Avaliable FingerPrint!');
      }
    } catch (error) {
      console.error('error on authcateuser fun.=>', error);
      Alert.alert('Fingerprint authentication failed');
    }
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
export default FingerPrintWithFaceId;
