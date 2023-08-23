import React, {useEffect, useState} from 'react';
//import {View, Text} from 'react-native';
import {Cfont, Font, root} from '../../../styles/colors';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CommonModal from '../../../components/CommonModal/CommonModal';
import CommonModalone from '../../../components/CommonModal/CommonModalone';
import CommonModaltwo from '../../../components/CommonModal/CommonModaltwo';
import CalendarPicker from 'react-native-calendar-picker';
import {Calendar} from 'react-native-calendars';
import MarketScreen from '../../Market/MarketScreen';
import {marketScreen, NormodalStyle} from '../../../theme/light';
import Crossbutton from '../../../components/Button/Crossbutton';
import CommonModalBig from '../../../components/CommonModal/CommonModalBig';

const SelectGTDDateDialog = (props: any) => {
  const [date, setDate] = useState<Date>();
  const [gtdDays, setGtdDays] = useState(4);

  useEffect(() => {
    if (date != null) {
      const today = new Date();

      const one_day = 1000 * 60 * 60 * 24;
      let result;
      result = Math.ceil((date.getTime() - today.getTime()) / one_day);

      setGtdDays(result);
    }
  }, [date]);
const weekdays=["S","M","T","W","T","F","S"]
  return (
    <CommonModalBig visible={props.visible} onClose={props.onClose}>
      <View style={{flexDirection:'row',justifyContent:"flex-end"}}>
          <Crossbutton onClose={props.onClose} size={29}/>
        </View>
      <View style={{width: '100%'}}>
        <Text
          style={{
            fontSize: Font.font_title,
            fontFamily: Cfont.rubik_medium,
            color: root.color_text,
          }}>
          Choose Start Date
        </Text>
        <View style={{alignItems: 'flex-end'}}>
          {/* <Text  style={{
            //fontSize: Font.font_title,
            fontFamily: Cfont.rubik_medium,
            color: root.color_text,
          }}>GTD DAYS: {gtdDays}</Text> */}
        </View>
        <View style={{height: 16}} />
        <CalendarPicker
        
        weekdays={weekdays}
       previousTitle={'Augst'}
       nextTitle={"GTD DAYS :"}
       nextComponent={<><Text  style={{
        //fontSize: Font.font_title,
        fontFamily: Cfont.rubik_medium,
        color: root.color_text,
      }}>GTD DAYS: {gtdDays}</Text></>}
        textStyle={{fontFamily:Cfont.rubik_medium,color:root.color_text}}
        selectedDayStyle	={{backgroundColor:root.client_background}}
        selectedDayTextColor={root.color_active}
          onDateChange={(d: any) => {
            setDate(new Date(d));
          }}
        />

        <View style={{borderRadius: 15, overflow: 'hidden'}}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#90CAF9', false)}
            onPress={() => {
              props.onChange(date);
            }}>
            <View
              style={{
                borderRadius: 12,
                marginTop: 16,
                backgroundColor: root.client_background,
                paddingHorizontal: 24,
                paddingVertical: 12,
              }}>
              <Text style={{fontSize: 16, color: 'white', textAlign: 'center'}}>
                Done
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </CommonModalBig>
  );
};
export default SelectGTDDateDialog;
