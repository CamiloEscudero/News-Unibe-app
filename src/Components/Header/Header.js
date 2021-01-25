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
        justifyContent: 'space-between',
        backgroundColor: 'black',
        marginHorizontal: 50
    },
    logo: {
        width: 250,
        height: 80,
        resizeMode:'contain'
    }

})

export default Header