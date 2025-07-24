import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './screens/LoginScreen'
import OnBoardingScreen from './screens/OnBoardingScreen'
import RegisterScreen from './screens/RegisterScreen'
import OTPScreen from './screens/OTPScreen'
import HomeScreen from './screens/HomeScreen'
import AllChatsScreen from './screens/AllChatsScreen'
// import PhoneNumberInput from './screens/PhoneNumberInput'
import AppNavigator from './navigation/AppNavigator'

const App = () => {
  return (
      <AllChatsScreen />
  )
}

export default App;

const styles = StyleSheet.create({});