import React,{useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'
import ColorCounters from '../components/ColorCounters';

const COLOR_INCREMENT = 15;

const SquareScreen = () =>{
    const[red, setRed] = useState(0);
    const[green, setGreen] = useState(0);
    const[blue, setBlue] = useState(0);

    return(
        <View>
        <ColorCounters 
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red" />
        <ColorCounters
         onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
         onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue" />
        <ColorCounters
         onIncrease={() => setGreen(green + COLOR_INCREMENT)}
         onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green" />

        <View style={{height:150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}} />

        </View>
    );
};
    
const styles = StyleSheet.create({});


export default SquareScreen;