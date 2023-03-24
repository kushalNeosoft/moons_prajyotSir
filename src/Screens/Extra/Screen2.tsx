import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function Screen2() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const isFocused = useIsFocused();
  const reorderList = useSelector(state => state.reorderList);

  useEffect(() => {
      setData(reorderList);
      setLoading(false);
  }, [isFocused]);
  const reorderedList = useSelector<any>(state => state.reorderList);
  console.log('ReorderList', reorderedList);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: 'black',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                }}>{`${item.id}--${item.companyName}`}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Screen2;
