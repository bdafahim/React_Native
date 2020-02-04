import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.textHome}>Welcome</Text>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("DateTime")}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.text}>Date Time picker</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Library")}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.text}>Go to library</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Color")}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.text}>Add a color</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Square")}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.text}>Square Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Text")}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.text}>Text Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("card")}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.text}>Card view</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "white"
    },
    textHome: {
        marginBottom: 40,
        fontSize: 30,
        color: "#f92b2b"
    },
    buttonStyle: {
        margin: 10,
        alignItems: "center",
        backgroundColor: "#ff7070",
        padding: 3
    }
});
