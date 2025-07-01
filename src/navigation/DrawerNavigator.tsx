import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import LogoutScreen from "../screens/LogoutScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MainTabs from "./MainTabs";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="MainTabs" screenOptions={{
      header: ({navigation, route, options}) => {
        return (
          <View style={{ flexDirection: "row", paddingTop: 12, paddingHorizontal: 10 }}>
            <TouchableOpacity onPress={() => {
              navigation.toggleDrawer();
            }}>
              <Icon name="menu" size={24} color="#000" />
            </TouchableOpacity>


          </View>
        )
      }
    }}>
      <Drawer.Screen name="MainTabs" component={MainTabs} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;