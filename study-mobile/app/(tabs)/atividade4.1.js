import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import react from "react";

export default function App() {
  const [ligar, setLigar] = useState(true);
  const [texto, setTexto] = useState("Ligado");

  const ligado = () => {
    if (setLigar == "Ligado") setLigar(!ligar);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Texto"
        onChangeText={setLigar}
      />
      <StatusBar style="auto" />
      {ligar ? <Text>Apresentando o texto</Text> : <Text></Text>}
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
