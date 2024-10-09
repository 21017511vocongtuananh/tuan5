import { StatusBar } from "expo-status-bar";
import { StyleSheet , View , Image , Text, TextInput, TouchableOpacity } from "react-native";
import  React, {useState} from "react";

export default function App2({navigation,route}){
     
    // const { users } = route.params; // Nhận danh sách người dùng từ tham số route
    const {email,password} = route.params;
    const [emailInput,setEmail] = useState(email);
    const [passwordInput,setPassword] = useState(password);

    const handleLogin = () => {

            navigation.navigate('Screen_04'); // Điều hướng đến Screen_04 khi đăng nhập thành công
    };

    return(
        <View style={styles.container}>
             <View style={{
                   width:"100%",
                   height:300,
                   marginBottom:50,
             }}>
                <Image source={require("../assets/DATA/Image 20.png")} 
                style={{
                    width:"100%",
                    height:300,
                }}></Image>
                <Text style={{
                    fontSize:40,
                    fontWeight:"bold",
                    marginLeft:20,
                }}>Welcome!</Text>
             </View>
             <View style={{
                 textAlign:"left",
             }}>
             <Text style={{
                   fontSize:20,
                   fontWeight: "bold",
                   marginTop:10,
                   paddingLeft:20,
                   marginTop:50,
                   marginRight:310,
                 }}>Email</Text>
             </View>
             <View style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#ccc",
                paddingHorizontal: 10,
                width: '90%',
                marginTop: 5,
                alignSelf:"center",
             }}>
                 <Image source={require("../assets/DATA/email.png")} 
                 style={{
                    width:20,
                    height:20,
                    marginRight:10,
                 }}/>
                 <TextInput style={{
                   flex:1,
                    height:40,
                 }}
                 placeholder="Enter email"
                 value={emailInput}
                 onChangeText={setEmail}
                 ></TextInput>
             </View>
             <View style={{
                textAlign:"left",
             }}>
             <Text style={{
                   fontSize:20,
                   fontWeight: "bold",
                   marginTop:10,
                   paddingLeft:20,
                   marginTop:10,
                   marginRight:270,
                 }}>Password</Text>
             </View>
             <View style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#ccc",
                paddingHorizontal: 10,
                width: '90%',
                marginTop: 5,
                alignSelf:"center",
             }}>
                 <Image source={require("../assets/DATA/password.png")} 
                 style={{
                    width:20,
                    height:20,
                    marginRight:10,
                 }}/>
                 <TextInput style={{
                   flex:1,
                    height:40,
                 }}
                 placeholder="Enter password"
                 value={passwordInput}
                 onChangeText={setPassword}
                 ></TextInput>
             </View>

             <View style={{
                flexDirection:"row",
                alignItems: "center",
                justifyContent:"center",
                width:"100%",
                marginTop:50,
                marginBottom:20,
             }}>
                <TouchableOpacity style={{
                    backgroundColor:"#007BFF",
                    width:"90%",
                    height:40,
                    borderRadius:10,
                    alignItems:"center",
                    justifyContent:"center",
                }} onPress={handleLogin}>
                <Text style={{
                    color:"#fff",
                    fontSize:20,
                }}>Login</Text>
                </TouchableOpacity>

             </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        justifyContent: "center",
        alignItems: "center",
    }
})