import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // For getting current GPS location
import axios from 'axios';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState({ latitude: 33.5731, longitude: -7.5898 }); // Default: Rabat, Morocco
  const [fireRisk, setFireRisk] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for searches

  // Get the user's current location on mount
  useEffect(() => {
    const getCurrentLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required for this feature.');
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = userLocation.coords;
      setLocation({ latitude, longitude });
      fetchWeatherAndRisk(latitude, longitude);
    };

    getCurrentLocation();
  }, []);

  // Handle Search Input Change
  const handleSearchChange = (text) => setSearchQuery(text);

  // Fetch weather and fire risk data for a location
  const fetchWeatherAndRisk = async (latitude, longitude) => {
    try {
      const weatherApiKey = '52ea94e534f8b8f740a10765f40a6634'; // Replace with your OpenWeatherMap API Key
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`
      );

      setWeatherInfo(weatherResponse.data);

      // Simulate fire risk calculation
      const temp = weatherResponse.data.main.temp;
      const humidity = weatherResponse.data.main.humidity;

      // Example fire risk calculation logic
      const riskLevel =
        temp > 35 && humidity < 30
          ? { level: 'High' }
          : temp > 25 && humidity < 50
          ? { level: 'Medium' }
          : { level: 'Low' };

      setFireRisk(riskLevel.level);
    } catch (error) {
      console.error('Error fetching weather or fire risk data:', error);
      Alert.alert('Error', 'Unable to fetch data. Please try again.');
    }
  };

  // Fetch new location based on search query
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      Alert.alert('Error', 'Please enter a valid location to search.');
      return;
    }

    setLoading(true);
    try {
      const apiKey = '156baf007d5d46bfba5420f36f99c551'; // Replace with your OpenCage API Key
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=${apiKey}`);
      if (response.data.results.length > 0) {
        const result = response.data.results[0];
        const newLocation = {
          latitude: result.geometry.lat,
          longitude: result.geometry.lng,
        };
        setLocation(newLocation);
        fetchWeatherAndRisk(newLocation.latitude, newLocation.longitude);
      } else {
        Alert.alert('Error', 'Location not found.');
      }
    } catch (error) {
      console.error('Error fetching location:', error.message);
      Alert.alert('Error', 'Unable to fetch location. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
        <View style={styles.mapContainer}>
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
              description={`Fire Risk: ${fireRisk}`}
            />
          </MapView>
        </View>

        {/* Fire Risk and Weather Information */}
        <View style={styles.infoContainer}>
          {/* Fire Risk */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <MaterialCommunityIcons name="fire" size={24} color="#FF6347" /> Fire Risk
            </Text>
            <Text
              style={[
                styles.cardValue,
                { fontSize: 24, fontWeight: 'bold', color: fireRisk === 'High' ? 'red' : fireRisk === 'Medium' ? 'orange' : 'green' },
              ]}
            >
              {fireRisk || 'Calculating...'}
            </Text>
          </View>

          {/* Weather Information */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <FontAwesome5 name="cloud-sun" size={24} color="#1E90FF" /> Weather
            </Text>
            {weatherInfo ? (
              <>
                <Text style={styles.cardValue}>Temp: {weatherInfo.main.temp}°C</Text>
                <Text style={styles.cardValue}>Humidity: {weatherInfo.main.humidity}%</Text>
                <Text style={styles.cardValue}>Wind: {weatherInfo.wind.speed} m/s</Text>
              </>
            ) : (
              <Text style={styles.cardValue}>Fetching weather data...</Text>
            )}
          </View>
        </View>
      </ScrollView>

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
  scrollContainer: {
    paddingBottom: 100, // Ensure enough space for scrolling
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
  mapContainer: {
    height: 300, // Adjust height for better visibility
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 16,
    marginVertical: 5,
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
    fontSize: 22,
    color: '#555',
  },
});
