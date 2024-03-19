import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Button from "~/components/Button";

export default function LoginScreen() {
  const initialState = {
    username: "",
    password: "",
    review: "",
  };
  const [state, setState] = useState(initialState);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleChange = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    // Jika function validasi kita return true baru console.log isi state
    if (validateForm()) {
      console.log("Submitted:", state.username, state.password, state.review);
      setState(initialState);
      setErrors({});
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!state.username) errors.username = "Username is required!";
    if (!state.password) errors.password = "Password is required!";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.container}
      >
        <View
          style={
            !isDarkMode
              ? [styles.loginForm, styles.shadow]
              : [styles.loginFormDark]
          }
        >
          {/* Logo */}
          <Image
            source={require("../../assets/pikachu.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          {/* Header */}
          <View style={styles.header}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Demo Login</Text>
            <TouchableOpacity onPress={handleSwitch}>
              <FontAwesome
                name={isDarkMode ? "toggle-on" : "toggle-off"}
                size={30}
                color="lightblue"
              />
            </TouchableOpacity>
          </View>
          {/* Body */}
          <View>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={state.username}
              onChangeText={(value) => handleChange("username", value)}
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor={"gray"}
            />
            {errors.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
              value={state.password}
              onChangeText={(value) => handleChange("password", value)}
              placeholderTextColor={"gray"}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              Review
            </Text>
            <TextInput
              style={[styles.multilineInput, styles.input]}
              multiline
              placeholder="Drop a kind review for this page"
              value={state.review}
              onChangeText={(value) => handleChange("review", value)}
              placeholderTextColor={"gray"}
            />
          </View>
          {/* Footer */}
          <Button children={"Login"} onPress={handleSubmit} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "beige",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 300,
  },
  header: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginForm: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    width: Dimensions.get("window").width * 0.8,
  },
  loginFormDark: {
    backgroundColor: "darkgray",
    padding: 20,
    borderRadius: 15,
    width: Dimensions.get("window").width * 0.8,
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
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgray",
    marginBottom: 15,
  },
  multilineInput: {
    minHeight: "10%",
    textAlignVertical: "top",
  },
  errorText: {
    color: "red",
    fontStyle: "italic",
    marginTop: -5,
    marginBottom: 15,
  },
});
