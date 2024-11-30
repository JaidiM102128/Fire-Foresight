import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HelloScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Button title="Sign Up or Sign In" onPress={() => navigation.navigate('Auth')} />
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
});
