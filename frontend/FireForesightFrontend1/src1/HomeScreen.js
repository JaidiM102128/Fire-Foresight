import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Search Input Change
  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a location"
        value={searchQuery}
        onChangeText={handleSearchChange}
      />

      {/* Title Section */}
      <Text style={styles.title}>Welcome to Fire Foresight</Text>
      <Text style={styles.subtitle}>Explore the map and stay informed</Text>

      {/* Google Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.5731, // Default location (Rabat, Morocco)
          longitude: -7.5898,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {/* Add a Marker */}
        <Marker
          coordinate={{ latitude: 33.5731, longitude: -7.5898 }}
          title="Rabat"
          description="Current focus location"
        />
      </MapView>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
          onPress={() => navigation.navigate('FireRisk')} // Navigate to Fire Risk Info screen
        >
          <Text style={styles.buttonText}>Fire Risk Information</Text>
          <Text style={styles.infoText}>Learn about current fire risks in the region.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => navigation.navigate('WeatherInfo')} // Navigate to Weather Info screen
        >
          <Text style={styles.buttonText}>Weather Information</Text>
          <Text style={styles.infoText}>Get the latest weather updates for your area.</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SafetyGuidelines')}>
          <Text style={styles.navText}>📂</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Text style={styles.navText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.navText}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    margin: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    flex: 4,
    width: '100%',
  },
  buttonsContainer: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  navText: {
    fontSize: 18,
    color: '#555',
  },
});
