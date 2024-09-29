import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import react from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [ativar, setAtivar] = useState(true);
  const [texto, setTexto] = useState("ATIVAR");

  const ativarBotao = () => {
    setAtivar(!ativar);
    if (ativar == false) {
      setTexto("DESATIVAR");
    } else if (ativar == true) {
      setTexto("ATIVAR");
    }
  };

  const ativado = () => {
    <View style={styles.container1}>
      <Feather style={styles.caixadois} name="send" size={30} color="#8B008B" />
      <AntDesign
        style={styles.caixatres}
        name="delete"
        size={30}
        color="#8B008B"
      />
      <Text style={styles.textconf3}>
        Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto
        de uma postagem! Aqui é um exemplo de texto de uma postagem!
      </Text>
    </View>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Button title={texto} onPress={ativarBotao} color="white" />
      </View>

      {ativar ? (
        <View style={styles.container1}>
          <Feather
            style={styles.caixadois}
            name="send"
            size={30}
            color="#8B008B"
          />
          <AntDesign
            style={styles.caixatres}
            name="delete"
            size={30}
            color="#8B008B"
          />
          <Text style={styles.textconf3}>
            Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de
            texto de uma postagem! Aqui é um exemplo de texto de uma postagem!
          </Text>
        </View>
      ) : (
        <Text></Text>
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
  botao: {
    backgroundColor: "#8B008B",
    borderRadius: 10,
  },
  container1: {
    justifyContent: "space-around",
    marginTop: 40,
    backgroundColor: "#DCDCDC",
    flexDirection: "row-reverse",
    borderRadius: 20,
    paddingStart: 20,
    margin: 20,
    alignItems: "flex-start",
  },
  caixadois: {
    paddingStart: 30,
    paddingTop: 30,
  },
  caixatres: {
    paddingTop: 30,
  },
  textconf3: {
    fontSize: 16,
    marginStart: 60,
    marginBottom: 15,
    marginTop: 10,
    paddingEnd: 10,
  },
});
