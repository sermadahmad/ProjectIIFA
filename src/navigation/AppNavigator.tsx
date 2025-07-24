import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from '../screens/CounterScreen';
import CounterTwoScreen from '../screens/CounterTwoScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CounterScreen">
      <Stack.Screen name="CounterScreen" component={CounterScreen} />
      <Stack.Screen name="CounterTwoScreen" component={CounterTwoScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({});