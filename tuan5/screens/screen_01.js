import { StatusBar } from "expo-status-bar";
import { StyleSheet,View,Text,TouchableOpacity, Image} from "react-native";

export default function app({navigation}){

    return(
       <View style={styles.container}>
          <View style={{
            width:"100%",
            justifyContent:"center",
            alignItems: "center",
          }}>
            <Image source={require("../assets/DATA/Image 18.png")} 
            style={{
                width:"90%",
                backgroundColor:"pink",
                resizeMode:"contain",
            }}/>
          </View>
          <View style={{
          }}>
            <Text style={{
                fontSize:20,
                fontWeight:"bold",
                marginTop:10,
                marginRight:170,
            }}>Bosst Productivity</Text>
            <Text style={{
                fontSize:10,
                fontWeight:"bold",
                fontColor:"#ccc",
                marginTop:10,
                marginRight:170,
            }}>Simpify tasks ,books productivity</Text>
          </View>

          <View style={{
            width:"100%",
            justifyContent:"center",
            alignItems:"center",
          }}>
            <TouchableOpacity style={{
                width:"90%",
                height:50,
                borderRadius:10,
                backgroundColor:"red",
                justifyContent:"center",
                alignItems:"center",
                marginTop:20,
            }} onPress={() => navigation.navigate("Screen_02")}>
                <Text style={{
                   fontSize:20,
                   color:"#fff",
                }}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:"90%",
                height:50,
                borderRadius:10,
                backgroundColor:"#DDDDDD",
                justifyContent:"center",
                alignItems:"center",
                marginTop:10,
            }} onPress={() => navigation.navigate("Screen_03",{})}>
                <Text style={{
                   fontSize:20,
                   Color:"#fff",
                }}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection:"row",
            justifyContent:"center",
            marginTop:10,
          }}>
            <View style={{width:10,height:10,borderRadius:5,backgroundColor:"black",marginHorizontal:5,}}></View>
            <View style={{width:10,height:10,borderRadius:5,backgroundColor:"black",marginHorizontal:5,}}></View>
            <View style={{width:10,height:10,borderRadius:5,backgroundColor:"black",marginHorizontal:5,}}></View>
          </View>
       </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        alignItems: "center",
        justifyContent: "center",

    }
})