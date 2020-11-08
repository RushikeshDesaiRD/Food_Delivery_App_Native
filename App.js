import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import NavigationStack from './navigations/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer>
   <NavigationStack/>
   </NavigationContainer>
  
  )
}
