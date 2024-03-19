import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import PokemonCard from "~/components/PokemonCard";

import { POKEMON_DATA } from "~/constants/pokemon";

export default function PokemonList() {
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
