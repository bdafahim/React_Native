import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class CardScreen extends Component {
    state = {};
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column"
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row"
                        }}
                    >
                        <Image
                            source={require("../../assets/forest.jpg")}
                            style={{
                                margin: 10,
                                width: 50,
                                height: 50,
                                borderRadius: 100
                            }}
                        ></Image>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column"
                            }}
                        >
                            <Text
                                style={{
                                    marginTop: 10,
                                    fontSize: 20,
                                    padding: 5,
                                    color: "#ffffff"
                                }}
                            >
                                Mark's daile digest
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    padding: 5,
                                    color: "#ffffff"
                                }}
                            >
                                For Nvember 27, 2019
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "#6a04b4",
        height: 150,
        width: "100%"
    },
    cardImage: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    cardText: {
        color: "#ffffff"
    }
});
