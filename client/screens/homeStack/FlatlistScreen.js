import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
export default function FlatListScreen() {
  const { navigate, setOptions, openDrawer } = useNavigation();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useLayoutEffect(() => {
    setOptions({
      headerShown: true,
      headerLeft: () => (
        <Pressable style={{ marginLeft: 20 }} onPress={() => openDrawer()}>
          <SimpleLineIcons name="drawer" size={24} color="black" />
        </Pressable>
      ),
    });
  }, []);
  return (
    <SafeAreaView style={styles.safeView}>
      <FlatList
        data={data}
        renderItem={({ item, separators }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate("TodoDetail", item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        // Props ini merender react component
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        // Props ini yang dirender jika data kosong
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            <Image
              source={require("../../assets/pikachu.png")}
              style={{ height: 300, width: "100%" }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Sorry yee.. Tak ada data!
            </Text>
          </View>
        )}
        // Props merender react element di awal list
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.headerAndFooter}>To Do List</Text>
          </View>
        )}
        // Props ini merender react element di akhir list
        ListFooterComponent={() => (
          <Text style={styles.headerAndFooter}>End of To Do List</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "beige",
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.4,
  },
  headerAndFooter: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
