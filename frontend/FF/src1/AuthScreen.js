// AuthScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AuthScreen = ({ navigation }) => {
  // Local state to manage username and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Sample authentication function (for demonstration purposes)
  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      // Navigate to the Home screen if login is successful
      navigation.navigate('Home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default AuthScreen;
