import React, { useRef } from "react";
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from "react-native";



const { width } = Dimensions.get("window");
const height = width * 0.6; //75%

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
                    showsHorizontalScrollIndicator={true}
                    style={style.container}
                >
                    {
                        this.props.images.map((image) => (
                            <Image
                                source={{ uri: image.photo }}
                                style={style.image} />
                        ))
                    }
                </ScrollView>
                <View style={style.pagination}>
                    {
                         this.props.images.map((i, k) => (
                            <Text key={k} style={k == this.state.active ? style.paginagActiveText : style.paginagText}></Text>
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