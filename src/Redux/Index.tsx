import Reducer from "./Reducer/Reducer";
import  Loginreducer  from "./Reducer/Loginreducer";
import { combineReducers } from "redux";

export const  rootReducer =combineReducers({
    Reducer:Reducer,
    Login:Loginreducer,
});