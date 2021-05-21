import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  LoginScreen from './screens/LoginScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-naviagtion-drawer'
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default class  App extends Component {
  render(){
  return (
  <View>
    <LoginScreen />
     <AppContainer />
  </View>
  );
 }
}

const SwitchNavigator = createSwitchNavigator({
  welcomeScreen: {
    screen: LoginScreen
  },
  Drawer: {
    screen: AppDrawerNavigator
  },
  BottomTab: {
    screen: AppTabNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator)
