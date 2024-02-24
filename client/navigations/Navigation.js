import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import ProfileScreen from "../screens/ProfileScreen";
// HomeStackScreen
import FlatListScreen from "../screens/homeStack/FlatlistScreen";
import TodoDetail from "../screens/homeStack/TodoDetail";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "../screens/LoginScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PokemonList from "../screens/PokemonList";
import { Pressable } from "react-native";
import SectionListScreen from "../screens/SectionListScreen";

// Stack
const Stack = createNativeStackNavigator();
function HomeStackGroup() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabGroup" component={TabGroup} />
      <Stack.Screen
        name="TodoDetail"
        component={TodoDetail}
        // options={{ presentation:'modal' }}
      />
    </Stack.Navigator>
  );
}
// Tab Bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      // Props ini akan modif setiap screen/route. Destructure route agar dapat diakses
      screenOptions={({ route, navigation }) => ({
        // Props untuk modif tampilan elemen. Bsa destructure color,focused,size utk di modif
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          if (route.name === "Profile")
            iconName = focused ? "settings" : "settings-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Props ganti warna icon ketika aktif
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={TopTabGroup}
        options={{
          tabBarLabel: "Home",

          headerLeft: () => (
            <Pressable
              style={{ paddingHorizontal: 15 }}
              onPress={() => navigation.openDrawer()}
            >
              <Ionicons
                name="file-tray-full-outline"
                size={24}
                color={"black"}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

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
    </Drawer.Navigator>
  );
}

// Material Top Tab
const TopTab = createMaterialTopTabNavigator();
function TopTabGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarIndicatorStyle: { height: 5, borderRadius: 5 },
      }}
    >
      <TopTab.Screen name="Main" component={FlatListScreen} />
      <TopTab.Screen name="PokemonList" component={PokemonList} />
    </TopTab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}
