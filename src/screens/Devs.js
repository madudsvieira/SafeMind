import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Devs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Desenvolvedores do Projeto</Text>

      <View style={styles.card}>
        <Image source={require("../assets/duda.png")} style={styles.image} />
        <View>
          <Text style={styles.name}>Maria Eduarda</Text>
          <Text style={styles.role}>UI Design e Navegação</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={{uri: "https://github.com/RafaMacoto.png"}} style={styles.image} />
        <View>
          <Text style={styles.name}>Rafael Macoto</Text>
          <Text style={styles.role}>API e Front-End</Text>
        </View>
      </View>

      <Text style={styles.footer}>💜 SafeMind - 2025</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      padding: 20,
      backgroundColor: "#F8F4FF",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#6B46C1",
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#EDE9FE",
      padding: 15,
      borderRadius: 12,
      width: "90%",
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 15,
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#4B0082",
    },
    role: {
      fontSize: 14,
      color: "#5E5E5E",
    },
    footer: {
      marginTop: 30,
      color: "#A78BFA",
      fontSize: 12,
    },
  });
  