import { View, Text, Image } from "react-native";
import React from "react";

export default function EmptyComponent() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      <Image
        source={require("../assets/pikachu.png")}
        style={{ height: 300, width: "100%" }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Sorry yee.. Tak ada data!
      </Text>
    </View>
  );
}
