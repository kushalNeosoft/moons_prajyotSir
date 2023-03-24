import { Dimensions, StyleSheet } from 'react-native';


export const Needstyle = StyleSheet.create({

    maincontainer:{
        
        
        flexDirection:"row",
        flexWrap:'wrap',
    },
   innercon:{
    borderWidth:1,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"#D3D3D3",
    borderRadius:8,
    margin:5,
    padding:8,
    height:35
   },
   txtstyle:{
    fontSize:13,
    fontWeight:"700",
    color:'black'
   },
   newmaincon:{
    marginBottom:-20
   }



})