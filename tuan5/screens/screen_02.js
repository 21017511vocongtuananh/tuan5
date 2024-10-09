import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {Checkbox} from 'react-native-paper';

export default function App({ navigation }) {
    const[username,SetUsername] = useState('');
    const[email,SetEmail] = useState('');
    const[password,SetPassword] = useState('');

   const handleContinue = () => {
          if(username && email && password){
            navigation.navigate('Screen_03',{ email, password });
          }
            
    }

    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={require("../assets/DATA/Image 19.png")}
                    style={styles.image}
                />
                <Text style={styles.text1}>
                    Nice to see you
                </Text>
                <Text style={styles.text2}>
                    Create your account
                </Text>
            </View>

            <View  style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#ccc",
                paddingHorizontal: 10,
                width: '80%',
                marginTop: 20,
            }}>
                <Image 
                    source={require("../assets/DATA/user.png")}
                    style={{ width: 20,
                        height: 20,
                        marginRight: 10,}}
                />
                <TextInput 
                    style={{ flex: 1,
                        height: 40,}}
                    placeholder="Enter your username"
                    value={email}
                    onChangeText={SetEmail}
                />
            </View>
            <View  style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#ccc",
                paddingHorizontal: 10,
                width: '80%',
                marginTop: 20,
            }}>
                <Image 
                    source={require("../assets/DATA/email.png")}
                    style={{ width: 20,
                        height: 20,
                        marginRight: 10,}}
                />
                <TextInput 
                    style={{ flex:1,
                        height: 40,}}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={SetUsername}
                />
            </View>
            <View  style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#ccc",
                paddingHorizontal: 10,
                width: '80%',
                marginTop: 20,
            }}>
                <Image 
                    source={require("../assets/DATA/password.png")}
                    style={{ width: 20,
                        height: 20,
                        marginRight: 10,}}
                />
                <TextInput 
                    style={{ flex:1,
                        height: 40,}}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={SetPassword}
                />
                <Image 
                    source={require("../assets/DATA/mat.png")}
                    style={{ width: 20,
                        height: 20,
                        marginLeft: 10,}}
                />
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked); // Đảo trạng thái khi Checkbox được nhấn
                    }}
                />
                <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
            </View>

            {/* Optional: Button to submit form */}
            <TouchableOpacity style={styles.submitButton}
            onPress={handleContinue}>
                <Text style={styles.submitButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        alignItems: "center",
    },
    image: {
        width: 100, 
        height: 100,
        resizeMode: "contain",
    },
    text1: {
        alignItems: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
    text2: {
        fontSize: 18,
        marginTop: 10,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 16,
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        width:'80%',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        
    },
});
