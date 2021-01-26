import React  from 'react'
import {View, StyleSheet, Image } from 'react-native'


function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
            source={{uri:'https://i.ibb.co/d4WP1Zn/Logo-Home.png'}}/>	
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingBottom:8
    },
    logo: {
        width: 150,
        height: 75,
     
        resizeMode:'contain'
    }

})


export default Header