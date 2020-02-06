import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class FlexScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e1d2cc" }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        backgroundColor: "powderblue"
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: "#a4e542" }} />
                    <View style={{ flex: 2, backgroundColor: "#1e2ce9" }} />
                    <View
                        style={{
                            flex: 3,
                            backgroundColor: "#25ecc5",
                            flexDirection: "column"
                        }}
                    >
                        <Text style={{ fontSize: 15, color: "white" }}>Hi</Text>
                        <Text style={{ fontSize: 15, color: "white" }}>
                            Hello
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 2, backgroundColor: "skyblue" }} />
                <View style={{ flex: 3, backgroundColor: "steelblue" }}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: "#25ecc5",
                            flexDirection: "row"
                        }}
                    >
                        <View>
                            <Image
                                source={require("../../assets/forest.jpg")}
                                style={{
                                    marginLeft: 10,
                                    width: 150,
                                    height: 150,
                                    borderRadius: 100
                                }}
                            ></Image>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
