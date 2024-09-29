import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [pessoas, setPessoas] = useState([
    { nome: "0", key: 1 },
    { nome: "1", key: 2 },
    { nome: "2", key: 3 },
    { nome: "3", key: 4 },
    { nome: "4", key: 5 },
    { nome: "5", key: 6 },
    { nome: "6", key: 7 },
    { nome: "7", key: 8 },
    { nome: "8", key: 9 },
    { nome: "9", key: 10 },
  ]);

  return (
    <FlatList
      numColumns={2}
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
    padding: 30,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: "pink",
    fontSize: 44,
    borderWidth: 1,
    width: "50%",
    paddingLeft: 80,
  },
});
