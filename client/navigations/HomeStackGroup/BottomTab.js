import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TopTabGroup } from "./TopTab";
import ProfileScreen from "../../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();
export function BottomTabGroup() {
  const navigation = useNavigation();
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name === "Profile") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={TopTabGroup}
        options={{
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ paddingHorizontal: 15 }}
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
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
