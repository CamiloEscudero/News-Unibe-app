import React from 'react'
import { Text } from 'react-native';

const Body = ({ children, numberOfLines, size = 15 }) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            style={{ color:'white', paddingHorizontal:15, }}
        >
            {children}
        </Text>
    )
}

export default Body;