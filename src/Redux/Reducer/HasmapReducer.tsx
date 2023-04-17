import { ADD_KEY_VALUE } from "../actionTypes";

const initialState = {
  hashMap: new Map([['key1', 5]]),
};

  const HashMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KEY_VALUE':
      state.hashMap.set(action.payload.key, action.payload.value);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default HashMapReducer;