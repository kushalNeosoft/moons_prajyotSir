import { StyleSheet } from 'react-native';


export const Styleotp = StyleSheet.create({
    Maincon: {
        backgroundColor: '#FAFAFA',
        flex: 1,
        padding: 18,
        paddingTop: "15%",
        elevation:5
    },
    styletxt: {
        fontSize: 20,
        fontWeight: "600",
        color: 'black'
    },
    TextInputstyle: {
        height: "100%",
        width: "14%",
        color: 'red',
        borderRadius: 8,
        borderWidth: 2,
        alignSelf: "center",
        alignItems: "center",

    },
    pinstyle: {
        fontSize: 15,
        color: '#000075',
        fontWeight: "700"
    },
    Buttonstyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "23%",
        marginBottom:"20%"

    },

    stickbottom: {
        height: "25%",
        width: "100%",
        marginTop:"35%",
        alignSelf: "center",
        justifyContent:"space-between",
        paddingBottom:"5%"
        
    },
    stickbottomtwo: {
        justifyContent:"space-between",
        flexDirection:"row",
    }


});
