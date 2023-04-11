import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, BackHandler, Alert } from "react-native";
import { Otpstyle } from "./Otpstyle";
import { Dropdown } from 'react-native-element-dropdown';
import Tabnavigation from "../../Navigation/Tabnavigation";
import { useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import RNExitApp from 'react-native-exit-app';


const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const Otp = () => {
    const [selectedTab, setSelectedTab] = useState(3);
   
    const [value, setValue] = useState(null);

    useFocusEffect(
        React.useCallback(()=>{
          const backAction = () => {
            Alert.alert("Stop", "Are you sure you want to exit ", [
              {
                text: 'Cancle',
                onPress: () => null,
                style: 'cancel'
              },
              {
                text: "Yes",
                onPress: () => RNExitApp.exitApp()
              }
            ]);
            return true;
          }
          const backHandler =  BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
          return () => backHandler.remove();
        },[]),
       )
    const urldf = 'https://reactnative.dev/img/tiny_logo.png';
    const storeimg = useSelector(state => state.Login.imgstore);
    return (
        <View style={Otpstyle.Maincontainer}>
            <View style={Otpstyle.Innermain}>
                <View style={Otpstyle.imgstylecon}>
                    <View style={Otpstyle.imgcontiner}>
                        <Image
                            style={Otpstyle.tinyLogo}
                            source={
                                storeimg == ''
                                    ? { uri: urldf }
                                    : { uri: storeimg }

                            }
                        />

                    </View>

                </View>
                <View style={Otpstyle.textcon}>
                    <Text style={Otpstyle.HeaderTxt}>OM</Text>
                    <Text style={Otpstyle.UserTxt}>User ID : OM</Text>
                    <Dropdown
                        style={Otpstyle.dropdown}
                        placeholderStyle={Otpstyle.Switchtxt}
                        selectedTextStyle={Otpstyle.selectedTextStyle}
                        inputSearchStyle={Otpstyle.inputSearchStyle}
                        iconStyle={Otpstyle.iconStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Switch Account"
                        value={value}
                        onChange={(item: string) => {
                            setValue(item.value);
                        }}

                    />
                </View>

            </View>
            <Tabnavigation />


        </View>
    )
}

export default Otp;
