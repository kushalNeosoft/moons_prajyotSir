import {applyMiddleware, createStore} from 'redux';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import { rootReducer } from './Index';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Login']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware<unknown>(thunk))
export const persistor = persistStore(store)

