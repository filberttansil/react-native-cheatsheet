import { FontAwesome } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Button from "~/components/Button";

export default function AddPostScreen({ navigation }) {
  const {
    params: { posts, setPosts },
  } = useRoute();

  const initialState = {
    title: "",
    body: "",
    userId: 1,
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const isValidate = () => {
    const newErrors = {}; // Create a new errors object

    Object.entries(form).forEach(([key, value]) => {
      if (value === "") {
        newErrors[key] = `${key} is required!`; // Set error message in the newErrors object
      }
    });
    setErrors(newErrors); // Update the errors state with the newErrors object
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = () => {
    if (isValidate()) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => setPosts([json, ...posts]))

        .then(() => navigation.navigate("PostScreen"));
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              padding: 6,
              backgroundColor: "orange",
              borderRadius: 99999,
            }}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome name="arrow-left" size={24} color={"white"} />
          </TouchableOpacity>

          <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 24 }}>
            Let's post a post!
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter post title here ..."
            placeholderTextColor={"gray"}
            onChangeText={(value) => handleChange("title", value)}
          />
          {errors.title ? <Text>{errors.title}</Text> : null}
          <Text style={styles.label}>Body</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Enter post body here ..."
            placeholderTextColor={"gray"}
            multiline
            onChangeText={(value) => handleChange("body", value)}
          />
          {errors.body ? <Text>{errors.body}</Text> : null}
          <Button children={"Post"} onPress={handleSubmit} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    marginHorizontal: 10,
  },
  header: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderRadius: 15,
  },
  form: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    padding: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    padding: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 5,
  },
  multilineInput: {
    minHeight: "10%",
    textAlignVertical: "top",
  },
});
