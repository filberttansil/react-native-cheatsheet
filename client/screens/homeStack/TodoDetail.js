import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

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
      headerBackTitle: "Back",
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
