import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addKeyValue} from '../redux/Action';

const HashMap = () => {
  const [key, setKey] = useState<string>('');
  const [value, setValue] = useState<string>('');
  let dictionary: any = useSelector(state => state?.dictionary);
  const dispatch = useDispatch();

  const addPair = () => {
    if (key != '' && value != '') {
      dispatch(addKeyValue(key, value));
      setKey('');
      setValue('');
      console.log(dictionary);
    } else {
      console.log(dictionary);
    }
  };
  const renderKeyValuePair = ({item}) => {
    return (
      <View style={{alignSelf: 'center', marginVertical: 20}}>
        <Text style={{fontSize: 25, color: 'black'}}>
          {item.key}: {item.value}
        </Text>
      </View>
    );
  };
  const data = Object.keys(dictionary).map(key => ({
    key,
    value: dictionary[key],
  }));

  return (
    <View>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Key"
        placeholderTextColor="#9a73ef"
        value={key}
        onChangeText={data => {
          setKey(data);
        }}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Value"
        placeholderTextColor="#9a73ef"
        value={value}
        onChangeText={data => {
          setValue(data);
        }}
      />
      <TouchableOpacity
        style={styles.botton}
        onPress={() => {
          addPair();
        }}>
        <Text style={styles.bottonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderKeyValuePair}
        keyExtractor={item => item.key}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    margin: 20,
    height: 50,
    borderColor: '#7a42f4',
    borderWidth: 1.5,
    color: 'black',
    width: '80%',
    borderRadius: 10,
  },
  botton: {
    marginTop: 20,
    backgroundColor: '#7a42f4',
    width: '80%',
    alignSelf: 'center',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  bottonText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default HashMap;
