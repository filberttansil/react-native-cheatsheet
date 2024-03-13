import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import EmptyComponent from "../../components/EmptyComponent";
export default function PostScreen({ navigation }) {
  // State
  const API = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);
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
    setPosts([...posts].sort((a, b) => a.id - b.id));
  };
  const handleSortDesc = () => {
    setPosts([...posts].sort((a, b) => b.id - a.id));
  };
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };
  const handleRefresh = () => {
    setRefreshing(true);
    fetchPosts();
    setRefreshing(false);
  };
  // Hooks
  // FetchData
  useEffect(() => {
    fetchPosts();
  }, []);
  // Search
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      console.log("jalan");
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) =>
          json.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
        .then((filteredPost) => setPosts(filteredPost))
        .then(() => setIsLoading(false));
    }, 1000);
    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Search and Sort */}
      <View style={styles.head}>
        {/* <SearchBar /> */}
        <View style={styles.searchBar}>
          <TextInput
            style={{
              padding: 20,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 99999,
            }}
            value={searchQuery}
            onChangeText={(value) => setSearchQuery(value)}
            onSubmitEditing={handleKeyboardDismiss}
            placeholder="Search title here .."
            autoCorrect={false}
          />
        </View>
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSortAsc}>
            <FontAwesome name="sort-up" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSortDesc}>
            <FontAwesome name="sort-down" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddPostScreen", { posts, setPosts })
            }
          >
            <FontAwesome name="plus-circle" size={30} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator size={"large"} color={"lightblue"} />
      ) : (
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
          ListEmptyComponent={() => {
            return <EmptyComponent />;
          }}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}
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
    padding: 15,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginLeft: 20,
    gap: 15,
  },
  searchBar: {
    flex: 1,
  },
});
