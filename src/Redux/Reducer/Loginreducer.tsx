import {
  NEW_USER,
  ADD_FONT,
  DEC_FONT,
  IMAGE_CAPTURE,
  ADD_KEY_VALUE,
} from '../actionTypes';

const initialState = {
  firsttime: false,
  counter: 15,
  imgstore: '',
  dictionary: {
    key0: 0,
  },
};

const Loginreducer = (
  state = initialState,
  action: {
    payload: any;
    data: any;
    type: any;
  },
) => {
  console.log('action', action);

  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        firsttime: action.data.firsttime,
      };

    case ADD_FONT:
      return {
        ...state,
        counter: action.data.counter,
      };
    case DEC_FONT:
      return {
        ...state,
        counter: action.data.counter,
      };
    case IMAGE_CAPTURE:
      return {
        ...state,
        imgstore: action.data.imgstore,
      };
    case ADD_KEY_VALUE:
      return {
        ...state,
        dictionary: {
          ...state.dictionary,
          [action.payload.key]: action.payload.value,
        },
        // use below code when you use intial state as a dictionary
        // ...state,
        // [action.payload.key]: action.payload.value,
      };

    default:
      return state;
  }
};

export default Loginreducer;
