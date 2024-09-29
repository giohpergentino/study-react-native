import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import react from "react";

export default function App() {
  const [apresentar, setApresentar] = useState(true);
  const [texto, setTexto] = useState("APRESENTAR TEXTO");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const apresentarTexto = () => {
    setApresentar(!apresentar);
    if (apresentar == false) {
      setTexto("APRESENTAR TEXTO");
    } else if (apresentar == true) {
      setTexto("REMOVER TEXTO");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Digite um nome: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Ex: Fulano"
        onChangeText={setNome}
      />

      <Text>Digite a idade: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Ex: 58"
        onChangeText={setIdade}
      />

      <Button title={texto} onPress={apresentarTexto} color="#8B008B" />
      {apresentar ? (
        <Text></Text>
      ) : (
        <Text>
          Nome: {nome} e idade: {idade}
        </Text>
      )}

      <StatusBar style="auto" />
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
