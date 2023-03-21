import React from "react";
import { View, Text, TouchableOpacity,StyleSheet, TextInput } from "react-native";
import Textinputfield from "../TextInput";
import { useTranslation } from 'react-i18next';


const Funds = () => {
    const { t } = useTranslation();
    
    return (
        <View style={styles.maincontext}>
            <TextInput placeholder={t('Enter Amount')} keyboardType={'number-pad'}textAlign={'left'} style={styles.textinput}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textstyle}>{t('Add Funds')}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontext:{
        flexDirection:"row",
        borderRadius:10,
        borderWidth:1,
        width:"99%",
        height:'50%',
        paddingLeft:10

    },
    button:{
        backgroundColor:"#000080",
        justifyContent:"center",
        alignItems:"center",
        width:"30%",
        borderBottomRightRadius:10,
        borderTopRightRadius:10,

    },
    textstyle:{
        color:'white',
        fontSize:15
        
    },
    textinput:{
        width:"70%",
        height:"100%",
        fontSize:15,
        justifyContent:"center"


    }
   
  });
  

export default Funds;