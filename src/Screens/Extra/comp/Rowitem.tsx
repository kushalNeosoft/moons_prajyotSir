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
  

const RowItem=({item, drag}: any)=> {
  
    return (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => console.log('Index', item.id)}
            onLongPress={drag}
            style={[
              styles.row,
              {backgroundColor: 'black', height: 100, marginVertical: 10},
            ]}>
            <Text style={styles.text}>{`${item.id}--${item.companyName}`}</Text>
          </TouchableOpacity>
    );
  }
  
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

  export default RowItem;
  