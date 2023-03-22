import { StyleSheet,Dimensions } from "react-native";
import alignment from "../../utils/alignment";
import { colors } from "../../constants/colors";

const screenHeight=Dimensions.get('window').height

export const styles = StyleSheet.create({
    bottomSheetContainer: {
      height: screenHeight,
      width: '100%',
      backgroundColor: 'white',
      position: 'absolute',
      top: screenHeight,
      borderRadius: 25,
      padding:20
    },
    line: {
      width: 75,
      height: 4,
      backgroundColor: 'grey',
      alignSelf: 'center',
      marginVertical: 15,
      borderRadius: 2,
    },
    commonTimingView: {
      height: 300,
      width: 120,
      alignItems: 'flex-start',
    },
    commonHtLSelected: {
      borderWidth: 1,
      height: 45,
      width: 110,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'yellow',
      marginHorizontal:20
    },
    commonHtLUnSelected: {
      borderWidth: 1,
      height: 45,
      width: 110,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal:20
    },
    commonHtZSelected: {
      borderWidth: 1,
      height: 35,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'yellow',
      marginHorizontal:20
    },
    commonHtZUnSelected: {
      borderWidth: 1,
      height: 35,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal:20
    },
    aplhaType: {
      width: 200,
      ...alignment.row_SpaceB,
    },
    pricePercentage: {
      width: 250,
      ...alignment.row_SpaceB,
    },
    submitBtn: {
      width: 300,
      backgroundColor: 'black',
      height: 50,
      alignSelf: 'center',
      marginTop: '30%',
      ...alignment.alignC_justifyC,
    },
    titleText:{
      color:colors.black,
      fontSize:17,
      fontWeight:'bold'
    },
    text:{
      color:colors.black,
      fontSize:15
    }
  });