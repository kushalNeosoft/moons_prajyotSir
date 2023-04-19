import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {assets} from '../../assets';
import {colors} from '../../constants/colors';
import {texts} from '../../constants/text';
import alignment from '../../utils/alignment';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import IndexModal from '../Modal';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MenuIcon, RupeeIcon,} from '../Svg/Svg';

function Header(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [niftyValue, setNiftyValue] = useState(true);
  const [sensexValue, setSenSexValue] = useState(true);
  const [otherValue, setOtherValue] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    if (niftyValue && sensexValue && otherValue) {
      showMessage({
        message: 'Information',
        description: 'Please select any two indices',
        type: 'danger',
      });
    }
  }, [niftyValue, sensexValue, otherValue]);

  const data = [
    {
      name: texts.NIFTY_50,
      value: '17755.00',
      change: '160.65',
      percentage: '+0.91%',
    },
    {
      name: texts.SENSEX,
      value: '60397.62',
      change: '588.65',
      percentage: '0.98%',
    },
  ];

  const onClose = () => {
    setModalVisible(prev => !prev);
  };

  const changeIndex = (text: any) => {
    switch (text) {
      case 'Nifty':
        setNiftyValue((prevState: any) => !prevState);
        break;
      case 'SenSex':
        setSenSexValue((prevState: any) => !prevState);
        break;
      case 'Other':
        setOtherValue((prevState: any) => !prevState);
        break;

      default:
        null;
    }
  };

  const renderIndexView = ({item}: any) => {
    return (
      <TouchableOpacity
        style={{alignItems: 'center',borderRightWidth:1,borderRightColor:"#E0E0E0"}}
        onPress={() => navigation.navigate('Constituents')}>
        <Text style={styles.titleText}>{item.name}</Text>
        <Text style={styles.titleText}>{item.value}</Text>
        <Text
          style={
            styles.changePercentage
          }>{`${item.change}(${item.percentage})`}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <IndexModal
        visible={modalVisible}
        onClose={onClose}
        changeIndex={changeIndex}
        niftyValue={niftyValue}
        sensexValue={sensexValue}
        otherValue={otherValue}
      />
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MenuIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.headerMiddle}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={renderIndexView}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <RupeeIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(prev => !prev)}>
            <Ionicons name="md-settings-sharp" size={20} color={'black'}/>
          </TouchableOpacity>
        </View>
      </View>
      <FlashMessage
        position={'top'}
        animated={true}
        animationDuration={1000}
        floating={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0.55,
  },
  image: {
    height: 20,
    width: 20,
  },
  titleText: {
    fontWeight: 'bold',
    color: colors.black,
    paddingHorizontal: 40,
  },
  changePercentage: {
    color: colors.bright_green,
  },
  headerLeft: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:"center",
  },
  headerMiddle: {
    flex: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    padding:5
  },
  headerRight: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'space-around',
    alignItems:"center"
  },
});

export default Header;
