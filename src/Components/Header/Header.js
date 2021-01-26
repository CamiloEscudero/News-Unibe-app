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
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      
    },
    logo: {
        
        width: 150,
        height: 50,
        resizeMode:'contain'
    }
})


export default Header