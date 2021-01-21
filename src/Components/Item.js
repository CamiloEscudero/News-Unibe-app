import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window')
const { height: screenHeight } = Dimensions.get('window')
import firebase from "../Firebase/Firebase";
import "firebase/firestore";

export default function Item(props) {
    const framework = firebase.firestore().collection('framework');
    const [item, setItem] = useState({});
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;

        return () => {
            isMounted = false
        };
    }, [])
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('BlockCard',
                        {
                            id: props.element.id
                        }
                    )
                }}

                style={styles.item}>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={{ uri: props.element.photo }} />
                </View>
                <View style={styles.containerInfo}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }} >
                            {props.element.Title}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: 'rgb(105,105,105)' }}>
                            {props.element.Date}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {props.element.Description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

    item: {
        backgroundColor: 'rgb(220,220,220)',
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 5,
        flexDirection: 'row',
        width: screenWidth - 10
    },

    containerImage: {
        flex: 1,
        margin: 10
    },
    image: {
        width: 75,
        height: 75
    },
    containerInfo: {
        flex: 2,
        margin: 5
    },
})