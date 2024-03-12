import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlatListScreen from "../../screens/homeStack/FlatlistScreen";
import TodoDetail from "../../screens/homeStack/TodoDetail";
import TodoFormScreen from "../../screens/TodoFormScreen";

const Stack = createNativeStackNavigator();
export function TodoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="To Do List" component={FlatListScreen} />
      <Stack.Screen name="TodoDetail" component={TodoDetail} />
      <Stack.Screen
        name="TodoForm"
        component={TodoFormScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}
