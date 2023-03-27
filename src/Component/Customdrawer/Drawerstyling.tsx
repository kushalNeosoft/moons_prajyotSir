
import { Dimensions, StyleSheet } from 'react-native';



export const Drawerstyling = StyleSheet.create({

    Maincon: {
        flex: 1

    },
    Innerconstart: {
        height: 200,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        borderBottomWidth: 1,
        padding: 10,

    },
    Innercon: {
        height: 70,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        borderBottomWidth: 1,
        padding: 15,
        borderBottomColor: "#E0E0E0"


    },
    Imgcon: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,

    },
    imagemain: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,

    },
    texticon: {
        fontSize: MyContext,
        color: "black",
        fontWeight: 'bold',

    },
    Innerconone: {
        height: 90,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        padding: 15,


    },
    stylingtxt: {
        right: '140%'
    },
    protextalign: {
        color: "black",
        fontSize: 15,
        fontWeight: "700",
    },
    protextaligntwo: {
        color: "grey"
    },
    Innercotwo: {
        height: 110,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        padding: 15,

    },
    Innertwoone: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 10
    },
    Innercothree: {
        height: 370,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        padding: 15,
    },
    usagecon: {
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#000080",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 35,
    },
    styleb: {
        color: "#000080",
        fontSize: 18,
        fontWeight: "500"
    },
    radio: {
        flexDirection: "row",
        alignItems: "center",



    },
    Lighttxt: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
        marginRight: 100
    },
    Darktxt: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',

    },
    Buttomtxtcon: {
        height: 50,
        width: "100%",
        top:-45

    },
    Innercokyc: {
        height: 190,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        padding: 15,

    },
    buttontxt: {
        textAlign: "center",
        alignSelf: "center",
        marginTop: 15,
        color: "black",
        fontWeight: "500"
    },
    versiontxt: {
        color:'black',
        fontSize:15
    }




});
