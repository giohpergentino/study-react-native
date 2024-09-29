import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [pessoas, setPessoas] = useState([
    { nome: "Giovanna", key: 1 },
    { nome: "Nivea", key: 2 },
    { nome: "João", key: 3 },
    { nome: "Felipe", key: 4 },
    { nome: "Maria", key: 5 },
    { nome: "Joana", key: 6 },
    { nome: "Larissa", key: 7 },
    { nome: "Brenda", key: 8 },
    { nome: "Ana", key: 9 },
    { nome: "Caio", key: 10 },
  ]);

  const apertarBotao = (key) => {
    console.log(key);
    const pessoasFiltradas = pessoas.filter((item) => item.key != key);
    setPessoas(pessoasFiltradas);

    console.log(`filtradas: ${pessoasFiltradas}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pessoas}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => apertarBotao(item.key)}
          >
            <Text style={styles.item}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
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
    marginTop: 10,
    padding: 10,
    backgroundColor: "pink",
    fontSize: 44,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
  },
});
