import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function GetStartedScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true); // Modal to show the privacy policy
  const [accepted, setAccepted] = useState(false); // To track if the user accepted the policy

  // Handle acceptance of the privacy policy
  const handleAccept = () => {
    setAccepted(true); // Set acceptance to true
    setModalVisible(false); // Close the modal
  };

  const handleDecline = () => {
    Alert.alert(
      "Privacy Policy",
      "You must accept our privacy policy to use this app. We require access to your location for accurate wildfire risk predictions.",
      [{ text: "OK", onPress: () => setModalVisible(true) }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <MaterialCommunityIcons name="fire" size={100} color="#FF6347" />

      {/* Title */}
      <Text style={styles.title}>Welcome to Fire Foresight!</Text>

      {/* Description */}
      <Text style={styles.description}>
        Predict and prevent wildfires with advanced technology.
      </Text>

      {/* Privacy Consent Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Privacy Policy</Text>
            <Text style={styles.modalText}>
              By using this app, you agree to allow us to access your location data.
              This is necessary to provide accurate wildfire risk predictions and
              weather updates. We respect your privacy and will only use your location
              for the intended purposes of this app.
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.buttonAccept} onPress={handleAccept}>
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonDecline} onPress={handleDecline}>
                <Text style={styles.buttonText}>Decline</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Get Started Button */}
      {accepted ? (
        <TouchableOpacity style={styles.buttonGetStarted} onPress={() => navigation.navigate('Hello')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.infoText}>You must accept the privacy policy to proceed.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonAccept: {
    backgroundColor: '#28a745', // Green color for the Accept button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    marginRight: 2, // Space between buttons
  },
  buttonDecline: {
    backgroundColor: '#FF4500', // Red color for Decline button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 2, // Space between buttons
  },
  buttonGetStarted: {
    backgroundColor: '#FF6347', // Orange color for the Get Started button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    color: 'gray',
    marginTop: 10,
    fontSize: 14,
  },
});
