import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
// import { ListRenderItem } from 'react-native';
import { Drawerstyling } from './Drawerstyling';
import React, { useEffect, useState } from 'react';
import Banner from '../Sidercomonent/Banner/Banner';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Funds from '../Fund/Funds';
import { RadioButton } from 'react-native-paper';
import { Needtxt } from '../Needhelp/Needtxt';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import dynamicDrawerData from './dynamicmenu.json';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector } from 'react-redux';
import { BannerData } from './Bannerdata';

export const DrawerMenu = () => {
    const { t } = useTranslation();
    const navigation = useNavigation()
    const [checked, setChecked] = React.useState('Light');
    const storeimg = useSelector(state => state.Login.imgstore);
    const newfont = useSelector(state => state.Login.counter);
    const urldf='https://reactnative.dev/img/tiny_logo.png';
    const navtoScreen = () => {
        navigation.navigate('Settings')
    }
    console.log(BannerData[0].url,"IMGGHGGGG_____>");
    
    const navtoProfile = () => {
        navigation.navigate('Profile')
    }
    const width = Dimensions.get('window').width;

    const ListHeader = () => {
        return (
            <>
            <View>
                    <Carousel
                        loop
                        width={width}
                        height={width / 2.5}
                        autoPlay={true}
                        data={BannerData}
                        scrollAnimationDuration={1000}
                        pagingEnabled={true}
                        // onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({item}) => (
                            <View
                                style={{
                                    flex:1,
                                    justifyContent: 'center',
                                    alignItems: "center",
                                }}
                            >
                                <View style={Drawerstyling.slideimgcon}>
                                   <Image
                                   source={{
                                    uri:item.url,
                                   }}
                                   style={Drawerstyling.slideimgcontwo}
                                   />

                                </View>


                            </View>
                        )}
                    />
                


            </View>
            <TouchableOpacity onPress={navtoProfile}>
            <View style={Drawerstyling.Innerconone}>
                    <View style={Drawerstyling.Imgcon}>
                        <Image
                            style={Drawerstyling.imagemain}
                            source={
                                storeimg == ''
                                  ? { uri: urldf }
                                  : { uri:storeimg }
                                  
                              }
                             />

                    </View>
                    <View style={Drawerstyling.stylingtxt}>
                        <Text style={Drawerstyling.protextalign}>Om Prakash</Text>
                        <Text style={Drawerstyling.protextaligntwo}>User ID: OM</Text>
                    </View>
                    <Entypo name="chevron-small-right" size={30} color='#000080' />

                </View>
                </TouchableOpacity>
                </>

        );
    };
    const renderItem = ({ item }: { item: any }) => {
        console.log(item.displayName, "KSKSKSKSKSKSKKSKS----------->");

        return (
            <View style={Drawerstyling.Maincon}>
                {item?.displayName == 'Funds' ?
                    <>
                        <View style={Drawerstyling.Innercotwo}>
                            <View style={Drawerstyling.Innertwoone}>
                                <Text style={[Drawerstyling.texticon,{
                                    fontSize:newfont
                                }]}>{t(item?.name)}</Text>
                                <Entypo name="chevron-small-right" size={30} color='#000080' />
                            </View>
                            <Funds />
                        </View>
                    </>
                    :
                    item?.displayName == 'Need Help' ?
                        <>
                            <View style={Drawerstyling.Innercothree}>
                                <View style={Drawerstyling.Innertwoone}>
                                    <Text style={[Drawerstyling.texticon,{
                                        fontSize:newfont
                                    }]}>{t(item?.name)}</Text>
                                    <Entypo name="chevron-small-right" size={30} color='#000080' />
                                </View>

                                <Needtxt />

                            </View>
                        </>
                        :
                        item?.displayName == 'Usage Guide' ?
                            <>
                                <View >
                                    <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                                        <View style={Drawerstyling.usagecon}>
                                            <Text style={Drawerstyling.styleb}>
                                                {t(item?.name)}
                                            </Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>


                            </>
                            :
                            item?.displayName == 'Contact Us' ?
                                <>
                                    <View style={Drawerstyling.newcontact}>
                                        <TouchableOpacity style={{ alignItems: "center", borderEndWidth: 1 }}>
                                            <View style={Drawerstyling.usagecon}>
                                                <Text style={Drawerstyling.styleb}>
                                                    {t(item?.name)}
                                                </Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>




                                </>
                                :
                                item?.displayName == 'Settings' ?
                                    <>

                                        <View style={Drawerstyling.Innercotwo}>
                                            <TouchableOpacity onPress={navtoScreen}>
                                                <View style={Drawerstyling.Innertwoone}>
                                                    <Text style={[Drawerstyling.texticon,{
                                                        fontSize:newfont
                                                    }]}>{t(item?.name)}</Text>
                                                    <Entypo name="chevron-small-right" size={30} color='#000080' />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={Drawerstyling.radio}>
                                                <RadioButton
                                                    value="Light"
                                                    status={checked === 'Light' ? 'checked' : 'unchecked'}
                                                    onPress={() => setChecked('Light')}
                                                />
                                                <Text style={Drawerstyling.Lighttxt}>{t('Light Theme')}</Text>
                                                <RadioButton
                                                    value="Dark"
                                                    status={checked === 'Dark' ? 'checked' : 'unchecked'} //if the value of checked is Dark, then select this button
                                                    onPress={() => setChecked('Dark')} //when pressed, set the value of the checked Hook to 'Apple'
                                                />
                                                <Text style={Drawerstyling.Darktxt}>{t('Dark Theme')}</Text>

                                            </View>

                                        </View>
                                    </>
                                    :
                                    item?.displayName == 'e-Kyc System' ?
                                        <>
                                            <View style={Drawerstyling.Innercokyc}>
                                                <View style={Drawerstyling.Innertwoone}>
                                                    <Text style={[Drawerstyling.texticon,{
                                                        fontSize:newfont
                                                    }]}>{t(item?.name)}</Text>
                                                    <Entypo name="chevron-small-right" size={30} color='#000080' />
                                                </View>
                                                <View style={Drawerstyling.Buttomtxtcon}>
                                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                        <Text style={Drawerstyling.versiontxt}>
                                                            Version 1.0.2.0
                                                        </Text>
                                                        <Text style={Drawerstyling.versiontxt}>
                                                            Last Login : 2023-Mar-10 10:45:53
                                                        </Text>

                                                    </View>
                                                    <Text style={Drawerstyling.buttontxt}>
                                                        Powered by 63 moons technologies limited
                                                    </Text>
                                                </View>

                                            </View>
                                        </>
                                        :
                                        item?.displayName === 'Account Statement'
                                            ||
                                            item?.displayName === 'eDIS Permission'
                                            ||
                                            item?.displayName === 'Invite Friends'
                                            ||
                                            item?.displayName === 'Theme'
                                            ||
                                            item?.displayName === 'Close'
                                            ?
                                            null
                                            :
                                            <>
                                                <TouchableOpacity >
                                                    <View style={Drawerstyling.Innercon}>
                                                        <Text style={[Drawerstyling.texticon,{
                                                            fontSize:newfont
                                                        }]}>{t(item?.name)}</Text>
                                                        {item?.name == 'Log Out' ?
                                                            <>
                                                                <MaterialCommunityIcons name="logout" size={30} color='#000080' />

                                                            </>
                                                            :
                                                            item?.name == 'Rate Us' ?
                                                                <>
                                                                    <MaterialCommunityIcons name="star-outline" size={30} color='#000080' />

                                                                </>
                                                                :
                                                                <>
                                                                    <Entypo name="chevron-small-right" size={30} color='#000080' />
                                                                </>
                                                        }

                                                    </View>
                                                </TouchableOpacity>


                                            </>
                }

            </View>

        );
    }

    return (
        <FlatList
            data={dynamicDrawerData}
            renderItem={renderItem}
            ListHeaderComponent={ListHeader}
            keyExtractor={(item) => String(item.id)}

        />


    )
};







