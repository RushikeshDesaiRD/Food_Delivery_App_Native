import React from 'react'
import { View, Text } from 'react-native'
import Home from './../screens/Home';
import Details from './../screens/Details';
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()
export default NavigationStack = () =>{
return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
)
}

