import React, { useState, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      {/* <Button
        title="Add: a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      /> */}

      <TouchableOpacity
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.text}>Add a color</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
        return
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green}, ${blue})`;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white"
  },
  buttonStyle: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#ff7070",
    padding: 3
  }
});

export default ColorScreen;
