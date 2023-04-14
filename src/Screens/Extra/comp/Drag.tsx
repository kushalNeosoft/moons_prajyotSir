import React, {
    useState,
    useRef,
    useCallback,
    useEffect,
  } from 'react';
  import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
  import DraggableFlatList from 'react-native-draggable-flatlist';
  import {Button} from 'react-native';
import { useDispatch } from 'react-redux';
// import { reorderList } from '../../Redux/Action';
import { reorderList } from '../../../Redux/Action';
import { useNavigation } from '@react-navigation/native';
import RowItem from './Rowitem';


const Drag =(props: any)=>{
    const [data, setData] = useState<any>();
    const [loading,setLoading]=useState(true)
    const itemRefs = useRef(new Map());

    const dispatch=useDispatch()
    const navigation=useNavigation<any>()

    const dispatchAndNavigate=()=>{
        dispatch(reorderList(data))
        navigation.navigate('Screen2')
    }
  
    useEffect(()=>{
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
        setData(StockArraydata);
        setLoading(false)
      };
      pushStockData()
    },[])
  
  
    const renderItem = useCallback((params: any) => {
  
      return (
        <RowItem {...params} itemRefs={itemRefs} />
      );
    }, []);
  
    return (
      <View style={{flex: 1}}>
        {loading ? (
          <ActivityIndicator size={'large'} color={'red'} />
        ) : (
          <View style={styles.container}>
            <Button title="Press" onPress={() =>dispatchAndNavigate()} />
            <DraggableFlatList
              keyExtractor={(item: any) => item.id}
              data={data}
              renderItem={renderItem}
              onDragEnd={({data}) => setData(data)}
              activationDistance={20}
            />
          </View>
        )}
      </View>
    );
}

export default Drag;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
    },
    text: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 32,
    },
    underlayRight: {
      flex: 1,
      backgroundColor: 'teal',
      justifyContent: 'flex-start',
    },
    underlayLeft: {
      flex: 1,
      backgroundColor: 'tomato',
      justifyContent: 'flex-end',
    },
  });
  