import {
    Image,
    ScrollView,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import Voice from '@react-native-community/voice';
import Screen3 from './Screen3';
  
  const Screen4 = () => {
    const [pitch, setPitch] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState('');
    const [started, setStarted] = useState(false);
    const [results, setResults] = useState([]);
    const [partialResults, setPartialResults] = useState([]);
  
    const onSpeechStart = (e: any) => {
      setStarted(true);
    };
    const onSpeechEnd = () => {
      setStarted(false);
      setEnd('True');
    };
    const onSpeechError = (e: any) => {
      setError(JSON.stringify(e.error));
    };
    const onSpeechResults = (e: any) => {
      setResults(e.value);
    };
    const onSpeechPartialResults = (e: any) => {
      setPartialResults(e.value);
    };
    const onSpeechVolumeChanged = (e: any) => {
      setPitch(e.value);
    };
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
  
    const startSpeechRecognizing = async () => {
      setPitch('');
      setError('');
      setStarted(false);
      setResults([]);
      setPartialResults([]);
      setEnd('');
      try {
        Voice.start('en-US');
      } catch (e) {
        console.error(e);
      }
    };
    const stopSpeechRecognizing = async () => {
      try {
        await Voice.stop();
        setStarted(false);
      } catch (e) {
        console.error(e);
      }
    };
  
    useEffect(() => {
      console.log('Printing : ' + partialResults);
    }, [partialResults]);
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            // flex: 1,
            height:'50%',
            padding: 16,
            margin: 16,
            borderWidth: 1,
            borderRadius: 16,
          }}>
          <ScrollView style={{flex: 1}}>
            {partialResults.map((result, index) => {
              return (
                <Text key={`partial-result-${index}`} style={{}}>
                  {result}
                </Text>
              );
            })}
          </ScrollView>
        </View>
  
        <View
          style={{
            borderRadius: 40,
            overflow: 'hidden',
            width: 80,
            height: 80,
            margin: 16,
            alignSelf: 'center',
          }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#90CAF9', true)}
            onPress={() => {
              if (started) stopSpeechRecognizing();
              else startSpeechRecognizing();
            }}
            // disabled={socketStatus === SocketStatus.CONNECTED}
          >
            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 16,
                borderColor: 'lightgrey',
                backgroundColor: started ? 'red' : 'grey',
                width: 80,
                height: 80,
                borderRadius: 40,
              }}>
              <Image
                source={require('../../../assets/mic.png')}
                style={{width: 48, height: 48}}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  };
  
  export default Screen4;