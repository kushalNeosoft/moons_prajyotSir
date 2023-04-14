import React, { useEffect, useState, useCallback, useRef, useContext, Suspense } from 'react';
import { Alert, BackHandler, Image, LogBox } from 'react-native';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import DotModal from '../../Component/DotModal/DotModal';
import Header from '../../Component/Header/Header';
import NorModal from '../../Component/NorModal/NorModal';
import TrendModal from '../../Component/TrendModal/TrendModal';
import { colors } from '../../constants/colors';
import { texts } from '../../constants/text';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { assets } from '../../assets';
import alignment from '../../utils/alignment';
import { styles } from './StockDetailsStyle';
import DeleteModal from '../../Component/DeleteModal/DeleteModal';
import BottomSheet, { BottomSheetRefProps } from '../../Component/BottomSheet/BottomSheet';
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import CarouselList from '../../Component/CarouselList/CarouselList';
import { ListItemProps } from '../../Component/CarouselList/type';
import RNExitApp from 'react-native-exit-app';



// const screenHeight = Dimensions.get('window').height;
// interface StockListProps {
//   navigation: any;
// }

LogBox.ignoreAllLogs();




const StockLazy = React.lazy(() => import('./stockcomp/StockLazy'));
const StockDetails = () => {
    return (
        <View style={{flex: 1}}>

            <Suspense fallback={<Text>Loading</Text>}>
                <StockLazy />
            </Suspense>
            {/* <ActivityIndicator size="large" color="#00ff00" />  */}
        </View>


    )
}

export default React.memo(StockDetails);




