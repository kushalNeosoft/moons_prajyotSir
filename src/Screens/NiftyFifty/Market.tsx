import React,{useState,useRef} from "react";
import { StyleSheet, Text, View ,TouchableOpacity,ScrollView, Dimensions} from "react-native";

const Market = ()=>{
    const scrollViewRef = useRef();
    const [index, setIndex] = useState(0)
    const [scrollY, setScrollY] = useState(0);

   
    return(
        <View style={styles.container}>
        <View style={styles.topBar}>
            <TouchableOpacity
             style={[styles.topBarOpacity,{ backgroundColor: index==0?'#002D62':'transparent'}]}
             onPress={()=>{
                setIndex(0)
                scrollViewRef.current.scrollTo({ y: 0, animated:true })
             }}
            >
                <Text style={styles.topBarText}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity   style={[styles.topBarOpacity,{ backgroundColor: index==1?'#002D62':'transparent'}]}
              onPress={()=>{
                setIndex(1)
                scrollViewRef.current.scrollTo({ y: 300, animated:true})
             }}
            >
                <Text style={styles.topBarText}>Indices</Text>
            </TouchableOpacity>
            <TouchableOpacity   style={[styles.topBarOpacity,{ backgroundColor: index==2?'#002D62':'transparent'}]}
              onPress={()=>{
                setIndex(2)
                scrollViewRef.current.scrollTo({ y: 600,animated:true })
             }}
            >
                <Text style={styles.topBarText} numberOfLines={1}>Screeners</Text>
            </TouchableOpacity>
            <TouchableOpacity   style={[styles.topBarOpacity,{ backgroundColor: index==3?'#002D62':'transparent'}]}
              onPress={()=>{
                setIndex(3)
                scrollViewRef.current.scrollTo({ y: 900,animated:true })
             }}
            >
                <Text style={styles.topBarText}>News</Text>
            </TouchableOpacity >
            <TouchableOpacity   style={[styles.topBarOpacity,{ backgroundColor: index==4?'#002D62':'transparent'}]}
              onPress={()=>{
                setIndex(4)
                scrollViewRef.current.scrollTo({ y: 1200,animated:true })
             }}
            >
                <Text style={styles.topBarText}>Events</Text>
            </TouchableOpacity>
        </View>
        <ScrollView ref={scrollViewRef} onScroll={(event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
    // update index based on scroll position
    if (event.nativeEvent.contentOffset.y >= 0 && event.nativeEvent.contentOffset.y <300) {
        setIndex(0);
    
       
    } else if (event.nativeEvent.contentOffset.y >= 300 && event.nativeEvent.contentOffset.y < 600) {
        setIndex(1);
   
    
    } else if (event.nativeEvent.contentOffset.y >= 600 && event.nativeEvent.contentOffset.y < 900) {
        setIndex(2);
        
    } else if (event.nativeEvent.contentOffset.y >= 900 && event.nativeEvent.contentOffset.y < 1200) {
        setIndex(3);
      
    } else if (event.nativeEvent.contentOffset.y >= 1200 && event.nativeEvent.contentOffset.y < 1500) {
        setIndex(4);
      
    } 
}}>

            <Text style={styles.scrollHead}>What's New</Text>

            <View style={styles.contentBox}>

            </View>

            <Text style={styles.scrollHead}>New products</Text>
            <View style={styles.contentBox}>

            </View>
            
            <Text style={styles.scrollHead}>Indices</Text>
            <View style={styles.contentBox}>

            </View>

            <Text style={styles.scrollHead}>Screeners</Text>
            <View style={styles.contentBox}>

            </View>
            <Text style={styles.scrollHead}>News</Text>
            <View style={styles.contentBox}>

            </View>
            <Text style={styles.scrollHead}>Events</Text>
            <View style={styles.contentBox}>

            </View>
            <View style={styles.contentBox}>

</View>


        </ScrollView>
        </View>
    )
}
export default Market

const styles = StyleSheet.create({
container:{
flex:1
},
topBar:{
    flexDirection:'row',
    backgroundColor:'rgba(0,0,0,0.10)',
    marginHorizontal:6,
    marginVertical:7,
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",

},
topBarText:{
   fontSize:12,
   marginHorizontal:9,
   fontWeight:'500',
   color:'white'
},
topBarOpacity:{
    width: '20%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
},
scrollHead:{
    color:'black',
    fontSize:20,
    fontWeight:'600',
    marginLeft:12,
},
contentBox:{
    height:300,
    width:'95%',
    alignSelf:'center'
},



})