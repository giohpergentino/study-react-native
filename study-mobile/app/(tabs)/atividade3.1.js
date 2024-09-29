import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import react from "react";

export default function App() {
  const [apertar1, setApertar1] = useState(true);
  const [texto, setTexto] = useState("APERTAR");

  const apertarBotao1 = () => {
    setApertar1(!apertar1);
  };

  const [apertar2, setApertar2] = useState(true);

  const apertarBotao2 = () => {
    setApertar2(!apertar2);
  };

  return (
    <View style={styles.container}>
      {apertar1 ? (
        <Text style={styles.texto}>Aqui tem um texto que desaparece!</Text>
      ) : (
        <Text></Text>
      )}
      <View style={styles.botao}>
        <Button title="APERTAR" onPress={apertarBotao1} color="white" />
      </View>
      {apertar2 ? (
        <Text style={styles.texto}>Aqui tem um texto que desaparece!</Text>
      ) : (
        <Text></Text>
      )}
      <View style={styles.botao}>
        <Button title={texto} onPress={apertarBotao2} color="white" />
      </View>
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
  botao: {
    backgroundColor: "#8B008B",
    borderRadius: 10,
    marginBottom: 50,
  },
  texto: {
    fontSize: 18,
    marginBottom: 18,
  },
});
