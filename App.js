
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']);
import Routers from './src/routers';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar style='black'/>
    <NavigationContainer>
      <Routers/>
      
    </NavigationContainer>
    </>

);
}

export default App

