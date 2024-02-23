import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import FlexBox from "./screens/FlexBox";
import PokemonExercise from "./screens/PokemonExercise";
import FlatListScreen from "./screens/FlatlistScreen";
import SectionListScreen from "./screens/SectionListScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Flexbox" component={FlexBox} />
        <Drawer.Screen name="Pokemon List" component={PokemonExercise} />
        <Drawer.Screen name="FlatList Demo" component={FlatListScreen} />
        <Drawer.Screen name="SectionList Demo" component={SectionListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
