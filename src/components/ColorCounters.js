import React from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'

const ColorCounters = ({color}) =>{
    return(
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`}/>
            <Button title={`Decrease ${color}`}/>
        </View>
    );
};
    
const styles = StyleSheet.create({});


export default ColorCounters;