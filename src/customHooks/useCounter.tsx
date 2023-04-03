import React, {useState} from 'react';
import {View, Text} from 'react-native';

function useCounter({initialCount = 0}) {
  const [count, setCounter] = useState(initialCount);

  function setCount(type: string = '', value: number = 1) {
    if (type?.toString()?.toLowerCase() == 'increment') {
      setCounter(prevCount => prevCount + value);
    } else if (type?.toString()?.toLowerCase() == 'decrement') {
      setCounter(prevCount => prevCount - value);
    } else if (type?.toString()?.toLowerCase() == 'reset') {
      setCounter(0);
    }
  }

  return [count, setCount];
}
export default useCounter;
