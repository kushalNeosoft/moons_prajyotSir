import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Platform,
  Alert,
  PixelRatio,
  Dimensions,
} from 'react-native';
import Mailer from 'react-native-mail';

function PhoneEmail() {
  const phone_Number = '8660324261';

  console.log('pixels',PixelRatio.getPixelSizeForLayoutSize(20))

  const makeCall = () => {
    console.log('callNumber ----> ', phone_Number);
    let phoneNumber = phone_Number;
    if (Platform.OS === 'ios') {
      phoneNumber = `telprompt:${phone_Number}`;
    } else {
      phoneNumber = `tel:${phone_Number}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  const handleEmail = () => {
    Mailer.mail(
      {
        subject: 'need help',
        recipients: ['himanshu.jaiswal@neosoftmail.com'],
        ccRecipients: ['supportCC@example.com'],
        bccRecipients: ['supportBCC@example.com'],
        body: 'Hello buddy',
        customChooserTitle: 'This is my new title',
        isHTML: true,
      },
      (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {
              text: 'Ok',
              onPress: () => console.log('OK: Email Error Response'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('CANCEL: Email Error Response'),
            },
          ],
          {cancelable: true},
        );
      },
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          borderRadius: 15,
          marginVertical: 10,
        }}
        onPress={() => makeCall()}>
        <Text style={{fontSize: 20, color: 'white'}}>Make call</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          borderRadius: 15,
        }}
        onPress={() => handleEmail()}>
        <Text style={{fontSize: 20, color: 'white'}}>Send mail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PhoneEmail;
