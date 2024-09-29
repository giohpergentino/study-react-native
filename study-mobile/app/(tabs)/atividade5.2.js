import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [pessoas, setPessoas] = useState([
    { nome: "one", key: 1 },
    { nome: "two", key: 2 },
    { nome: "three", key: 3 },
    { nome: "four", key: 4 },
    { nome: "five", key: 5 },
    { nome: "six", key: 6 },
    { nome: "seven", key: 7 },
    { nome: "nine", key: 8 },
    { nome: "ten", key: 9 },
    { nome: "eleven", key: 10 },
    { nome: "twelve", key: 11 },
    { nome: "thirteen", key: 12 },
    { nome: "fourteen", key: 13 },
    { nome: "fifteen", key: 14 },
    { nome: "sixteen", key: 15 },
  ]);

  return (
    <FlatList
      numColumns={3}
      keyExtractor={(item) => item.key}
      data={pessoas}
      renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    marginTop: 40,
    marginBottom: 5,
    padding: 10,
    marginRight: 8,
    backgroundColor: "violet",
    fontSize: 28,
    borderWidth: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingTop: 60,
  },
});
