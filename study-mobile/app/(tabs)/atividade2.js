import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container0}>
      <View style={styles.container0}>
        <Icon style={styles.caixaum} name="github" size={95} color="#8B008B" />
        <Text style={styles.textconf}>Fulano de tal</Text>
        <Text style={styles.textconf2}> fazedor de vários nada</Text>
      </View>
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
          Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto
          de uma postagem! Aqui é um exemplo de texto de uma postagem!
        </Text>
      </View>
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
          Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto
          de uma postagem! Aqui é um exemplo de texto de uma postagem!
        </Text>
      </View>
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
          Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto
          de uma postagem! Aqui é um exemplo de texto de uma postagem!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container0: {
    marginTop: 44,
    paddingTop: 40,
    flexDirection: "row",
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
  },
  caixaum: {
    paddingStart: 9,
    marginTop: 1,
    marginBottom: 10,
  },
  textconf: {
    fontSize: 29,
    paddingStart: 34,
    fontWeight: "bold",
    paddingRight: 110,
  },
  textconf2: {
    marginHorizontal: -290,
    paddingTop: 34,
  },
  container1: {
    marginTop: 40,
    backgroundColor: "#DCDCDC",
    flexDirection: "row-reverse",
    borderRadius: 10,
    margin: 10,
    alignItems: "flex-start",
  },
  caixadois: {
    paddingStart: 10,
    paddingTop: 30,
  },
  caixatres: {
    paddingTop: 30,
  },
  textconf3: {
    fontSize: 16,
    marginStart: 80,
    marginBottom: 10,
    marginTop: 10,
  },
});
