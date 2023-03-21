import { Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { Needhelp, INeed } from './Needhelp';
import { Needstyle } from './Needstyle';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

export const Needtxt = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const onPressToWebbrowser = (browserurl: string,drawerType:string) => {
       if(drawerType==='glide')
       {
        Linking.openURL(browserurl)
       }else{
           InAppBrowser.isAvailable().then(() => {
               return InAppBrowser.open(browserurl, {
                   showTitle: true,
                   enableUrlBarHiding: true,
                   enableDefaultShare: true,
                   forceCloseOnRedirection: false,
                   hasBackButton: true,
                })
            })
        }
        
    }

    return (
        <View style={Needstyle.newmaincon}>
            <View style={Needstyle.maincontainer}>
                {Needhelp.map((Needhelp) => {
                    return (
                            <TouchableOpacity onPress={(index) => onPressToWebbrowser(Needhelp.url,Needhelp.drawerType)}>
                            <View style={Needstyle.innercon}>
                            <Text style={Needstyle.txtstyle}>{t(Needhelp.title)}?</Text>
                            </View>
                            </TouchableOpacity>
    
                        );
                    })}
                    </View>
              

        </View >


    )
};





