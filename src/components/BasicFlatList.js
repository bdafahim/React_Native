import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet, Button, Image} from 'react-native'
import flatListData from '../data/flatListData'


class FlatListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {item} = this.props.item;
        {console.log(this.props.item)}
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View
            style={{
                flex: 1,
                flexDirection: 'row'

            }} 
            >
                <Image 
                source={require('../../assets/forest.jpg')}
                style={{width:60, height:60, margin:5, borderRadius:10}}
                >
                </Image>
                <View
                style={{
                    flex: 1,
                    flexDirection: 'column'
                }}
                >
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Text style={styles.descriptionStyle}>{item.description}</Text>
                </View>
            </View>
            <View style={{
                height: 1,
                backgroundColor: '#d4d7de',
                marginLeft: 66,
            }}>
            </View>
            
            </View>
        );
    }
}


const styles = StyleSheet.create({
    nameStyle:{
        fontSize: 14,
        padding: 5,
        color: '#808080'
        //marginVertical: 50
    },
    descriptionStyle:{
        fontSize: 16,
        padding: 5      ,
        //marginVertical: 50
    },
});



export default class BasicFlatList extends Component{
    render(){
        return(
            <View>
                <FlatList
                data = {flatListData}
                keyExtractor={friend => friend.name}
                renderItem={(item) =>{
                    return(
                        <FlatListItem item={item}/>
                    )
                }}
                >

                </FlatList>
            </View>
        );
    }
}