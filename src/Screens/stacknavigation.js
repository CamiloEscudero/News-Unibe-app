import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListPage from '../Components/Home/Home';
import BlockCard from '../Components/Second-screens/BlockCard';
import Index from './Index'
const Stack = createStackNavigator();

export default function Principal() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={ListPage} />
            <Stack.Screen name="BlockCard" component={BlockCard} />
        </Stack.Navigator>

    )
}
