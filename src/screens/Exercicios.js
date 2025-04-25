import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";

export default function Exercicios() {
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote(); 
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      setQuote(`${data[0].q} — ${data[0].a}`);
    } catch (error) {
      setQuote("Não foi possível carregar uma dica agora. Tente novamente mais tarde.");
    }
  };

  useEffect(() => {
    let interval;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setIsRunning(false);
      Alert.alert("Meditação finalizada!");
    }

    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const startTimer = () => {
    setTimer(60);
    setIsRunning(true);
    fetchQuote(); // Atualiza a frase a cada início de meditação
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios de Relaxamento</Text>

      <Image source={require("../../assets/respirar.webp")} style={styles.image} />
      <Text style={styles.text}>Respire fundo... Inspire e expire devagar</Text>

      <TouchableOpacity style={styles.timerButton} onPress={startTimer} disabled={isRunning}>
        <Text style={styles.timerText}>
          {isRunning ? `Tempo restante: ${timer}s` : "Iniciar Meditação (60s)"}
        </Text>
      </TouchableOpacity>

      <Image source={require("../../assets/meditacao-nova.png")} style={styles.image} />

      <Text style={styles.quote}>{quote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  timerButton: {
    backgroundColor: "#9C60BCFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  timerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  quote: {
    fontSize: 16,
    color: "#2E4A62",
    fontStyle: "italic",
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 10,
  }
});
