import React, { useState } from "react";
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';

const DateComponent = (props)=>{
    const [index,setIndex] = useState(false)
        return(
            <TouchableOpacity
            onPress={()=>{
                setIndex(!index)
            }}
            >
                <View style={[styles.container,{backgroundColor:index==false? 'white':'#002D62'}]}>
               <Text style={[styles.containerText,{color:index==false?'black':'white'}]}>{props.date}</Text>
               <View style={{flexDirection:'row'}}>
               <Text style={[styles.containerText,{color:index==false?'black':'white'}]}>{props.month}</Text>
               <Text style={[styles.containerText,{color:index==false?'black':'white'}]}> '{props.year}</Text>
               </View>
            </View>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    container:{
        borderColor:'grey',
        width:125,
        height:80,
        borderWidth:0.5,
        borderRadius:10,
        marginVertical:22,
        justifyContent:'center',
        alignItems:'center',
        marginRight:15
    },
    containerText:{
        fontSize:19,
        fontWeight:'600'
    }

})

export default DateComponent