import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class CardScreen extends Component {
    state = {};
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column"
                }}
            >
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
                                flexDirection: "row",
                                marginTop: 10
                            }}
                        >
                            <Image
                                source={require("../../assets/forest.jpg")}
                                style={styles.cardImage}
                            ></Image>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    marginLeft: 10
                                }}
                            >
                                <Text style={styles.HeaderText}>
                                    Mark's daily digest
                                </Text>
                                <Text style={styles.DescriptionText}>
                                    For November 27, 2019
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                marginTop: 30,
                                marginBottom: 25
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Text style={styles.NewsCounterText}>14</Text>
                                <Text style={styles.DescriptionText}>
                                    Tax News
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 30,
                        flex: 1,
                        flexDirection: "row"
                    }}
                >
                    <Text style={styles.taxNewsTitle}>Latest Tax News</Text>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "flex-end"
                        }}
                    >
                        <TouchableOpacity onPress={() => "#"}>
                            <Text style={styles.ViewAllText}>View all</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: "#6a04b4",
        height: 170,
        width: "95%",
        borderRadius: 10
    },
    cardImage: {
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 100
    },
    DescriptionText: {
        fontSize: 15,
        padding: 5,
        color: "#ffffff"
    },
    HeaderText: {
        fontSize: 20,
        padding: 5,
        color: "#ffffff"
    },
    NewsCounterText: {
        fontSize: 35,
        color: "#ffffff",
        fontWeight: "bold"
    },

    taxNewsTitle: {
        fontSize: 20,
        padding: 5,
        color: "#000000",
        fontWeight: "bold"
    },
    ViewAllText: {
        fontSize: 20,
        padding: 5,
        color: "#6a04b4"
    }
});
