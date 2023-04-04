import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import UserScreen from '../screen/UserScreen';
import HomeScreen from '../screen/HomeScreen';
import ChartScreen from '../screen/ChartScreen';
const Tab = createBottomTabNavigator();
const ButtomTab = () => {
    return (

            <Tab.Navigator
            screenOptions={{ headerShown: false, 
                
            tabBarActiveTintColor: '#FFFF',
             tabBarInactiveTintColor: '#8C1E14',
              tabBarStyle: { backgroundColor: '#F25C05',
              position:'absolute',
              bottom:10,
              left:10,
              right:10,
              elevation:0,
              height:60,
              borderRadius:15,
               borderBottomColor: 'black',padding:10 } }}>
            <Tab.Screen
                
                name="หน้าหลัก"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        //<MaterialCommunityIcons name="home" color={color} size={size} />
                        <MaterialCommunityIcons name="home-variant" color={color} size={40} />
                    ),
                }}
            /> 
           <Tab.Screen
                name='เเนวโน้ม'
                component={ChartScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        // <Icon solid name="id-card" color={color} size={size} />
                        //<MaterialCommunityIcons name="account" color={color} size={size} />
                        <MaterialCommunityIcons name="chart-bell-curve-cumulative" color={color} size={40} />
                        
                    ),
                }}
            />
        
            <Tab.Screen
                name='ผู้ใช้'
                component={UserScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        // <Icon solid name="id-card" color={color} size={size} />
                        //<MaterialCommunityIcons name="account" color={color} size={size} />
                        <MaterialCommunityIcons name="account" color={color} size={40} />
                        
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default ButtomTab

const styles = StyleSheet.create({})