import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { POKEMON_DATA } from "../constants/pokemon";
import PokemonCard from "../components/PokemonCard";

export default function PokemonExercise() {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
        {POKEMON_DATA.map((pokemon, idx) => (
          <PokemonCard
            key={idx}
            name={pokemon.name}
            hp={pokemon.hp}
            image={pokemon.image}
            type={pokemon.type}
            moves={pokemon.moves}
            weaknesses={pokemon.weaknesses}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: { flex: 1, backgroundColor: "beige" },
});
