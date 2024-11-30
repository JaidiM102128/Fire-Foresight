import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GetStartedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fire Foresight!</Text>
      <Text style={styles.text}>
        Please read and accept our policy to continue.
      </Text>
      <Button title="Accept Policy & Get Started" onPress={() => navigation.navigate('Hello')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
