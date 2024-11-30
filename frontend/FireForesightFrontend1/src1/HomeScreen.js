import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fire Risk Level: High</Text>
      <Text>Temperature: 35°C</Text>
      <Text>Humidity: 20%</Text>
      <Text>Wind Speed: 15 km/h</Text>
      <View style={styles.buttons}>
        <Button title="Notifications" onPress={() => navigation.navigate('Notifications')} />
        <Button title="Safety Guidelines" onPress={() => navigation.navigate('SafetyGuidelines')} />
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
};

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
  buttons: {
    marginTop: 20,
  },
});

export default HomeScreen;
