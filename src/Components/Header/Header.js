import React  from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function Header() {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <Icon
                    name="bars"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>
            <Image style={styles.logo} source={require('../../Images/Logo_Home.png')} />
            <Icon
                name="search"
                color="white"
                size={25}
                alignItems='center'
            />
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
        marginHorizontal: 10
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode:'contain'
    }

})

export default Header