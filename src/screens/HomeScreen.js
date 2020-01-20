import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textHome}>Welcome</Text>

      {/* <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Library")}
        title="Go to Library"
      /> */}
      {/* <Button
        onPress={() => navigation.navigate("DateTime")}
        title="Go to Date time Picker"
      /> */}
      {/* <Button
        onPress={() => navigation.navigate("Color")}
        title="Add a color"
      /> */}
      {/* <Button
        onPress={() => navigation.navigate("Square")}
        title="Square Screen"
      /> */}

      <TouchableOpacity
        onPress={() => navigation.navigate("Library")}
        style={styles.buttonStyle}
      >
        <Text style={styles.text}>Go to library</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Color")}
        style={styles.buttonStyle}
      >
        <Text style={styles.text}>Add a color</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Square")}
        style={styles.buttonStyle}
      >
        <Text style={styles.text}>Square Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Text")}
        style={styles.buttonStyle}
      >
        <Text style={styles.text}>Text Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default HomeScreen;
