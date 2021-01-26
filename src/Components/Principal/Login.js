import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Dimensions, Platform, StatusBar, Modal, Alert, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import ContextNavigation from "../../Screens/Context";
import Logo from "../Logo";
import firebase from "../../Firebase/Firebase";
import "firebase/firestore";
const { height, width } = Dimensions.get('window');

export default function Login({ navigation }) {
    const [user, setUser] = useState("-------");
    const [password, setPassword] = useState("------");
    const { login } = React.useContext(ContextNavigation);
    const users = firebase.firestore().collection('user');
    const [modalVisible, setModalVisible] = useState(false);

    function loginUser() {
        users.where('emailPersonal', '==', user).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    if (doc.data().passwordPersonal == password) {
                        console.log(doc.id);
                        login()
                    } else {
                        setModalVisible(true);
                    }
                })
            }).catch((err) => {
                setModalVisible(true);
            })
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Datos incorrectos</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>ok</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <View>
                <Logo />
            </View>
            <View style={styles.textInput}>
                <Input
                    placeholder='Username or email addres'
                    onChangeText={returnOnChangeText => setUser(returnOnChangeText)}
                />
            </View>
            <View style={styles.textInput}>
                <Input
                    placeholder='Password'
                    secureTextEntry={true}

                    onChangeText={returnOnChangeText => setPassword(returnOnChangeText)} />
            </View>



            <View style={styles.textInput}>
                <TouchableOpacity style={styles.openButton} onPress={loginUser}><Text
                    style={{ textAlign: "center" }}>Login</Text></TouchableOpacity>
            </View>

            <View style={styles.textInput}>

                <TouchableOpacity style={styles.openButton}><Text
                    style={{ textAlign: "center" }}
                    onPress={() => navigation.navigate('Register')}
                >Register</Text></TouchableOpacity>

            </View>
        </View>
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