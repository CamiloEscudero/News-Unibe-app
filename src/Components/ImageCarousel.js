import React, { useRef } from "react";
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.6; //75%

const images = [
    'https://cdmxhoy.com/wp-content/uploads/2020/04/vacunas.jpg',
    'http://1.bp.blogspot.com/-ULhcdxgdgjM/UAFXS44FX2I/AAAAAAAADwI/Q8943OiXwmA/s1600/animal-images-2.jpg',
    'https://cdn.atomix.vg/wp-content/uploads/2017/05/IntelCorei9.jpg',
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