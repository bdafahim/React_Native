import React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
