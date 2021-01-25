import React, { useRef } from "react";
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from "react-native";



const { width } = Dimensions.get("window");
const height = width * 0.6; //75%



const images = [
    'https://drive.google.com/file/d/1Ei3kFBWn-PqK8FCbS41HSjF0D6c_8ice/view',
    'https://i.blogs.es/594843/chrome/450_1000.jpg',
    'https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg'
]
  



export default class slider extends React.Component {
    state = {
        active: 0
    }
    
    render() {
        return (
            <View style={style.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    style={style.container}
                >
                    {
                        images.map((image) => (
                            <Image
                                source={{ uri: image }}
                                style={style.image} />
                        ))
                    }
                </ScrollView>
                <View style={style.pagination}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={k == this.state.active ? style.paginagActiveText : style.paginagText}>*</Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        width,
        height
    },
    scroll: {
        width,
        height
    },
    image: {
        width,
        height,
        resizeMode: 'contain'
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    paginagText: {
        fontSize: (width / 30),
        color: '#888',
        margin: 3
    },
    paginagActiveText: {
        fontSize: (width / 30),
        color: '#fff',
        margin: 3
    }
})