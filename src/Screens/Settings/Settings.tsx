import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, TouchableOpacity,Text} from 'react-native';

import {LanguageModal} from './LanguageSettings';
import {SettingsScreenStyle} from './Settings.style';

export const Settings: React.FC = () => {
  const {t} = useTranslation();

  const [langModalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');

  const onLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
  };

  React.useEffect(() => {
    const checkAsync = async () => {
      const value = await AsyncStorage.getItem('APP_LANG');
      if (value !== undefined && value !== null) {
        setSelectedLang(value);
      } else {
        setSelectedLang('en');
      }
    };
    checkAsync();
  }, []);

  return (
    <View style={SettingsScreenStyle.rootContainer}>
      <View style={SettingsScreenStyle.optionContainer}>
        <TouchableOpacity
          onPress={() => {
            setLangModalVisible(!langModalVisible);
          }}>
          <View style={{flexDirection:"row",}}>
            <View style={SettingsScreenStyle.leftAlignContainer}>
              <Text style={SettingsScreenStyle.labelText} >
                {t('SELECT_LANGUAGE')}
              </Text>
            </View>
            <View style={SettingsScreenStyle.rightAlignContainer}>
              <Text style={SettingsScreenStyle.valueText}>{selectedLang}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <LanguageModal
          modelVisibility={langModalVisible}
          setModelVisibility={setLangModalVisible}
          onLanguageSelection={onLanguageChange}
          selectedLanguage={selectedLang}
        />
      </View>
    </View>
  );
};
