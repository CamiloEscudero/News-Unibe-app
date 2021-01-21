import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Dimensions, Platform, StatusBar } from 'react-native';
import { Input } from 'react-native-elements';
import  Logo from "../Logo";
import firebase from "../../Firebase/Firebase";
import "firebase/firestore";

export default function Register({navigation}) {
    const [user, setUser] = useState("-------");
    const [email, setEmail] = useState("-------");
    const [password, setPassword] = useState("------");

    const users = firebase.firestore().collection('user');

    function register() {
        let Personal = {
            userPersonal: user,
            emailPersonal: email,
            passwordPersonal: password
        }
        console.log("")
        users.where('userUsuario', '==', user).get()
        .then((snapshot) => {
            if (snapshot.size < 1){
                users.doc().set(user);
                navigation.navigate('login');
            }else {
                alert('El usuario ya esta registrado ')
            }
         }).catch((err) => {
             console.log('-->' + error);
         });
         
        users.doc().set(Personal);
        navigation.navigate('Login')

    }




    return (
        <SafeAreaView style={styles.container}>
             
             <Text>Register Screen</Text>
            
            <Logo/>


            <View style={styles.textInput}>
                <Input
                    placeholder='Username'
                    onChangeText={returnOnChangeText => setUser(returnOnChangeText)}
                />
            </View>

            <View style={styles.textInput}>
                <Input
                    placeholder='Email'
                    onChangeText={returnOnChangeText => setEmail(returnOnChangeText)}
                />
            </View>

            <View style={styles.textInput}>
                <Input
                    placeholder='Password'
                    secureTextEntry={true}

                    onChangeText={returnOnChangeText => setPassword(returnOnChangeText)} />
            </View>

            
            <Text style={{paddingHorizontal:40}}>
                
                Make sure it's least 15 chracter OR at least 8 chracter including a number and lowercase letter. 
                
                </Text>

            <View style={styles.textInput}>
                <TouchableOpacity style={styles.openButton}><Text
                    style={{ textAlign: "center" }}
                    onPress={register}
                    >Sign up</Text></TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    openButton: {
        backgroundColor: "#FFFF00",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin: 10,
        textAlign: 'center'
    },
    textInput: {
        width: 250
    },
   
});