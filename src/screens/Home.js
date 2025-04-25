import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      setQuote(data[0].q);
    } catch (error) {
      console.error("Erro ao buscar frase:", error);
      setQuote("You are stronger than you think!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
    
      <Image source={require("../assets/background.png")} style={styles.imageTop} />
     
      <View style={styles.quoteContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#6B46C1" />
        ) : (
          <Text style={styles.quote}>{quote}</Text>
        )}
      </View>
      
      <View style={styles.timerBox}>
        <Text style={styles.timerLabel}>Tempo Meditado:</Text>
        <Text style={styles.timerValue}>12 min</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Exercicios")}
      >
        <Text style={styles.buttonText}>Ir para Exercícios</Text>
      </TouchableOpacity>

      {/* Imagem 2 - Ilustração extra */}
      {/* <Image source={require("../assets/calma.png")} style={styles.imageBottom} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageTop: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 12,
  },
  quoteContainer: {
    padding: 20,
    backgroundColor: "#C7ADF0FF",
    borderRadius: 12,
    marginVertical: 10,
  },
  quote: {
    fontSize: 16,
    fontStyle: "bold",
    textAlign: "center",
    color: "#6B46C1",
  },
  timerBox: {
    backgroundColor: "#C7ADF0FF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "70%",
  },
  timerLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  timerValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B46C1",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#6B46C1",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageBottom: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
