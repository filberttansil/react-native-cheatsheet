import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TopTabGroup } from "./HomeStackGroup/TopTab";
// Screens
import ProfileScreen from "../screens/ProfileScreen";
// HomeStackScreen

import TodoDetail from "../screens/homeStack/TodoDetail";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "../screens/LoginScreen";

import { Pressable, useColorScheme } from "react-native";
import SectionListScreen from "../screens/SectionListScreen";
import AutoScroll from "../screens/AutoScroll";
import TodoFormScreen from "../screens/TodoFormScreen";
import FlexBox from "../screens/FlexBox";
import PostScreen from "../screens/exerciseStack/PostScreen";
import AddPostScreen from "../screens/exerciseStack/AddPostScreen";
import { BottomTabGroup } from "./HomeStackGroup/BottomTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TodoStack } from "./HomeStackGroup/TodoStack";
import HomeStackGroup from "./HomeStackGroup/HomeStack";

// Drawer
const Drawer = createDrawerNavigator();
function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Demo React Navigation"
        component={HomeStackGroup}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Demo Form Login" component={LoginScreen} />
      <Drawer.Screen name="Demo Section List" component={SectionListScreen} />
      <Drawer.Screen name="Demo AutoScroll" component={AutoScroll} />
      <Drawer.Screen name="Latihan" component={PostAndFlexBox} />
    </Drawer.Navigator>
  );
}

// Main Screen For Exercise
const TopTab = createMaterialTopTabNavigator();
function PostAndFlexBox() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Feed" component={PostStackGroup} />
      <TopTab.Screen name="FlexBox" component={FlexBox} />
    </TopTab.Navigator>
  );
}
// Stack for PostScreen
function PostStackGroup() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{ presentation: "fullScreenModal" }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
    // Enable DarkMode
    // theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <DrawerGroup />
    </NavigationContainer>
  );
}
