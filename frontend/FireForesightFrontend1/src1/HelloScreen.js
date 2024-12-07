import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Location from 'expo-location';

export default function HelloScreen({ navigation }) {
  const [location, setLocation] = useState(null); // For storing location data
  const [errorMsg, setErrorMsg] = useState(null); // For error messages

  useEffect(() => {
    // Function to get location
    const getLocation = async () => {
      // Request location permission
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        // Fetch the user's current location
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);  // Store location
      } catch (error) {
        setErrorMsg('Error fetching location');
      }
    };

    getLocation(); // Call the function
  }, []);

  // Handle location data and display
  let latitude = location?.coords?.latitude;
  let longitude = location?.coords?.longitude;

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      
      {/* Title */}
      <Text style={styles.title}>Hello, Welcome Back!</Text>

      {/* Description */}
      <Text style={styles.description}>
        Ready to start using our app? Choose your option to continue.
      </Text>

      {/* Show error or location */}
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : location ? (
        <Text style={styles.locationText}>
          Current Location: Lat {latitude}, Lon {longitude}
        </Text>
      ) : (
        <Text>Getting your location...</Text>
      )}

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Auth', { latitude, longitude }); // Pass location to AuthScreen
        }}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={[styles.button, styles.signUpButton]}
        onPress={() => {
          navigation.navigate('SignUp', { latitude, longitude }); // Pass location to SignUpScreen
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
  locationText: {
    fontSize: 16,
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
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
