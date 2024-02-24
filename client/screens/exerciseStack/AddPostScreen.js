import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function AddPostScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddPostScreen</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
});
