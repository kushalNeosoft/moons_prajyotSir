import React from "react";
import { View,Text, StyleSheet } from "react-native";

const Button =()=>{
    return(
        <View style={styles.loginBtn}>
            <Text style={styles.loginText}>
                LOGIN
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    loginBtn: {
        width: "80%",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
    },
    loginText: {
        color: 'white'
    }
  })
  export default Button;