import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screen/Splash';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import ButtomTab from '../navigations/ButtomTab';
import HomeScreen from '../screen/HomeScreen';
import UserScreen from '../screen/UserScreen';
import DisplayInvest from '../screen/DisplayInvest';
import DetailScreen from '../screen/DetailScreen';
import PaymentForm from '../screen/PaymentForm';
import ChartScreen from '../screen/ChartScreen';
const Stack = createStackNavigator();
const index = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Regis" component={RegisterScreen} />
            <Stack.Screen name="Tab" component={ButtomTab} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Show" component={DisplayInvest} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Pay" component={PaymentForm} />
            <Stack.Screen name="Chart" component={ChartScreen} />
        </Stack.Navigator>
    )
}

export default index

const styles = StyleSheet.create({})