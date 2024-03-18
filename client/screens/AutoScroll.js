import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
  Text
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.5;

const AutoScroll = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [maxSlider] = useState(2);
  const listRef = useRef(null);

  const banners = [
    {
      _id: 1,
      imageUrl:
        "https://i.pinimg.com/736x/ba/ed/ab/baedab9e013fd9d39a136cd8b6e81064.jpg",
    },
    {
      _id: 2,
      imageUrl:
        "https://i.pinimg.com/736x/ba/ed/ab/baedab9e013fd9d39a136cd8b6e81064.jpg",
    },
    {
      _id: 3,
      imageUrl:
        "https://i.pinimg.com/736x/ba/ed/ab/baedab9e013fd9d39a136cd8b6e81064.jpg",
    },
  ];

  useEffect(() => {
    // Function Interval untuk jalanin callback setiap 3 detik
    const interval = setInterval(() => {

      // Tiap iterasi nextIndex akan 0 
      let nextIndex = 0;
      // Jika sliderIndex masi dibawah maxSlider tambahin sliderIndex 1
      if (sliderIndex < maxSlider) {
        nextIndex = sliderIndex + 1;
      }
      // Panggil scrollToIndex dngan value nextIndex ( hasil sliderIndex + 1 )
      scrollToIndex(nextIndex, true);

      // Update state sliderIndex dengan nextIndex agar di iterasi berikutnya bertambah lagi sampai = maxSlider
      setSliderIndex(nextIndex);
    }, 3000);
  
    // Cleanup function menghapus interval agar memory tidak boncos
    return () => clearInterval(interval);

  }, [sliderIndex, maxSlider]);



  // Function ini akan mengupdate Ref
  const scrollToIndex = (index, animated) => {
    listRef.current && listRef.current.scrollToIndex({ index, animated });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          ref={listRef}
          data={banners}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item._id.toString()}
          // getItemLayout agar FlatList tidak perlu kalkulasi sendiri (optimized)
          getItemLayout={(item,index)=>{
            return {width:width,offset:width * index,index}
          }}
          renderItem={({ item }) => (
            <View style={{ height, width }}>
              <Image
                style={{ height, width }}
                source={{ uri: item.imageUrl }}
              />
            </View>
          )}
        />
        <View style={styles.sliderContainer}>
          {banners.map((item, index) => (
            <View key={index} style={styles.sliderBtnContainer}>
              <View style={styles.sliderBtn}>
                {sliderIndex === index && (
                  <View style={styles.sliderBtnSelected} />
                )}
              </View>
            </View>
          ))}
          
        </View>
        <Text>Kok bisa?</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
  },
  scrollContainer: {
    flex: 1,
  },
  sliderContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  sliderBtn: {
    height: 13,
    width: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  sliderBtnSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "black",
  },
  sliderBtnContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
});

export default AutoScroll;
