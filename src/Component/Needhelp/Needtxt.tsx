import { Text, View, TouchableOpacity, Linking, FlatList } from 'react-native';
import React from 'react';
import { Needhelp } from './Needhelp';
import { Needstyle } from './Needstyle';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

export const Needtxt = () => {
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
    type ItemProps = {title: string,drawerType:string,url:string};
    const Item = ({title,drawerType,url}: ItemProps) => (
        <View style={Needstyle.newmaincon}>
                <View style={Needstyle.maincontainer}>
                            <TouchableOpacity onPress={()=>onPressToWebbrowser(url,drawerType)}>
                                <View style={Needstyle.innercon}>
                                    <Text style={Needstyle.txtstyle}>{t(title)}</Text>
                                </View>
                            </TouchableOpacity>
                </View>


            </View >
      );
      
    const nocolumn =2
    return (
        <FlatList
            data={Needhelp}
            renderItem={({item}) => <Item title={item.title} drawerType={item.drawerType} url={item.url} />}
            keyExtractor={(item) => String(item.index)}
            numColumns={nocolumn}
        />

    )
};





