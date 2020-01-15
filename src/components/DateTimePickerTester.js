import React, { Component } from "react";
import { Button, View, TouchableOpacity,Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment"

export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      chosenDate: ''

    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
    this.setState({
        chosenDate: moment(date).format('MMMM, Do YYYY')
    })
  };

  render() {
    return (
      <>
        {/* <Button title="Show DatePicker" onPress={this.showDateTimePicker} /> */}
        <TouchableOpacity onPress= {this.showDateTimePicker}>
            <Text>{this.state.chosenDate}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </>
    );
  }
}