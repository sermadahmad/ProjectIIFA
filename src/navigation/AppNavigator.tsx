import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnBoardingScreen";
import LoginScreen from "../screens/AuthScreen";
import MainTabs from "./MainTabs";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Splash" 
        getComponent={() => require('../screens/SplashScreen').default} 
      />
      <Stack.Screen 
        name="Onboarding" 
        getComponent={() => require('../screens/OnBoardingScreen').default}
      />
      <Stack.Screen 
        name="Login" 
        getComponent={() => require('../screens/AuthScreen').default}
      />
      <Stack.Screen 
        name="MainTabs" 
        getComponent={() => require('./MainTabs').default}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator; 