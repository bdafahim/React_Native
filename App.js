import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import BasicFlatList from './src/components/BasicFlatList';
import DateTimePickerTester from './src/components/DateTimePickerTester';
import React from "react";
import { createAppContainer } from "react-navigation";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Library: BasicFlatList,
    DateTime: DateTimePickerTester,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

const AppContainer = createAppContainer(navigator);
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}