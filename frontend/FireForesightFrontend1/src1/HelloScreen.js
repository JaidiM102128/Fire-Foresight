import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HelloScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      
      {/* Title */}
      <Text style={styles.title}>Hello, Welcome Back!</Text>

      {/* Description */}
      <Text style={styles.description}>
        Ready to start using our app? Choose your option to continue.
      </Text>

      {/* Sign In Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Auth')}  // Navigate to Auth Screen
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity 
        style={[styles.button, styles.signUpButton]} 
        onPress={() => navigation.navigate('SignUp')}  // Navigate to Sign Up Screen
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Optional: Add a footer or some more info here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#4CAF50',  // Different color for Sign Up
  },
});
