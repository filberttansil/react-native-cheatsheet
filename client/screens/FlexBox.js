import { StyleSheet, View } from "react-native";

import Box from "~/components/Box";

export default function FlexBox() {
  return (
    <View style={styles.flexWrap}>
      <Box style={{ backgroundColor: "#A81717" }} children={"Box:1"} />
      <Box style={{ backgroundColor: "#B2C200" }} children={"Box:2"} />
      <Box style={{ backgroundColor: "#004D14" }} children={"Box:3"} />
      <Box style={{ backgroundColor: "#00474D" }} children={"Box:4"} />
      <Box style={{ backgroundColor: "#0D004D" }} children={"Box:5"} />
      <Box style={{ backgroundColor: "#38BDF8" }} children={"Box:6"} />
      <Box style={{ backgroundColor: "#C84D17" }} children={"Box:7"} />

      {/* 
      Flex:1
      - flex:1 akan ambil semua space yang tersisa dari parentnya.
      - flex 1 sbg 1/4 dan 3 sblg 3/4
      */}
      {/*
      <Box style={{ backgroundColor: "#A81717", flex: 1 }} children={"Box:1"} />
      <Box style={{ backgroundColor: "#B2C200", flex: 3 }} children={"Box:2"} />
      <Box style={{ backgroundColor: "#004D14" }} children={"Box:3"} />
      <Box style={{ backgroundColor: "#00474D" }} children={"Box:4"} />
      <Box style={{ backgroundColor: "#0D004D" }} children={"Box:5"} />
      <Box style={{ backgroundColor: "#38BDF8" }} children={"Box:6"} />
      <Box style={{ backgroundColor: "#C84D17" }} children={"Box:7"} /> */}

      {/* Flex Direction */}
      {/* <Box style={{ backgroundColor: "#A81717" }} children={"Box:1"} />
      <Box style={{ backgroundColor: "#B2C200" }} children={"Box:2"} />
      <Box style={{ backgroundColor: "#004D14" }} children={"Box:3"} /> */}

      {/* AlignSelf */}
      {/* <Box
        style={{ backgroundColor: "#A81717", alignSelf: "flex-start" }}
        children={"Box:1"}
      />
      <Box
        style={{ backgroundColor: "#B2C200", alignSelf: "flex-end" }}
        children={"Box:2"}
      />
      <Box style={{ backgroundColor: "#004D14" }} children={"Box:3"} />
      <Box style={{ backgroundColor: "#00474D" }} children={"Box:4"} />
      <Box style={{ backgroundColor: "#0D004D" }} children={"Box:5"} />
      <Box style={{ backgroundColor: "#38BDF8" }} children={"Box:6"} />
      <Box style={{ backgroundColor: "#C84D17" }} children={"Box:7"} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    borderWidth: 6,
    borderColor: "blue",
  },
  // flex-col-reverse => bawah keatas
  flexColReverse: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: "beige",
    borderWidth: 6,
    borderColor: "blue",
  },
  // flex-row => menyamping
  flexRow: {
    flex: 1,
    flexDirection: "row",
    // Semua items ikut as tengah meskipun ukurannya beda
    // alignItems:'baseline',
    backgroundColor: "beige",
    borderWidth: 6,
    borderColor: "blue",
  },

  // justify-content
  justifyContent: {
    flex: 1,
    // Atas Kebawah
    justifyContent: "center",

    // Vertikal
    // justifyContent:'flex-start'

    // Vertikal , Item di tengah
    // justifyContent:'flex-center'

    // Bikin spasi yg sama antar item
    // justifyContent:'space-between',

    // Bikin spasi yang di luar setengah dari spasi diantara item
    // justifyContent:'space-around',

    // Bikin spasi diantara dan di luar item sama besar
    // justifyContent:'space-evenly',

    backgroundColor: "beige",
    borderWidth: 6,
    borderColor: "blue",
  },

  // flex-wrap => akan susun semua items sesuai ukuran (height:300)
  flexWrap: {
    height: 300,
    flexWrap: "wrap",
    backgroundColor: "beige",
    borderWidth: 6,
    borderColor: "blue",
    gap: 2,
  },
});
