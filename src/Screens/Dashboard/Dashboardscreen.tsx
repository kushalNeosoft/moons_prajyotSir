import { Text, View } from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';


const Dashboardscreen: React.FC  = () => {
  const {t} = useTranslation();
  return(
    <View>
        <Text>{t('FUNDS')}</Text>
    </View>
  )
};

export default Dashboardscreen;
