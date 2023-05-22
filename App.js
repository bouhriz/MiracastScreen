import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

// Import de la fonction isMiracastSupported
import { isMiracastSupported } from './utils/miracast';

export default function App() {
  const handleCastButtonPress = () => {
    const isSupported = isMiracastSupported();

    if (isSupported) {
      // Logique de cast à implémenter ici
      Alert.alert('Casting started!');
    } else {
      Alert.alert('Miracast is not supported on this device.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/miracast_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Miracast Cast Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleCastButtonPress}>
        <Text style={styles.buttonText}>Start Casting</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
