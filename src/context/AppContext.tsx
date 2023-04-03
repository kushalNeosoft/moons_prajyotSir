import React,{createContext} from 'react';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';
import { one } from '../function/Function';

export const theme={
    darkTheme,
    lightTheme,
   
}
export const fun={
    one
}

const ThemeContext=createContext(lightTheme);
const funContext=createContext({});

export  {ThemeContext,funContext};
