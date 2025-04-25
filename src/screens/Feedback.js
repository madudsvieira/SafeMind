import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const FeedbackScreen = () => {
  const [nome, setNome] = useState('');
  const [sentimento, setSentimento] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (!sentimento || !mensagem || !nome) {
      Alert.alert('Erro', 'Por favor, preencha os campos obrigatórios.');
      return;
    }


    Alert.alert('Feedback enviado', 'Obrigado pela sua resposta!');
    setNome('');
    setSentimento('');
    setMensagem('');
  };

  return (
    
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Formulário de Feedback</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Como você está se sentindo hoje? *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Feliz, Triste, Ansioso..."
            value={sentimento}
            onChangeText={setSentimento}
          />

          <Text style={styles.label}>Mensagem *</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Deixe aqui sua mensagem ou sugestão"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.button} onPress={handleEnviar}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#EDE9FE",
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 5,
  },
  textArea: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 5,
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FeedbackScreen;
