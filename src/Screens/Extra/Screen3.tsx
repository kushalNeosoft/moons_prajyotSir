import React, { lazy, Suspense } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
// import {useState} from 'react';
// import {Text, View} from 'react-native';

const Mapview = React.lazy(() => import('./comp/Mapview'));
const Screen3 = () => {
    return (
        <View style={{flex: 1}}>

            <Suspense fallback={<Text>Loading</Text>}>
                <Mapview />
            </Suspense>
            {/* <ActivityIndicator size="large" color="#00ff00" />  */}
        </View>


    )
}
export default Screen3;