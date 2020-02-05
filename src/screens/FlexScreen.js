import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FlexScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#e1d2cc" }}>
                <Text style={{ color: "white" }}>hi</Text>
            </View>
        );
    }
}
