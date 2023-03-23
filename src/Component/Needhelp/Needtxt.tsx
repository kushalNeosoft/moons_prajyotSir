import { Text, View, TouchableOpacity, Linking, FlatList } from 'react-native';
import React from 'react';
import { Needhelp } from './Needhelp';
import { Needstyle } from './Needstyle';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

export const Needtxt = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const onPressToWebbrowser = (browserurl: string, drawerType: string) => {
        if (drawerType === 'glide') {
            Linking.openURL(browserurl)
        } else {
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
    const renderItem = ({item}:{item:any}) => {
        console.log(item,"DDDDDD------>");
        
        return (
            <View style={Needstyle.newmaincon}>
                <View style={Needstyle.maincontainer}>
                            <TouchableOpacity onPress={()=>onPressToWebbrowser(item?.url,item.drawerType)}>
                                <View style={Needstyle.innercon}>
                                    <Text style={Needstyle.txtstyle}>{t(item?.title)}</Text>
                                </View>
                            </TouchableOpacity>
                </View>


            </View >

        )
    }
    const nocolumn =2
    return (
        <FlatList
            data={Needhelp}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.index)}
            numColumns={nocolumn}
        />

    )
};





