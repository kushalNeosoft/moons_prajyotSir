import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

interface CustomHeaderProps {
    title: string;
    leftComponent?: React.ReactNode;
    centerComponent?: React.ReactNode;
    rightComponent?: React.ReactNode;
  }

  const CustomHeader = ({ title, leftComponent, centerComponent, rightComponent }: CustomHeaderProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.left}><Ionicons name="arrow-back" size={30} color={"black"}/></View>
        <View style={styles.center}>{centerComponent ? centerComponent : <Text style={styles.title}>{title}</Text>}</View>
        <View style={styles.right}>{rightComponent}</View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: 56,
      backgroundColor: '#fff',
    },
    left: {
      flex: 1,
      justifyContent: 'center',
    },
    center: {
      flex: 3,
      alignItems: 'center',
    },
    right: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#000',
    },
  });
  
  export default CustomHeader;
