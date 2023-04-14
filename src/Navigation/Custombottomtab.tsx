import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import StockDetails from '../Screens/StockDetails/StockDetails';
import Screen1 from '../Screens/Extra/Screen1';
import Screen2 from '../Screens/Extra/Screen2';
import Screen3 from '../Screens/Extra/Screen3';
import Screen4 from '../Screens/Extra/Screen4';

function CustomBottom() {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const screens = ['StockDetails', 'Screen1', 'Screen2', 'Screen3', 'Screen4'];

  const onPressSelectedBtn = (key: any) => {
    setSelectedBtn(key)
;
  };

  const renderView = (key: any) => {
    switch (key)
 {
      case screens[0]:
        return <StockDetails/>
      case screens[1]:
        return <Screen1 />;
      case screens[2]:
        return <Screen2 />;
      case screens[3]:
        return <Screen3 />;
      case screens[4]:
        return <Screen4 />;
    }
  };

  return (
    <View style={{flex: 1}}>
      <View>{renderView(screens[selectedBtn])}</View>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'yellow',
          height: 50,
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        {screens.map((item, key) => (
          <TouchableOpacity key={key} onPress={() => onPressSelectedBtn(key)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default CustomBottom;