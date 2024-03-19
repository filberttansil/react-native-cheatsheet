import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SearchFilterForm = () => {
  const initialForm = { query: "", newItem: "" };
  const [items, setItems] = useState([]);
  const [forms, setForms] = useState(initialForm);
  const addItem = () => {
    if (forms.newItem === "") return;
    setItems((prev) => [...prev, forms.newItem]);
    setForms(initialForm);
  };
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      console.log("jalan");
      return item.toLowerCase().includes(forms.query.toLocaleLowerCase());
    });
  }, [items, forms.query]);
  return (
    <View style={styles.container}>
      {/* Search Items */}
      <Text style={styles.label}>Search:</Text>
      <TextInput
        placeholder="Search Items"
        style={styles.input}
        value={forms.query}
        onChangeText={(value) => setForms({ ...forms, query: value })}
        autoCorrect={false}
        placeholderTextColor={"gray"}
      />

      {/* Add Items */}
      <Text style={styles.label}>New Item:</Text>
      <TextInput
        placeholder="New Item"
        style={styles.input}
        value={forms.newItem}
        onChangeText={(value) => setForms({ ...forms, newItem: value })}
        autoCorrect={false}
        placeholderTextColor="gray"
        onSubmitEditing={addItem}
      />
      <Button title="Add" onPress={addItem} />

      {/* ItemList */}
      <Text style={styles.label}>Items:</Text>
      {filteredItems.map((item, idx) => (
        <Text key={`item-${idx}`} style={{ fontSize: 16 }}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default SearchFilterForm;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, gap: 5 },
  label: { fontSize: 18, fontWeight: "bold" },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgray",
    marginBottom: 15,
  },
});
