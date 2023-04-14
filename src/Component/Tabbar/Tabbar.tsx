import React from 'react';

import { View, Pressable, Dimensions, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const CustomButton = () => (
    <View
        style={{
            alignItems: "center",
            top:-20
        }}

    >
        <Svg
            width={94}
            height={38}
            viewBox="0 0 94 40"

        >
            <Path
                d="M.333 0c7.364 0 13.334 5.969 13.334 13.333v3.334C13.667 29.553 34.113 40 47 40c13 .5 33.333-10.447 33.333-23.333v-3.334C80.333 5.97 86.303 0 93.667 0H.333z"
                fill="#F5F5F5"
            />
        </Svg>

        <View style={styles.customtab}>
            <Fontisto name="search" size={30} style={{ transform: [{ rotate: '-45deg' }] }} />
        </View>


    </View>
);

const TabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.mainContainer}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    setTimeout(() => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {

                            navigation.navigate(route.name);
                        }
                    }, 10);

                };

                return (
                    <View key={index} style={[styles.mainItemContainer]}>
                        <Pressable
                            onPress={onPress}
                            style={{  height: 30, width: 30 }}>
                            <View style={{ justifyContent:'center', alignItems: 'center', flex: 1, padding: 15 ,top:route.name=='tab3'?-5:0}}>
                                {route.name == 'tab1' ?
                                    <>
                                        <Image
                                            source={require('/Users/neosoft/Desktop/moons_marge/src/assets/watchlist.png')}
                                            style={{ height: 30, width: 30 }}
                                        />
                                    </>
                                    :
                                    route.name == 'tab2' ?
                                        <>
                                            <Image
                                                source={require('/Users/neosoft/Desktop/moons_marge/src/assets/market.png')}
                                                style={{ height: 30, width: 30 }}
                                            />

                                        </>
                                        :
                                        route.name == 'tab3' ?
                                            <>
                                                <CustomButton />
                                            </>
                                            :
                                            route.name == 'tab4' ?
                                                <>
                                                    <Image
                                                        source={require('/Users/neosoft/Desktop/moons_marge/src/assets/orders.png')}
                                                        style={{ height: 30, width: 30 }}
                                                    />
                                                </>
                                                :
                                                <>
                                                    <Image
                                                        source={require('/Users/neosoft/Desktop/moons_marge/src/assets/portfolio.jpeg')}
                                                        style={{ height: 30, width: 30 }}
                                                    />
                                                </>
                                }
                            </View>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: "white",

    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 1,
        borderColor: "#333B42"
    },
    customtab: {
        height: 48,
        width: 48,
        backgroundColor: 'white',
        borderRadius: 10,
        top: -69, transform: [{ rotate: '45deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 4
    }
})


export default TabBar; 