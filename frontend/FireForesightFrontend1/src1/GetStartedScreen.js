import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function GetStartedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image 
        source={require('./assets/logo.png')} // Ensure the logo path is correct
        style={styles.logo}
      />
      
      {/* Title */}
      <Text style={styles.title}>Welcome to Fire Foresight!</Text>
      
      {/* Description */}
      <Text style={styles.description}>
        Predict and prevent wildfires with advanced technology.
      </Text>
      
      {/* Navigation Button */}
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Hello')} // Navigates to the HelloScreen
        color="#FF6347"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});
