import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Título da Aplicação</Text>
      <Text>
        Lorem ipsum dolor sit amet. Aut consequatur soluta aut iste illo aut
        sint quaerat. Sit voluptatem quas ab quam galisum aut voluptates
        mollitia. Sed vitae tempore nam labore sapiente nam consequuntur
        architecto est omnis voluptatem et eveniet perferendis sit nostrum
        numquam qui voluptatem nihil.
      </Text>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.text1}>Postagem Simples</Text>
        <Text style={styles.text2}>Uma pequena frase que não diz nada!</Text>
      </View>
      <View>
        <Text style={styles.text1}>Postagem Simples</Text>
        <Text style={styles.text2}>Uma pequena frase que não diz nada!</Text>
      </View>
      <View>
        <Text style={styles.text1}>Postagem Simples</Text>
        <Text style={styles.text2}>Uma pequena frase que não diz nada!</Text>
      </View>
      <View style={styles.foto}>
        <Text>Área para foto</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 500,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 3,
    marginTop: 40,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: 10,
  },
  foto: {
    backgroundColor: "red",
    fontSize: 10,
    marginTop: 20,
    padding: 130,
    alignItems: "center",
    justifyContent: "center",
  },
});
