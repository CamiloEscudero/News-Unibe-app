import React, { useState, useEffect } from 'react'
import { View, Image, ScrollView, StyleSheet } from "react-native";
import Title from "./Title"
import Body from "./Body"
import Header from '../../Components/Header/Header'
import { color } from 'react-native-reanimated';
import firebase from "../../Firebase/Firebase";
import "firebase/firestore";
import { useRoute } from '@react-navigation/native'

function BlockCard() {
    const news = firebase.firestore().collection('News');
    const [data, setData] = useState({});

    let route = useRoute();
    let id = route.params.id;

    const synch = () => {

        news.doc(id).get().then((snapshot) => {
            let newFirebase = {
                id: snapshot.id,
                Title: snapshot.data().title,
                Date: snapshot.data().date,
                Description: snapshot.data().description,
                photo: snapshot.data().image
            }
            setData(newFirebase);
        }).finally();
    }

    useEffect(() => {
        let isMounted = true;
        synch();
        return () => {
            isMounted = false
        }
    })
    return (
        <View style={styles.container}>
            <Header />

            <ScrollView>

                <Image
                    source={{ uri: data.photo }}
                    style={{ width: '100%', height: 200, resizeMode: 'contain' }} />
                <View style={styles.contentContainer} >
                    <Title>{data.Title}</Title>
                    <Body>
                        {data.Description}
                    </Body>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    contentContainer: {
        padding: 15,
    }
})

export default BlockCard 