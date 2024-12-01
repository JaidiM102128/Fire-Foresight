import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]}>
          <Text style={styles.buttonText}>Fire Risk Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>Weather Information</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>📂</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
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
