import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
// import { ListRenderItem } from 'react-native';
import { Drawerstyling } from './Drawerstyling';
import React, { useCallback, useEffect, useState } from 'react';
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

export const DrawerMenu = React.memo(() => {
    const { t } = useTranslation();
    const navigation = useNavigation()
    const [checked, setChecked] = React.useState('Light');

    const storeimg = useSelector(state => state.Login.imgstore);
    const newfont = useSelector(state => state.Login.counter);
    const urldf = 'https://reactnative.dev/img/tiny_logo.png';


    const navtoScreen = () => {
        navigation.navigate('Settings')
    }
    const navtoProfile = () => {
        navigation.navigate('Profile')
    }
    const navtodashboard = () => {
        navigation.navigate('Dashboard')
    }

    const navtoPhoneEmailConfig = () => {
        navigation.navigate('PhoneEmail')
    }

    const navtoLazyLoading = () => {
        console.log('Came to laz loading')
        navigation.navigate('DataLazyLoading')
    }

    const navtoWebview = () => {
        navigation.navigate('Webview')
    }
    const width = Dimensions.get('window').width;

    type ItemProps = { displayName: string, name: string };

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
                        // onProgressChange={(_, absoluteProgress) =>
                        //     (progressValue.value = absoluteProgress)
                        //   }
                        //   mode="parallax"
                        //   modeConfig={{
                        //     parallaxScrollingScale: 0.9,
                        //     parallaxScrollingOffset: 50,
                        //   }}
                        
                        // onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: "center",
                                }}
                            >
                                <View style={Drawerstyling.slideimgcon}>
                                    <Image
                                        source={{
                                            uri: item.url,
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
                                        : { uri: storeimg }

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

    const Item = ({ displayName, name }: ItemProps) => (
        <View style={Drawerstyling.Maincon}>
            {displayName == 'Funds' ?
                <>
                    <TouchableOpacity onPress={navtodashboard}>
                        <View style={Drawerstyling.Innercotwo}>
                            <View style={Drawerstyling.Innertwoone}>
                                <Text style={[Drawerstyling.texticon, {
                                    fontSize: newfont
                                }]}>{t(name)}</Text>
                                <Entypo name="chevron-small-right" size={30} color='#000080' />
                            </View>
                            <Funds />
                        </View>
                    </TouchableOpacity>
                </>
                :
                displayName == 'Need Help' ?
                    <>
                        <TouchableOpacity style={Drawerstyling.Innercothree} onPress={navtoPhoneEmailConfig}>
                            <View style={Drawerstyling.Innertwoone}>
                                <Text style={[Drawerstyling.texticon, {
                                    fontSize: newfont
                                }]}>{t(name)}</Text>
                                <Entypo name="chevron-small-right" size={30} color='#000080' />
                            </View>

                            <Needtxt />

                        </TouchableOpacity>
                    </>
                    :
                    displayName == 'Usage Guide' ?
                        <>
                            <View >
                                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }} onPress={navtoLazyLoading}>
                                    <View style={Drawerstyling.usagecon}>
                                        <Text style={Drawerstyling.styleb}>
                                            {t(name)}
                                        </Text>

                                    </View>
                                </TouchableOpacity>
                            </View>


                        </>
                        :
                        displayName == 'Contact Us' ?
                            <>
                                <View style={Drawerstyling.newcontact}>
                                    <TouchableOpacity style={{ alignItems: "center", borderEndWidth: 1 }} onPress={navtoWebview}>
                                        <View style={Drawerstyling.usagecon}>
                                            <Text style={Drawerstyling.styleb}>
                                                {t(name)}
                                            </Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>




                            </>
                            :
                            displayName == 'Settings' ?

                                <>

                                    <View style={Drawerstyling.Innercotwo}>
                                        <TouchableOpacity onPress={navtoScreen}>
                                            <View style={Drawerstyling.Innertwoone}>
                                                <Text style={[Drawerstyling.texticon, {
                                                    fontSize: newfont
                                                }]}>{t(name)}</Text>
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
                                displayName == 'e-Kyc System' ?
                                    <>
                                        <View style={Drawerstyling.Innercokyc}>
                                            <View style={Drawerstyling.Innertwoone}>
                                                <Text style={[Drawerstyling.texticon, {
                                                    fontSize: newfont
                                                }]}>{t(name)}</Text>
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
                                    displayName === 'Account Statement'
                                        ||
                                        displayName === 'eDIS Permission'
                                        ||
                                        displayName === 'Invite Friends'
                                        ||
                                        displayName === 'Theme'
                                        ||
                                        displayName === 'Close'
                                        ?
                                        null
                                        :
                                        <>
                                            <TouchableOpacity  >
                                                <View style={Drawerstyling.Innercon}>
                                                    <Text style={[Drawerstyling.texticon, {
                                                        fontSize: newfont
                                                    }]}>{t(name)}</Text>
                                                    {name == 'Log Out' ?
                                                        <>
                                                            <MaterialCommunityIcons name="logout" size={30} color='#000080' />

                                                        </>
                                                        :
                                                        name == 'Rate Us' ?
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

        </View >
    );


    return (
        <FlatList
            data={dynamicDrawerData}
            renderItem={({ item }) => <Item displayName={item.displayName} name={item.name} />}
            ListHeaderComponent={ListHeader}
            keyExtractor={(item) => String(item.id)}

        />


    )

}, (prevProps, nextProps) => {
    return prevProps === nextProps
});






