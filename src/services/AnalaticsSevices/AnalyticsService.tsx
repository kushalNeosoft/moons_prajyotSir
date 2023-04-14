import React from 'react';
import {View, Text} from 'react-native';
import analytics from '@react-native-firebase/analytics';

async function AnalyticsService(title: string, obj: {}) {
  const res = await analytics().logEvent(title, obj);
  return res;
}
export default AnalyticsService;
