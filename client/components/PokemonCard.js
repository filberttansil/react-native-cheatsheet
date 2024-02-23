import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const getTypeDetail = (type) => {
  switch (type.toLowerCase()) {
    case "fire":
      return { borderColor: "#FF5733", icon: "🔥" };

    case "water":
      return { borderColor: "#6493EA", icon: "💧" };

    case "grass":
      return { borderColor: "#66CC66", icon: "🌿" };

    case "electric":
      return { borderColor: "#FFD700", icon: "⚡️" };

    default:
      return { borderColor: "#FFD700", icon: "⚡️" };
  }
};
export default function PokemonCard({
  name,
  hp,
  image,
  type,
  moves,
  weaknesses,
}) {
  const { borderColor, icon } = getTypeDetail(type);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pokemonName}>{name}</Text>
        <Text style={{ fontSize: 18 }}>♥️ HP:{hp}</Text>
      </View>
      {/* Image and Type */}
      <View style={styles.imageAndTypeContainer}>
        <Image style={styles.image} source={image} resizeMode="contain" />
        <View style={[styles.typeContainer, { borderColor }]}>
          <Text style={styles.text}>
            {icon} {type}
          </Text>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.text}>Moves: {moves.join(", ")}</Text>
        <Text style={styles.text}>Weakness: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageAndTypeContainer: {
    alignItems: "center",
    gap: 10,
    marginTop: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  typeContainer: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
  },
  footer: {
    marginTop: 15,
    gap: 10,
  },
});
