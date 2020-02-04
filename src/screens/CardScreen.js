import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class CardScreen extends Component {
    state = {};
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.card}>
                    <Image style={styles.cardImage} source={{}} />
                    <Text styles={styles.cardText}>Title</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "#F5FCFF"
    },
    card: {
        backgroundColor: "#fff",
        marginBottom: 10,
        marginLeft: "2%",
        width: "96%",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    cardImage: {
        width: 60,
        height: 60,
        resizeMode: "cover"
    },
    cardText: {}
});
