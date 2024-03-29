import { BottomTabGroup } from "./BottomTab";
import { TodoStack } from "./TodoStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();
export default function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="BottomTabGroup" component={BottomTabGroup} />
      <HomeStack.Screen name="TodoStack" component={TodoStack} />
    </HomeStack.Navigator>
  );
}
