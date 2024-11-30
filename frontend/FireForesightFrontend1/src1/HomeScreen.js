import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Sample data for demonstration purposes
  const fireRiskLevel = 'High';
  const weatherData = {
    temperature: '35°C',
    humidity: '20%',
    windSpeed: '15 km/h',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fire Foresight</Text>

      <View style={styles.section}>
        <Text style={styles.heading}>Fire Risk Level:</Text>
        <Text style={styles.data}>{fireRiskLevel}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Weather Data:</Text>
        <Text style={styles.data}>Temperature: {weatherData.temperature}</Text>
        <Text style={styles.data}>Humidity: {weatherData.humidity}</Text>
        <Text style={styles.data}>Wind Speed: {weatherData.windSpeed}</Text>
      </View>

      <View style={styles.buttons}>
        <Button title="Notifications" onPress={() => navigation.navigate('NotificationScreen')} />
        <Button title="Safety Guidelines" onPress={() => navigation.navigate('SafetyGuidelinesScreen')} />
        <Button title="Settings" onPress={() => navigation.navigate('SettingsScreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginVertical: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttons: {
    marginTop: 30,
  },
});

export default HomeScreen;
//siman