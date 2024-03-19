import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TodoDetail() {
  const { goBack, setOptions } = useNavigation();
  // Nerima params dari route
  const { params } = useRoute();

  // Hooks seperti useEffect
  useLayoutEffect(() => {
    // Sekarang presentation : 'modal' , set presentation jadi default untuk lihat opsi dibawah.
    setOptions({
      headerTitle: params.title,
      headerShown: true,
      headerLeft: () => (
        <Pressable onPress={() => goBack()}>
          <Ionicons name="arrow-back" size={25} />
        </Pressable>
      ),
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Title: {params.title}</Text>
      <Button title="Back to TodoList" onPress={() => goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    justifyContent: "center",
    alignItems: "center",
  },
});
