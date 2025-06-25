import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import HistoryScreen from "../screens/HistoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: "#ffffff",
      tabBarInactiveTintColor: "#ffffff",
      tabBarIcon: ({ color, size, focused }) => {
        let iconName = "home";
        if (route.name === "Home") iconName = focused ? "home" : "home-outline";
        else if (route.name === "Analytics") iconName = focused ? "bar-chart" : "bar-chart-outline";
        else if (route.name === "CreatePost") iconName = focused ? "create" : "create-outline";
        else if (route.name === "History") iconName = focused ? "reload" : "reload-outline";
        else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        paddingBottom: 4,
        height: 60,
        backgroundColor: '#0070C0'
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "600",
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    <Tab.Screen name="CreatePost" component={CreatePostScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainTabs; 