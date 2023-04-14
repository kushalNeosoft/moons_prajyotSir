import React, {useState, useEffect} from 'react';
import {View, Text, NativeModules, Alert, TouchableOpacity} from 'react-native';
import TouchID from 'react-native-touch-id';

const BiometricService = (
  title: string = 'Authentication Required',
  subTitle: string = 'Authenticate with Touch ID',
  imageColor: string = '#e00606',
  imageErrorColor: string = '#ff0000',
  sensorDescription: string = 'Touch Sensor',
  sensorErrorDescription: string = 'Not Matched!',
  cancelText: string = 'Cancel',
) => {
  const optionalConfigObject = {
    title: title,
    imageColor: imageColor,
    imageErrorColor: imageErrorColor,
    sensorDescription: sensorDescription,
    sensorErrorDescription: sensorErrorDescription,
    cancelText: cancelText,
  };
  const optionalTypeConfigObject = {
    unifiedErrors: false,
    passcodeFallback: false,
  };

  TouchID.isSupported(optionalTypeConfigObject)
    .then(biometryType => {
      console.log('type', biometryType);
      if (biometryType) {
        TouchID.authenticate(subTitle, optionalConfigObject)
          .then(success => {
            Alert.alert('Authenticated Successfully');
            console.log(success);
          })
          .catch(error => {
            console.log('Finger Print Error ==>', error);
          });
      } else {
        Alert.alert(' Biometric Not supported.');
      }
    })
    .catch(error => {
      Alert.alert(' Biometric Not supported.');
      //   console.log('is', error);
    });
};
export default BiometricService;
