import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import PokemonList from "~/screens/PokemonList";
import FlatListScreen from "~/screens/homeStack/FlatlistScreen";

const TopTab = createMaterialTopTabNavigator();
export function TopTabGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarIndicatorStyle: { height: 5, borderRadius: 5 },
      }}
    >
      <TopTab.Screen name="Main" component={FlatListScreen} />
      <TopTab.Screen name="Pokemon List" component={PokemonList} />
    </TopTab.Navigator>
  );
}
