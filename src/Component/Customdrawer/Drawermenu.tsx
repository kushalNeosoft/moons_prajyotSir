import { Text, View, FlatList, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Drawer, IUser } from './Drawer';
import { ListRenderItem } from 'react-native';
import { Drawerstyling } from './Drawerstyling';
import React from 'react';
import Banner from '../Sidercomonent/Banner/Banner';
import { BannerData } from '../Sidercomonent/Banner/BannerData/Bannerdata';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Funds from '../Fund/Funds';
import { RadioButton } from 'react-native-paper';
import { Needtxt } from '../Needhelp/Needtxt';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


export const DrawerMenu = () => {

    const { t } = useTranslation();

    const [checked, setChecked] = React.useState('Light');
    const navigation = useNavigation();
    const onPressToNavigate = (navigatePath: string) => {
        navigation.navigate(navigatePath)
    }
    React.useEffect(() => {
        getMoviesFromApi()
      }, []);
    

    const getMoviesFromApi = () => {
        return fetch('https://d2e9hg2sdzxiwf.cloudfront.net/1404/v1/dynamicmenu.json')
          .then(response => response.json())
          .then(json => {
            console.log(JSON,"ssssss------>");
            
            return json;
            
          })
          .catch(error => {
            console.error(error);
          });
      };

    const Item = ({ data }: { data: IUser }) => (
        <View style={Drawerstyling.Maincon}>
            {data.drawerType == 'Slide' ?
                <>

                    <Banner data={BannerData} />

                </>
                :
                data.drawerType == 'info' ?
                    <>
                        <View style={Drawerstyling.Innerconone}>
                            <View style={Drawerstyling.Imgcon}>
                                <Image
                                    style={Drawerstyling.imagemain}
                                    source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} />

                            </View>
                            <View style={Drawerstyling.stylingtxt}>
                                <Text style={Drawerstyling.protextalign}>Om Prakash</Text>
                                <Text style={Drawerstyling.protextaligntwo}>User ID: OM</Text>
                            </View>
                            <Entypo name="chevron-small-right" size={30} color='#000080' />

                        </View>
                    </>
                    :
                    data.drawerType == 'Funds' ?
                        <>
                            <View style={Drawerstyling.Innercotwo}>
                                <View style={Drawerstyling.Innertwoone}>
                                    <Text style={Drawerstyling.texticon}>{t(data.name)}</Text>
                                    <Entypo name="chevron-small-right" size={30} color='#000080' />
                                </View>
                                <Funds />
                            </View>
                        </>
                        :
                        data.drawerType == 'Need Help' ?
                            <>
                                <View style={Drawerstyling.Innercothree}>
                                    <View style={Drawerstyling.Innertwoone}>
                                        <Text style={Drawerstyling.texticon}>{t(data.name)}</Text>
                                        <Entypo name="chevron-small-right" size={30} color='#000080' />
                                    </View>
                                    {/* <Needtxt/> */}
                                    <View>
                                        <TouchableOpacity>
                                            <View style={Drawerstyling.usagecon}>
                                                <Text style={Drawerstyling.styleb}>
                                                    {t('Usage Guid')}
                                                </Text>

                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={Drawerstyling.usagecon}>
                                                <Text style={Drawerstyling.styleb}>
                                                    {t('Contact Us')}
                                                </Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </>
                            :
                            data.drawerType == 'Settings' ?
                                <>

                                    <View style={Drawerstyling.Innercotwo}>
                                        <TouchableOpacity onPress={(index) => onPressToNavigate(data.navigateTo)}>
                                            <View style={Drawerstyling.Innertwoone}>
                                                <Text style={Drawerstyling.texticon}>{t(data.name)}</Text>
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
                                data.drawerType == 'e-Kyc' ?
                                    <>
                                        <View style={Drawerstyling.Innercokyc}>
                                            <View style={Drawerstyling.Innertwoone}>
                                                <Text style={Drawerstyling.texticon}>{t(data.name)}</Text>
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
                                    <>
                                        <TouchableOpacity onPress={(index) => onPressToNavigate(data.navigateTo)}>
                                            <View style={Drawerstyling.Innercon}>
                                                <Text style={Drawerstyling.texticon}>{t(data.name)}</Text>
                                                {data.name == 'Log Out' ?
                                                    <>
                                                        <MaterialCommunityIcons name="logout" size={30} color='#000080' />

                                                    </>
                                                    :
                                                    data.name == 'Rate Us' ?
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

    const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />;

    return (


        <FlatList
            data={Drawer}
            renderItem={renderItem}
            keyExtractor={(item: IUser) => item.index}
        />


    )
};







