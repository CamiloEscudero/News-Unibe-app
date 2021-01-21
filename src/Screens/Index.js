import React, { useState, useMemo } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import ContextNavigation from "./Context";
import Login from "../Components/Principal/Login";
import Register from "../Components/Principal/Register";
import Principal from './Stacknavigation';
const RootStack = createStackNavigator();
const HeroStack = createStackNavigator();

function HeroStackScreen() {
    return (
        <HeroStack.Navigator>
            <HeroStack.Screen name="Login" component={Login} />
            <HeroStack.Screen name="Register" component={Register} />
        </HeroStack.Navigator>
    )
}

function RootStackScreen({ user }) {
    return (
        <RootStack.Navigator headerMode="none">
            {
                user === null ? (
                    <RootStack.Screen name="Auth" component={HeroStackScreen} headerMode="none" />
                ) : (
                        <RootStack.Screen name="App" component={Principal} headerMode="none" />
                    )


            }
        </RootStack.Navigator>
    )
}

function IndexAppScreen() {
    const [user, setUser] = useState(null);
    const contextNavigation = useMemo(
        () => {
            return {
                login: () => {
                    setUser("1");
                }
            }
        }
    )

    return (
        <ContextNavigation.Provider value={contextNavigation}>
            <NavigationContainer>
                <RootStackScreen user={user} />
            </NavigationContainer>
        </ContextNavigation.Provider>
    )
}

export default IndexAppScreen;
