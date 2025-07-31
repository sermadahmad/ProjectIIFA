import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import DetailScreen from '../screens/DetailScreen';

// Define your stack param list here as well
type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {
    card: {
      imgsrc: string;
      title: string;
      price: number;
      discount: number;
      coinsSave: number;
      rating: number;
      reviewCount: number;
      sold: number;
      freeDelivery: boolean;
      coins: boolean;
    };
  };
  CartScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({});