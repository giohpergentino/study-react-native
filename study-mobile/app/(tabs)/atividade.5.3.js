import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [pessoas, setPessoas] = useState([
    { nome: "", key: 1 },
    { nome: "", key: 2 },
    { nome: "", key: 3 },
    { nome: "", key: 4 },
    { nome: "", key: 5 },
    { nome: "", key: 6 },
    { nome: "", key: 7 },
    { nome: "", key: 8 },
    { nome: "", key: 9 },
    //{nome: '9', key: 10},
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
    padding: 50,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: "#FFB6C1",
    fontSize: 44,
    borderWidth: 1,
    width: "50%",
    paddingLeft: 70,
  },
});
