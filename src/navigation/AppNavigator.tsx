import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigation'
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default AppNavigator