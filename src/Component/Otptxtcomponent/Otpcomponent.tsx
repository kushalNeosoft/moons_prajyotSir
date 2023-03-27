import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

import { Otpstyle } from "../../Screens/OTP/Otpstyle";
import Textinputfield from "../TextInput";
import { Styleotp } from "./Styleotp";
import DropdownComponent from "../Dropdown/Dropdown";
import { useNavigation } from "@react-navigation/native";


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

let currentOtpIndex: number = 0;
const Otpcomponent = () => {
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    const [activeOTPindex, setActiveOTPIndex] = useState<number>(0);
    const [value, setValue] = useState(null);
    const navigation = useNavigation();

    const inputref = useRef<any>(null);

    const handelonchange = (index: number, val: string) => {
     
        const tempOtpArray = otp?.concat();
        tempOtpArray[index] = val.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '');
        if (!val) {
            if (activeOTPindex > 0) {
                setActiveOTPIndex(index - 1)
            }
        }
        else setActiveOTPIndex(index + 1)
        setOtp(tempOtpArray);
        if(activeOTPindex===3){
            navigation.navigate('StockDetails')
        }
        
    }

    // const handelonchange = (val:any) => {
    //     console.log("pppp------->", currentOtpIndex);
    //     console.log("val------->", val);
    //     const tempOtpArray = otp?.concat();
    //     tempOtpArray[currentOtpIndex] = val.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '');
    //     if (!val) {
    //         if (activeOTPindex > 0) {
    //             setActiveOTPIndex(currentOtpIndex - 1)
    //         }
    //     }
    //     else setActiveOTPIndex(currentOtpIndex + 1)
    //     setOtp(tempOtpArray);

    // }
    // console.log(otp.length,"hdhdhdhdhdh----->");
    // if(otp.length==4)
    // {
    //     navigation.navigate('StockDetails')
    // }
    

    const otpvalidtion =()=>{
        console.log('')

    }


    useEffect(() => {
       
        if (activeOTPindex < otp.length) {
            inputref.current.focus();
            if(activeOTPindex==4&&6){
                otpvalidtion()
            }
        }

    }, [activeOTPindex])

    // const handelonKeyDown=(index:number,event:any)=>{
    //     console.log("KAKAKAKAK----------------->",event);


    //      if(event=== 'Backspace') setActiveOTPIndex(index-1)._root().focus()

    // }

    // const onOtpKeyPress = (index: number, event: any) => {
    //     // auto focus to previous InputText if value is blank and existing value is also blank
    //     console.log(event, "SSSSSSSSS->>>>>>>>");
    //     console.log(index, "index->>>>>>>>");
    //     console.log(event === 'Backspace' && otp[index] === '', "SSSSSSSSS->>>>>>>>", typeof(otp[index]).length);
    //     // focusPrevious(key, index) {
    //     //     if (key === 'Backspace' && index !== 0)
    //     //         this.otpTextInput[index - 1]._root.focus();
    //     // }
    //     if (event === 'Backspace' && index !== 0) {
            
    //         setActiveOTPIndex(index-1)
            
    //     }
    // };



    return (
        <View style={Styleotp.Maincon}>
            <View >
                <Text style={Styleotp.styletxt}>Enter M-Pin</Text>
                <View style={{ flexDirection: "row", marginTop: "5%" }}>
                    {otp.map((_, index) => {
                        return (

                            <React.Fragment key={index}>
                                <View style={Styleotp.TextInputstyle}>
                                    <TextInput
                                        secureTextEntry
                                        ref={index === activeOTPindex ? inputref : null}
                                        keyboardType='number-pad'
                                        textAlign={'center'}
                                        value={otp[index]}
                                        maxLength={1}
                                        onChangeText={val => handelonchange(index, val)}
                                        // onKeyPress={event => handelonKeyDown(index,event.nativeEvent)}
                                        // onKeyPress={event => onOtpKeyPress(index, event.nativeEvent)}
                                    />


                                </View>
                                {index === otp.length - 1 ? null : (
                                    <View style={{ height: "3%", width: '3%' }} />
                                )}
                            </React.Fragment>

                        );
                    })}

                </View>
            </View>
            <View style={Styleotp.Buttonstyle}>
                <View style={{ flexDirection: "row" }}>
                    <Text>Take Me To </Text>

                        <Text style={Styleotp.pinstyle} > Watchlist</Text>
                        <Dropdown
                        style={Otpstyle.dropdown}
                        placeholderStyle={Styleotp.pinstyle}
                        selectedTextStyle={Otpstyle.selectedTextStyle}
                        inputSearchStyle={Otpstyle.inputSearchStyle}
                        iconStyle={Otpstyle.iconStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Watchlist"
                        value={value}
                        onChange={(item:string) => {
                            setValue(item.value);
                        }}
                        
                    />
                </View>
                <TouchableOpacity>
                    <View>

                        <Text style={Styleotp.pinstyle}>Forgot M-Pin ?</Text>

                    </View>
                </TouchableOpacity>
            </View>

            <View style={Styleotp.stickbottom}>
                <View>
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque exercitationem esse placeat, voluptatibus a aperiam sunt nihil quas deleniti, mollitia id vero hic facilis magnam. Recusandae facere minima ipsam est.
                    </Text>

                </View>
                <View style={Styleotp.stickbottomtwo}>
                    <View>
                        <TouchableOpacity>
                            <Text style={Styleotp.pinstyle}> View Exchange Timinings</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={Styleotp.pinstyle}> About Us</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </View>
    )
}

export default Otpcomponent;