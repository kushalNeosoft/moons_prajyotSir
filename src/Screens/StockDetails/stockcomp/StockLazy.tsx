import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useContext,
} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  LogBox,
  Pressable,
  StyleSheet,
} from 'react-native';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';

import DotModal from '../../../Component/DotModal/DotModal';
import Header from '../../../Component/Header/Header';
import NorModal from '../../../Component/NorModal/NorModal';
import TrendModal from '../../../Component/TrendModal/TrendModal';
import {texts} from '../../../constants/text';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {assets} from '../../../assets';
import alignment from '../../../utils/alignment';

import DeleteModal from '../../../Component/DeleteModal/DeleteModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../../Component/BottomSheet/BottomSheet';
import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import CarouselList from '../../../Component/CarouselList/CarouselList';
import {ListItemProps} from '../../../Component/CarouselList/type';
import RNExitApp from 'react-native-exit-app';
import BuySell from '../../BuySell/BuySell';
import {colors} from '../../../constants/colors';

// import BuySell from '../BuySell/BuySell';
// import ThemeContext from '../../context/AppContext';

const screenHeight = Dimensions.get('window').height;
interface StockListProps {
  navigation: any;
}

const StockLazy = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [stockData, setStockData] = useState<ListItemProps[]>([]);
  const [norModalVisible, setNorModalVisible] = useState(false);
  const [trendModalVisible, setTrendModalVisible] = useState(false);
  const [dotModalVisible, setDotModalVisible] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [carouselView, setCarouselView] = useState(false);
  //const {globalTheme,toggleTheme}=useContext(ThemeContext)
  //console.log('Themes',globalTheme,toggleTheme)
  const ref = useRef<BottomSheetRefProps>(null);
  const navigation = useNavigation();
  const listRef = useRef(0);
  const toggleRef = useRef(true);

  useEffect(() => {
    pushStockData();

    // const changeData=setInterval(()=>{

    // },2000)

    // return()=>clearInterval(changeData)
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      };
    }, []),
  );

  const cinfirmCLode = () => {
    RNExitApp.exitApp();
    setModalVisible(!modalVisible);
  };

  const handleBackButton = () => {
    setModalVisible(true);
    return true; // Returning true prevents the app from closing
  };

  const onPress = useCallback(() => {
    ref?.current?.scrollTo(-500);
  }, []);

  const componentHeaderBlock = () => {
    return (
      <View style={styles.headerComponentView}>
        <TouchableOpacity
          onPress={() => setNorModalVisible(true)}
          style={{flexDirection: 'row', flex: 1.4}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {texts.NOR}
          </Text>
          <View style={{justifyContent: 'flex-end', marginLeft: '5%'}}>
            <Ionicons name="ios-caret-down-sharp" size={15} color={'black'} />
          </View>
        </TouchableOpacity>
        <View style={styles.headerFlexEndView}>
          <TouchableOpacity onPress={() => setTrendModalVisible(true)}>
            <MaterialIcons name="offline-bolt" color={'orange'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth: 1, borderRadius: 20}}>
            <Text style={styles.addText}>{texts.ADD}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <FontAwesome5 name="sliders-h" color={'black'} size={23} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDotModalVisible(true)}>
            <Entypo name="dots-three-vertical" color={'black'} size={23} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onPressItem = (index: any) => {
    // navigation.dispatch(
    //   CommonActions.navigate({
    //     name: 'BuySell',
    //     params: {
    //       data: "MRF",
    //     },
    //   }),
    // );
    listRef.current = index;
    setCarouselView(true);
  };

  const renderListView = ({item, index}: any) => {
    return (
      <TouchableOpacity style={styles.stock} onPress={() => onPressItem(index)}>
        <View style={{flex: 4}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{fontWeight: 'bold', color: colors.black, fontSize: 20}}>
              {item.companyName}
            </Text>
            <View
              style={{
                marginLeft: '5%',
                marginTop: '3%',
                height: '50%',
                width: '13%',
                backgroundColor: '#E0E0E0',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
              }}>
              <Text style={styles.index}>{item.index}</Text>
            </View>
          </View>
          <View>
            <Fontisto name="pie-chart-2" size={15} color={'black'} />
          </View>
        </View>
        <View style={{flex: 2.9}}>
          <View
            style={
              colorChange
                ? styles.stockContainerPositive
                : styles.stockContainerNegative
            }>
            <Text style={styles.stockPriceText}>{item.value}</Text>
            <Text
              style={{
                color: colors.bright_green,
              }}>{`${item.dayValue}(+${item.percentage}%)`}</Text>
          </View>
        </View>
        <View style={{flex: 0.85, alignItems: 'center', paddingTop: 10}}>
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

  const onCloseCarousel = () => {
    setCarouselView(false);
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Header />
      {componentHeaderBlock()}
      <View style={{height: screenHeight - 200}}>
        <FlatList data={stockData} renderItem={renderListView} />
      </View>
      {carouselView ? (
        <CarouselList
          listData={stockData}
          index={listRef.current}
          onCloseCarousel={onCloseCarousel}
        />
      ) : null}
      <NorModal
        visible={norModalVisible}
        onClose={onNorClose}
        showDeleteModal={showDeleteModal}
      />
      <TrendModal visible={trendModalVisible} onClose={onTrendClose} />
      <DotModal
        visible={dotModalVisible}
        onClose={onDotModalClose}
        stockDataList={stockData}
      />
      <BottomSheet ref={ref} />
      <DeleteModal visible={deleteModal} onClose={onDeleteClose} />
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flex: 1.5, height: '100%', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  marginTop: '15%',
                  fontWeight: 'bold',
                  marginBottom: '20%',
                }}>
                Wave 2
              </Text>
              <AntDesign name="exclamationcircle" size={40} color="grey" />
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                flex: 3,
                height: '100%',
                paddingBottom: '5%',
              }}>
              <Text style={styles.modalText}>Do you want to exit the app?</Text>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={cinfirmCLode}>
                  <Text style={styles.textStyle}>Confirm</Text>
                </Pressable>
                <Pressable
                  style={[styles.buttontwo, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyletwo}>Cancle</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

export default StockLazy;
export const styles = StyleSheet.create({
  stock: {
    height: 70,
    flex: 1.5,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  endT: {
    borderWidth: 1.5,
    height: 30,
    width: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  endTtext: {
    fontWeight: 'bold',
    color: 'black',
  },
  stockPriceText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  stockContainerPositive: {
    alignItems: 'flex-end',
    // justifyContent: 'center',
    // backgroundColor: '#e6ffe6',
  },
  stockContainerNegative: {
    alignItems: 'flex-end',
    // backgroundColor: '#ffe6e6',
  },
  index: {
    color: 'balck',
    fontSize: 10,
    fontWeight: 'bold',
  },
  headerComponentView: {
    height: '7%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  addText: {
    paddingHorizontal: 13,
    paddingVertical: 5,
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  notificationView: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    backgroundColor: 'orange',
  },
  icon: {
    height: 25,
    width: 25,
  },
  headerFlexEndView: {
    flex: 1,
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chipScrollView: {
    position: 'absolute',
    paddingHorizontal: 10,
    top: 250,
  },
  centeredView: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    flexDirection: 'row',
    margin: 30,
    height: Dimensions.get('window').height * 0.2,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 5,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    height: 30,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000080',
  },
  buttontwo: {
    borderRadius: 20,
    height: 30,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000080',
    backgroundColor: 'white',
  },
  buttonOpen: {},
  buttonClose: {},
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyletwo: {
    color: '#000080',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
