import React, {useCallback, useImperativeHandle, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {colors} from '../../constants/colors';
import {styles} from './BottomSheetStyle'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

type BottomSheetProps = {
  onReturn: () => void;
  props: any;
};
export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  props: any;
};

const BottomSheet = React.forwardRef((props: any, ref) => {
  const [alphabetValue,setAlphabetValue]=useState('');
  const [percentageValue,setPercentageValue]=useState('');
  const [typeValue,setTypeValue]=useState('');
  const [priceValue,setPriceValue]=useState('');

  const alphabet=['A-Z','Z-A'];
  const price=['High to Low','Low to High']
  const type=['A-Z','Z-A']
  const percentage=['High to Low','Low to High']
  const translateY = useSharedValue(0);

  const context = useSharedValue({
    y: 0,
  });

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, {damping: 50});
  }, []);

  useImperativeHandle(ref, () => ({scrollTo}), [scrollTo]);

  const MAX_TRANSLATE_Y = -screenHeight ;

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -screenHeight / 2.5) {
        scrollTo(0);
      } else if (translateY.value < -screenHeight / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const reanimatedBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.bottomSheetContainer, reanimatedBottomSheetStyle]}>
        <View style={styles.line} />
        <View style={{height: 350, justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Alphabetically</Text>
          <FlatList 
          horizontal={true}
          data={alphabet}
          renderItem={(({item})=>(
            <TouchableOpacity onPress={()=>setAlphabetValue(item)} style={alphabetValue===item? styles.commonHtZSelected:styles.commonHtZUnSelected}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
          ))}
          />
          <Text style={styles.titleText}>Price</Text>
          <FlatList 
          horizontal={true}
          data={price}
          renderItem={(({item})=>(
            <TouchableOpacity onPress={()=>setPriceValue(item)} style={priceValue===item? styles.commonHtLSelected:styles.commonHtLUnSelected}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
          ))}
          />
          <Text style={styles.titleText}>Percentage</Text>
          <FlatList 
          horizontal={true}
          data={percentage}
          renderItem={(({item})=>(
            <TouchableOpacity onPress={()=>setPercentageValue(item)} style={percentageValue===item? styles.commonHtLSelected:styles.commonHtLUnSelected}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
          ))}
          />
          <Text style={styles.titleText}>Type</Text>
          <FlatList 
          data={type}
          horizontal={true}
          renderItem={(({item})=>(
            <TouchableOpacity onPress={()=>setTypeValue(item)} style={typeValue===item? styles.commonHtZSelected:styles.commonHtZUnSelected}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
          ))}
          />
        </View>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{color: colors.white}}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;
