/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback, useRef} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import DotModal from '../../Component/DotModal/DotModal';
import Header from '../../Component/Header/Header';
import NorModal from '../../Component/NorModal/NorModal';
import TrendModal from '../../Component/TrendModal/TrendModal';
import {colors} from '../../constants/colors';
import {texts} from '../../constants/text';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// import StockDetailsList from '../../components/StockDetailsList/StockDetailsList';
import {assets} from '../../assets';
import alignment from '../../utils/alignment';
import {styles} from './StockDetailsStyle';
import DeleteModal from '../../Component/DeleteModal/DeleteModal';
// import StockPickModal from '../../components/StockDetailsList/StockPickModal';
import BottomSheet, { BottomSheetRefProps } from '../../Component/BottomSheet/BottomSheet';
import {CommonActions} from '@react-navigation/native';



const screenHeight = Dimensions.get('window').height;
interface StockListProps {
  navigation: any;
}

function StockDetails({navigation}: StockListProps) {
  const [stockData, setStockData] = useState<any>([]);
  const [norModalVisible, setNorModalVisible] = useState(false);
  const [trendModalVisible, setTrendModalVisible] = useState(false);
  const [dotModalVisible, setDotModalVisible] = useState(false);
  const [showFlat, setShowFlat] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const ref = useRef<BottomSheetRefProps>(null);

  
  
  

  useEffect(() => {
    pushStockData();
  }, []);

  // useEffect(()=>{
  //   const timer=setInterval(()=>{
  //     setColorChange(prevState=>!prevState)
  //   },1000)

  //   return ()=>clearInterval(timer)
  // },[colorChange])

  const onPress = useCallback(() => {
    ref?.current?.scrollTo(-500);
  }, []);

  const componentHeaderBlock = () => {
    return (
      <View style={styles.headerComponentView}>
        <TouchableOpacity onPress={() => setNorModalVisible(true)}>
          <Text>{texts.NOR}</Text>
        </TouchableOpacity>
        <View style={styles.headerFlexEndView}>
          <TouchableOpacity
            style={styles.notificationView}
            onPress={() => setTrendModalVisible(true)}
          />
          <TouchableOpacity style={{borderWidth: 1, borderRadius: 20}}>
            <Text style={styles.addText}>{texts.ADD}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Image source={assets.filter} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDotModalVisible(true)}>
            <Image source={assets.options} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderListView = ({item, index}: any) => {
    return (
      <TouchableOpacity style={styles.stock} onPress={() => {
        navigation.dispatch(
          CommonActions.navigate({
            name: 'BuySell',
            params: {
              data: "MRF",
            },
          }),
        );
      }}>
        <View style={{...alignment.row}}>
          <Text style={{fontWeight: 'bold',color:colors.black,fontSize:17}}>{item.companyName}</Text>
          <Text style={styles.index}>{item.index}</Text>
        </View>
        <View
          style={[
            styles.stockContainer,
            // {backgroundColor: colorChange ? '#DAF7A6' : '#FFB6C1'},
          ]}>
          <Text style={styles.stockPriceText}>{item.value}</Text>
          <Text
            style={{
              color: colors.bright_green,
            }}>{`${item.dayValue}(+${item.percentage}%)`}</Text>
          <TouchableOpacity style={styles.endT}>
            <Text style={styles.endTtext}>T</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const pushStockData = () => {
    let StockArraydata = [];
    for (let i = 0; i < 20; i++) {
      StockArraydata.push({
        companyName: Math.floor(Math.random() * 99),
        index: 'NSE',
        value: Math.floor(Math.random() * 999),
        dayValue: '35.15',
        percentage: '1.65',
        id: i,
      });
    }
    setStockData(StockArraydata);
    setTimeout(() => {
      console.log('Length',stockData.length)
    }, 5000);
  };

  const onNorClose = () => {
    setNorModalVisible(prevState => !prevState);
  };

  const onTrendClose = () => {
    setTrendModalVisible(prevState => !prevState);
  };

  const onDotModalClose = () => {
    setDotModalVisible(prevState => !prevState);
  };

  const onDeleteClose = () => {
    setDeleteModal(prevState => !prevState);
  };

  const showDeleteModal = () => {
    setDeleteModal(prevState => !prevState);
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Header />
      {componentHeaderBlock()}
      <View style={{height: screenHeight - 200}}>
        <FlatList data={stockData} renderItem={renderListView} />
      </View>
      {/* {showFlat ? <StockPickModal /> : null} */}
      <NorModal
        visible={norModalVisible}
        onClose={onNorClose}
        showDeleteModal={showDeleteModal}
      />
      <TrendModal visible={trendModalVisible} onClose={onTrendClose} />
      <DotModal visible={dotModalVisible} onClose={onDotModalClose} />
      <BottomSheet ref={ref} />
      <DeleteModal visible={deleteModal} onClose={onDeleteClose} />
    </GestureHandlerRootView>
  );
}

export default StockDetails;
