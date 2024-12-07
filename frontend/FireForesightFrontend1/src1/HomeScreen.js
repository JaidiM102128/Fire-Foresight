import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function HomeScreen({ route, navigation }) {
  const { latitude, longitude } = route.params; // Get initial location
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState({ latitude, longitude });
  const [loading, setLoading] = useState(false); // For user feedback

  // Handle Search Input Change
  const handleSearchChange = (text) => setSearchQuery(text);

  // Fetch new location based on search query
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert('Please enter a valid location to search.');
      return;
    }

    setLoading(true); // Show loading state
    try {
      const apiKey = '156baf007d5d46bfba5420f36f99c551'; // Your API key
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=${apiKey}`);
      console.log('Geocoding API Response:', response.data); // Debug log

      if (response.data.results.length > 0) {
        const result = response.data.results[0];
        const newLocation = {
          latitude: result.geometry.lat,
          longitude: result.geometry.lng,
        };
        setLocation(newLocation); // Update location
      } else {
        alert('Location not found. Try another search query.');
      }
    } catch (error) {
      console.error('Error fetching location:', error.message, error.response?.data);
      alert('An error occurred while fetching the location. Please try again later.');
    } finally {
      setLoading(false); // Hide loading state
    }
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
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch} disabled={loading}>
        <Text style={styles.searchButtonText}>{loading ? 'Loading...' : 'Search'}</Text>
      </TouchableOpacity>

      {/* Map View */}
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        <Marker
          coordinate={location}
          title="Selected Location"
          description="This is the location you searched for or your current location."
        />
      </MapView>

      {/* Placeholder Sections for Fire Risk and Weather Information */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Fire Risk Information</Text>
          <Text style={styles.infoText}>Fire risk data will appear here once available.</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Weather Information</Text>
          <Text style={styles.infoText}>Weather data will appear here once available.</Text>
        </View>
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
  searchButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  infoBox: {
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#777',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
