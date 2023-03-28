import {Image, Text, TouchableNativeFeedback, View} from 'react-native';
import React from 'react';

import {Platform} from 'react-native';
import Share from 'react-native-share';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';
const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
const options = Platform.select({
  default: {
    title,
    subject: title,
    message: `${message} ${url}`,
    url: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
  },
});

const ShareScreen = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          flex: 1,
          padding: 16,
          margin: 16,
          borderWidth: 2,
          borderRadius: 16,
        }}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
          {message}
        </Text>

        <Image
          source={{
            uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
          }}
          style={{
            width: '100%',
            height: undefined,
            resizeMode: 'contain',
            aspectRatio: 1,
            // aspectRatio: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 16,
            borderRadius: 16,
          }}
        />
      </View>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#90CAF9', false)}
        onPress={() => {
          Share.open(options);
        }}
        // disabled={socketStatus === SocketStatus.CONNECTED}
      >
        <View style={{paddingHorizontal: 16, paddingVertical: 16}}>
          <Text>Sample</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
export default ShareScreen;
