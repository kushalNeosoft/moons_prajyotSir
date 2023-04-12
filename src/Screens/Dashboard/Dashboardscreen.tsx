import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import PushNotification from 'react-native-push-notification';
import Toast from 'react-native-toast-message';

const Dashboardscreen: React.FC = () => {
  const showToastWithButton = () => {
    Toast.show({
      type: 'toastWithButton',
      text1: 'We welcome you to our application',
      text2: 'Click',
      onPress: toastOnpressFunction,
    });
  };

  const showToastWithoutButton = () => {
    Toast.show({
      type: 'toastWithoutButton',
      text1: 'We welcome you to our application',
    });
  };
  const toastOnpressFunction = () => {
    console.log('Success');
  };

  React.useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
      },
      (created: any) => console.log(`createChannel returned '${created}'`),
    );
  }, []);

  const pushNotification = () => {
    PushNotification.localNotification({
      channelId: 'channel-id',
      title: 'Demo',
      message: 'Hello',
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => pushNotification()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Press for Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={showToastWithButton}>
        <Text style={styles.buttonText}>Toast with Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={showToastWithoutButton}>
        <Text style={styles.buttonText}>Toast without Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    width: 220,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Dashboardscreen;
