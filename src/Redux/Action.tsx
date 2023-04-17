import { ImageOrVideo } from 'react-native-image-crop-picker';
import {
  REGISTER_DATA,
  REGISTER_RANDOM_DATA,
  UPDATE_DATA,
  CHECK_INTERNET,
  SET_APP_STATE,
  LOGIN_STATE,
  LOGIN_FAIL,
  LOGIN_SUCESS,
  NEW_USER,
  ADD_FONT,
  DEC_FONT,
  REORDER_LIST,
  IMAGE_CAPTURE,
  ADD_KEY_VALUE,
} from './actionTypes';


var interval = '';
export const registerUserData = (data: any) => ({
  type: REGISTER_DATA,
  data,
});
export const registerRandomData = (data: any) => ({
  type: REGISTER_RANDOM_DATA,
  data,
});
export const updateData = (clear: any) => {
  return (dispatch: (arg0: { type: string; }) => void) => {
    if (clear) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        dispatch({
          type: UPDATE_DATA,
          // payload: newData,
          // userId: userId,
        });
      }, 2000);
    }
  };
};
export const checkInternet = (data: boolean | null) => ({
  type: CHECK_INTERNET,
  data,
});
export const setAppState = (data: any) => ({
  type: SET_APP_STATE,
  data,
});

export const login = (data: any) =>({  
  type:LOGIN_STATE,
  data,
 
 
  
})
export const newLog = (data: { firsttime: boolean; }) =>({  
  type:NEW_USER,
  data,
})

export const addFont = (data:any) =>({  
  type:ADD_FONT,
  data,
  
})

export const decFont = (data:any) =>({  
  type:DEC_FONT,
  data,
  
})

export const imgcon =(data: any)=>({
  type:IMAGE_CAPTURE,
  data
})

export const reorderList=(data:any)=>({
  type:REORDER_LIST,
  data
})

export const addKeyValue = (key: any, value: any) => ({
  type: ADD_KEY_VALUE,
  payload: {key, value},
});

