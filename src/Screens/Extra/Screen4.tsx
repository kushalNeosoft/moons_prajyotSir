import React, { lazy, Suspense } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
// import {useState} from 'react';
// import {Text, View} from 'react-native';

const Mic = React.lazy(() => import('./comp/Mic'));
const Screen4 = () => {
    return (
        <View style={{flex: 1}}>

            <Suspense fallback={<Text>Loading</Text>}>
                <Mic />
            </Suspense>
            {/* <ActivityIndicator size="large" color="#00ff00" />  */}
        </View>


    )
}

export default React.memo(Screen4);