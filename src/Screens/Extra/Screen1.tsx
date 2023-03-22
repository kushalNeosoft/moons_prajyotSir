import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View,Text} from 'react-native';

function Screen1(){

    const isFocused=useIsFocused()
    useEffect(()=>{
        console.log('Screen1 mounted')
    },[isFocused])
    return(
        <Text>Screen1</Text>
    )
}

export default Screen1;