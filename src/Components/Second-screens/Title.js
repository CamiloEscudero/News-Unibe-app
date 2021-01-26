import React from 'react'
import { Text } from 'react-native';

const Title = ({ children, numberOfLines = 5, size = 25 }) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            style={{ fontWeight: 'bold', fontSize: size, color: 'white', padding:15 }}
        >
            {children}
        </Text>
    )
}

export default Title;