import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Tabs'); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
      <View style={styles.container}>
        <Image
          source={require('../assets/mindfulness.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>SafeMind</Text>
        <Text style={styles.phrase}>Um respiro para sua mente 🧘</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#BC9BF0FF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  phrase: {
    fontSize: 18,
    color: '#F2F2F2FF',
    textAlign: 'center',
  },
});
