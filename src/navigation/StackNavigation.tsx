import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigationParamList } from './types'
import {SCREENS} from '../constants/screens'

const Stack = createNativeStackNavigator<StackNavigationParamList>();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="OnBoardingScreen" component={SCREENS.OnBoardingScreen} />
      <Stack.Screen name="LoginScreen" component={SCREENS.LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={SCREENS.RegisterScreen} />
      <Stack.Screen name="OTPScreen" component={SCREENS.OTPScreen} />
      <Stack.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
      <Stack.Screen name="AllChatsScreen" component={SCREENS.AllChatsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
