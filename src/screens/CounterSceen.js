import React from 'react';
import { Text, StyleSheet, View, Button, } from 'react-native';

const CounterScreen = () =>{
    let counter = 0;

    return(
        <View>
            <Button title="Increase" onPress={() =>{
                counter++;
            }} />
            <Button title="Deccrease" onPress={() =>{
                counter--;
            }} />
        </View>
    );  

};

const styles = StyleSheet.create({

  });

export default CounterScreen;
