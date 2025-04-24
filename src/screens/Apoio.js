import React from 'react';
import { View, Text, Button, Linking, ScrollView, StyleSheet, Image } from 'react-native';


const supportIcon = 'https://pt.dreamstime.com/fotos-de-stock-royalty-free-pode-voc%C3%AA-ajudar-o-argumento-para-o-apoio-volunt%C3%A1rio-financeiro-image31864898';


const openHelpLink = (url) => {
  Linking.openURL(url);
};

const Apoio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Apoio Emocional</Text>
      </View>

      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações sobre Saúde Mental</Text>
          <Text style={styles.infoText}>
            A saúde mental é essencial para o bem-estar geral. Caso você esteja se sentindo sobrecarregado ou precisar de ajuda, saiba que existem recursos disponíveis para oferecer apoio.
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contatos de Emergência</Text>
          <Text style={styles.infoText}>📞 <Text style={styles.boldText}>CVV - Centro de Valorização da Vida</Text>: 188 (disponível 24h)</Text>
          <Text style={styles.infoText}>🏥 <Text style={styles.boldText}>CAPS</Text>: Centros de Atenção Psicossocial (Procure um CAPS mais próximo)</Text>
          <Text style={styles.infoText}>💼 <Text style={styles.boldText}>Psicólogos Gratuitos</Text>: Busque opções em ONGs ou grupos comunitários.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Precisa de Ajuda?</Text>
          <Image source={{ uri: supportIcon }} style={styles.supportIcon} />
          <Text style={styles.infoText}>Se você precisar de apoio emocional ou mais informações, clique no link abaixo:</Text>
          <Button title="Abrir Site de Ajuda" onPress={() => openHelpLink('https://www.cvv.org.br/')} color="#4a90e2" />
        </View>
      </ScrollView>

      <Text style={styles.footerText}>© SafeMind | Todos os direitos reservados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
  },
  header: {
    backgroundColor: '#4a90e2', 
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#3a7fb3', 
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 1,
  },
  scrollContainer: {
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  section: {
    marginVertical: 25,
    backgroundColor: '#ffffff', 
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
  supportIcon: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#4a90e2', 
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
    color: '#888',
  },
});

export default Apoio;