import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface TOASTSERVICE {
  text1: string;
  text2?: string;
  onPress: () => void;
}

export const toastConfig = {
  toastWithButton: (props: TOASTSERVICE) => (
    <View style={styles.container}>
      <Text style={styles.textContent}>{props.text1}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => props.onPress()}>
        <Text style={styles.buttonText}>{props.text2}</Text>
      </TouchableOpacity>
    </View>
  ),

  toastWithoutButton: (props: any) => (
    <View style={styles.container}>
      <Text style={styles.textContent}>{props.text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '90%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonStyle: {
    height: 30,
    width: 150,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textContent: {
    color: 'white',
    fontWeight: 'bold',
  },
});
