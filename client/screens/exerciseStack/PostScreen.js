import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { FontAwesome } from "@expo/vector-icons";
export default function PostScreen() {
  // State
  const API = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Functions
  const fetchPosts = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error("Failed to fetch data");
      const responseJSON = await response.json();
      setPosts(responseJSON);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSortAsc = () => {
    const sortedArr = [...posts].sort((a, b) => a.id - b.id);
    setPosts(sortedArr);
  };
  const handleSortDesc = () => {
    const sortedArr = [...posts].sort((a, b) => b.id - a.id);
    setPosts(sortedArr);
  };
  // Hooks
  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size={"large"} color={"lightblue"} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Search and Sort */}
      <View style={styles.head}>
        {/* <SearchBar /> */}
        <TouchableOpacity onPress={handleSortAsc}>
          <FontAwesome name="sort-up" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSortDesc}>
          <FontAwesome name="sort-down" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.textLgBold}>{item.id}</Text>
            <Text style={styles.textLgBold}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  textLgBold: {
    fontSize: 26,
    fontWeight: "bold",
  },
  postContainer: {
    borderRadius: 15,
    backgroundColor: "lightgray",
    marginHorizontal: 10,
    padding: 15,
  },
  head: {
    flexDirection: "row",
  },
});
