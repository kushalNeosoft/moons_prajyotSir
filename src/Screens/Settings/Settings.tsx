import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, TouchableOpacity,Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFont, decFont } from '../../Redux/Action';

import {LanguageModal} from './LanguageSettings';
import {SettingsScreenStyle} from './Settings.style';

export const Settings: React.FC = () => {
  const {t} = useTranslation();
  const dispatch=useDispatch();

  const [langModalVisible, setLangModalVisible] = useState(false);
  const [disable, setDisable] = useState(false);
  // const [count, setCount] = useState(15);
  const [selectedLang, setSelectedLang] = useState('en');
  const newcount = useSelector(state => state.Login.counter);

  const onLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
  };

  const incrementCount = () => {
    
    dispatch(addFont({counter:newcount+1}))
    
  };

  const decrementCount = () => {
    
    dispatch(decFont({counter:newcount-1}))
    
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

      <View style={SettingsScreenStyle.incdeccon}>
        <TouchableOpacity onPress={incrementCount} disabled={newcount>25?true:false}>
        <View style={SettingsScreenStyle.incdecbtn}>
          <Text style={SettingsScreenStyle.txtdes}>+</Text>
        </View>
        </TouchableOpacity>
        <Text style={SettingsScreenStyle.counttxt}>{newcount}</Text>
        <TouchableOpacity onPress={decrementCount} disabled={newcount<16?true:false}>
        <View style={SettingsScreenStyle.incdecbtn}>
          <Text style={SettingsScreenStyle.txtdes}>-</Text>
        </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};
