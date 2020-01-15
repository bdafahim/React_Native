import React from 'react';
import { Text, StyleSheet, View, Button,  TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return(
    <View>
    <Text style={styles.text}>Welcome</Text>

    <Button 
    onPress={() => navigation.navigate('Library')}
    title="Go to Library" 
    />
    <Button 
    onPress={() => navigation.navigate('DateTime')}
    title="Go to Date time Picker" 
    />
    <Button 
    onPress={() => navigation.navigate('Count')}
    title="Go to Counter Screen" 
    />
    </View>
  ); 

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
