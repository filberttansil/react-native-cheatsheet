import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Button from "../../components/Button";

import ContentLoader, { Rect, Circle } from "react-content-loader/native";

const MyLoader = () => (
  <ContentLoader
    speed={1}
    width={"100%"}
    height={180}
    viewBox="0 0 400 160"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
  >
    {/* First rectangle */}
    <Rect x="20" y="15" rx="4" ry="4" width="360" height="50" />

    {/* Second rectangle */}
    <Rect x="20" y="80" rx="4" ry="4" width="360" height="50" />
  </ContentLoader>
);

export default function FlatListScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const API = "https://jsonplaceholder.typicode.com/todos";
  // State akan di set jika scroll sdh sampai end
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API + `?_page=${page}_per_page=10`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const responseJSON = await response.json();
      setData([...data, ...responseJSON]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setData([]);
    fetchData();
    setRefreshing(false);
  };
  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.headerAndFooter}>To Do List</Text>
      </View>
    );
  };
  const renderLoader = () => {
    if (isLoading) {
      return <MyLoader />;
    } else return null;
  };
  const handleOnEndReached = () => setPage(page + 1);

  useEffect(() => {
    fetchData();
  }, [page]);

  useLayoutEffect(() => {
    navigation.setOptions({
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
      <View style={{ padding: 10 }}>
        <Button
          children={"Add Todo"}
          onPress={() =>
            navigation.navigate("TodoStack", { screen: "TodoForm" })
          }
        />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("TodoStack", {
                screen: "TodoDetail",
                params: item,
              })
            }
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        // Props ini merender react component
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        // Props ini yang dirender jika data kosong
        // ListEmptyComponent={() => (
        //   <View
        //     style={{
        //       flex: 1,
        //       alignItems: "center",
        //       justifyContent: "center",
        //       marginTop: 100,
        //     }}
        //   >
        //     <Image
        //       source={require("../../assets/pikachu.png")}
        //       style={{ height: 300, width: "100%" }}
        //       resizeMode="contain"
        //     />
        //     <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        //       Sorry yee.. Tak ada data!
        //     </Text>
        //   </View>
        // )}
        // Props merender react element di awal list
        ListHeaderComponent={renderHeader}
        // Props ini merender react element di akhir list
        ListFooterComponent={renderLoader}
        // Props untuk refresh menerima boolean
        refreshing={refreshing}
        // Menerima function, buat function sesuai dengan yang kamu mau
        onRefresh={handleRefresh}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0}
        maxToRenderPerBatch={8}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
