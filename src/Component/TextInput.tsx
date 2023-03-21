import React from 'react';

import { TextInput, View, Text } from 'react-native';
import { Textstyle } from './Textstyle';

const Textinputfield = ({ placeholder,value,secureTextEntry,onChangeText,label,keyboardType ,maxLength,style}) => {

    return (
        <View style={Textstyle.containerStyle}> 
            <Text style={Textstyle.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={style}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={'black'}
                keyboardType={keyboardType}
                maxLength={maxLength}
                
            />
        </View>

    );

};
export default Textinputfield;
