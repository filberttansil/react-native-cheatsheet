import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function SearchBar() {
  return (
    <View>
      <TextInput
        style={{
          padding: 15,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 99999,
          flex: 1,
        }}
        placeholder="Search title here .."
      />
    </View>
  );
}
