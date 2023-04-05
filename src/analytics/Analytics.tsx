import React from 'react';
import {View, Text, Button} from 'react-native';
import analytics from '@react-native-firebase/analytics';

const Analytics = () => {
  return (
    <View>
      <View style={{marginVertical: 20, marginHorizontal: 30}}>
        <Button
          title="Add To Basket"
          onPress={async () => {
            const res = await analytics().logEvent('Cart', {
              id: 3745092,
            });
            console.log('Called the event.....', res);
          }}
        />
      </View>

      <View style={{marginVertical: 20, marginHorizontal: 30}}>
        <Button
          title="Register"
          onPress={async () => {
            const res = await analytics().logEvent('user_registration', {
              method: 'email',
              success: true,
            });
            console.log('Called the event.....', res);
          }}
        />
      </View>

      <View style={{marginVertical: 20, marginHorizontal: 30}}>
        <Button
          title="Membership"
          onPress={async () => {
            const res = await analytics().logEvent('app_purchase', {
              item_id: 'premium_membership',
              price: 9.99,
            });
            console.log('Called the event.....', res);
          }}
        />
      </View>
      <View style={{marginVertical: 20, marginHorizontal: 30}}>
        <Button
          title="Native"
          onPress={async () =>
            await analytics().logSelectContent({
              content_type: 'clothing',
              item_id: 'abcd',
            })
          }
        />
      </View>
    </View>
  );
};
export default Analytics;
