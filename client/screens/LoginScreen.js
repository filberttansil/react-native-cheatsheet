import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.loginFormContainer, styles.shadow]}>
        <Text>Login Form</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "beige",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginFormContainer: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
  },
  shadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  // Elevation for android
  androidShadow: {
    elevation: 10,
  },
});
