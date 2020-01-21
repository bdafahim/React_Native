import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

// const ColorCounters = ({ color, onIncrease, onDecrease }) => {
//   return (
//     <View>
//       <Text>{color}</Text>

//       <TouchableOpacity onPress={() => onIncrease()} style={styles.buttonStyle}>
//         <Text style={styles.text}>{`Increase ${color}`}</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => onDecrease()} style={styles.buttonStyle}>
//         <Text style={styles.text}>{`Decrease ${color}`}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

export default class ColorCounters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.color}</Text>

        <TouchableOpacity
          onPress={() => this.props.onIncrease()}
          style={styles.buttonStyle}
        >
          <Text style={styles.text}>{`Increase ${this.props.color}`}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.onDecrease()}
          style={styles.buttonStyle}
        >
          <Text style={styles.text}>{`Decrease ${this.props.color}`}</Text>
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
  buttonStyle: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#ff7070",
    padding: 3
  }
});
