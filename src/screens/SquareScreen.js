import React from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'
import ColorCounters from '../components/ColorCounters';

const SquareScreen = () =>{
    return(
        <View>
        <ColorCounters color="Red" />
        <ColorCounters color="Blue" />
        <ColorCounters color="Green" />
        </View>
    );
};
    
const styles = StyleSheet.create({});


export default SquareScreen;