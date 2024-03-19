import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import "react-native-gesture-handler";

import HomeStackGroup from "~/navigations/HomeStackGroup/HomeStack";

import AutoScroll from "~/screens/AutoScroll";
import FlexBox from "~/screens/FlexBox";
import SectionListScreen from "~/screens/SectionListScreen";
import LoginScreen from "~/screens/demoLogin/LoginScreen";
import SearchFilterForm from "~/screens/drawerStack/SearchFilterForm";
import AddPostScreen from "~/screens/exerciseStack/AddPostScreen";
import PostScreen from "~/screens/exerciseStack/PostScreen";

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
      <Drawer.Screen name="Search and Filter" component={SearchFilterForm} />
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
const Stack = createNativeStackNavigator();
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
