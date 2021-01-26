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
    const [images, setImages] = useState([]);
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

    const getImages = () => {
        let newsList = [];
        news.limit(4).get().then((snapshot) => {
            snapshot.forEach((doc) => {
                let newFromFirebase = {
                    photo: doc.data().image
                }
                newsList.push(newFromFirebase);
            }
            )
            setImages(newsList);
        }).finally(() => synch());
    }
    useEffect(() => {
        let isMounted = true;
        getImages();
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
                       <ScrollView styles={styles.listNews}>
                       <ImageCarousel images={images}/>
                       <FlatList
                           data={data}
                           keyExtractor={item => item.id}
                           renderItem={({ item }) => (
                               <ItemList element={item} navigation={navigation} />
                           )}
                       />
                       </ScrollView>
                   </SafeAreaView>
               )
            }
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingBottom: 30,
        backgroundColor: 'black',
        marginBottom: 60

    },
    listNews:{
    paddingTop:8,
    marginBottom:30,
    
    },
    
    item: {
        backgroundColor: '#f9c2ff'
    }

})
