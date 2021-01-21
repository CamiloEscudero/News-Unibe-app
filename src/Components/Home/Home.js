import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Platform,
    StatusBar,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import ItemList from '../Item'
import firebase from "../../Firebase/Firebase";
import "firebase/firestore";
import Header from "../Header/Header";
import ImageCarousel from "../ImageCarousel"


export default function ListPage({ navigation }) {
    const news = firebase.firestore().collection('News');
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const synch = () => {
        let newsList = [];
        news.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                let newFromFirebase = {
                    id: doc.id,
                    Title: doc.data().title,
                    Date: doc.data().date,
                    Description: doc.data().description,
                    photo: doc.data().image
                }
                newsList.push(newFromFirebase);
            }
            )
            setData(newsList);
        }).finally(() => setLoading(false));
    }

    useEffect(() => {
        let isMounted = true;
        synch();
        return () => {
            isMounted = false
        }
    })

    return (
        <View>
            {
                isLoading ? (<ActivityIndicator />)
                    : (
                        <SafeAreaView style={styles.container}>
                            <Header/>
                            <ImageCarousel/>
                            <FlatList
                                data={data}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <ItemList element={item} navigation={navigation} />
                                )}
                            />

                        </SafeAreaView>
                    )
            }
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    item: {
        backgroundColor: '#f9c2ff'
    }

})
