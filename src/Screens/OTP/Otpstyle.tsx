import { Dimensions, StyleSheet } from 'react-native';


export const Otpstyle = StyleSheet.create({
    Maincontainer: {
        backgroundColor: "white",
        flex: 1,

    },
    Innermain: {
        flexDirection: 'row',
        marginBottom: "10%"


    },
    imgstylecon: {
        flex: 1 / 1.4,
        paddingLeft: '5%',
        paddingTop: "10%",
        height: "100%",
    },
    imgcontiner: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.16,
        height: Dimensions.get('window').width * 0.16,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    },
    tinyLogo: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    },
    textcon: {
        flex: 2,
        height: "100%",
        paddingTop: "10%",
    },
    HeaderTxt: {
        fontSize: 20,
        fontWeight: '500',
        color: "black"
    },
    UserTxt: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
    },
    Switchtxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue'

    },
    galleryContainer: {
        width: '100%',
        overflow: 'hidden',
        paddingBottom: 5,

    },
    galleryTabWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,

    },
    galleryTab: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,

    },
    indicator: {
        height: 2.5,
        backgroundColor: '#000075',
        width: '85%',
        borderRadius: 50,
        bottom: -10,

    },
    dropdown: {
       // margin: 16,
        height: 30,
    },
    icon: {
        //marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        // width: 20,
        // height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },



});
