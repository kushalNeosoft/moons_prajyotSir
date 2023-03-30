import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import PushNotification from 'react-native-push-notification';

const Dashboardscreen: React.FC = () => {
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
    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          height: 50,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}
        onPress={() => pushNotification()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Press for Notification
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboardscreen;
