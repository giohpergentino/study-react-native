import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import react from "react";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.box}>
        <MaterialIcons name="email" size={24} color="black" />
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      <View style={styles.box}>
        <Fontisto name="key" size={24} color="black" />
        <TextInput style={styles.input} placeholder="Enter your password" />
      </View>
      <View style={styles.botao}>
        <Button title="LOGIN" color="#fff" />
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
  input: {
    padding: 8,
    width: "80%",
  },
  botao: {
    backgroundColor: "#8B008B",
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  box: {
    borderWidth: 1,
    marginBottom: 13,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
});
