import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert, ScrollView } from 'react-native';

export default function SafetyGuidelinesScreen({ navigation }) {

  const emergencyContact = () => {
    Alert.alert('Emergency Contacts', 'Dial 112 for Fire Emergency', [{ text: 'OK' }]);
  };

  const openMap = () => {
    Linking.openURL('https://maps.google.com');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Emergency Guidelines</Text>

      <Text style={styles.subTitle}>What to Do in Case of a Fire</Text>
      <Text style={styles.text}>
        In case of a fire emergency, follow these steps:
      </Text>
      <View style={styles.listContainer}>
        <Text style={styles.text}>1. Stay calm and alert.</Text>
        <Text style={styles.text}>2. Evacuate the building immediately.</Text>
        <Text style={styles.text}>3. Use the nearest exit and do not use elevators.</Text>
        <Text style={styles.text}>4. If you encounter smoke, crawl to avoid inhaling it.</Text>
        <Text style={styles.text}>5. Once outside, stay at a safe distance from the building.</Text>
        <Text style={styles.text}>6. Call emergency services for assistance.</Text>
      </View>

      <Text style={styles.subTitle}>Fire Safety Tips</Text>
      <View style={styles.listContainer}>
        <Text style={styles.text}>- Install smoke detectors in your home or workplace.</Text>
        <Text style={styles.text}>- Keep fire extinguishers accessible and ensure they are properly maintained.</Text>
        <Text style={styles.text}>- Conduct fire drills regularly to prepare everyone for emergencies.</Text>
        <Text style={styles.text}>- Never block fire exits or escape routes.</Text>
      </View>

      <Text style={styles.subTitle}>Emergency Contacts</Text>
      <View style={styles.contactContainer}>
        <TouchableOpacity onPress={emergencyContact}>
          <Text style={styles.contactText}>Fire Emergency: 112</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={emergencyContact}>
          <Text style={styles.contactText}>Police Emergency: 911</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={emergencyContact}>
          <Text style={styles.contactText}>Ambulance: 999</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>Emergency Teams in Your Area</Text>
      <Text style={styles.text}>Here are some of the emergency teams available in your region:</Text>
      <View style={styles.listContainer}>
        <Text style={styles.text}>- Fire Department: 5 Teams, located in key zones.</Text>
        <Text style={styles.text}>- Ambulance Services: 4 Units, ready for immediate response.</Text>
        <Text style={styles.text}>- Rescue and First-Aid Teams: 3 Units available 24/7.</Text>
      </View>

      <Text style={styles.subTitle}>Evacuation Plans</Text>
      <Text style={styles.text}>
        Familiarize yourself with the evacuation routes in your building or neighborhood. It's important to know where the emergency exits are and how to get to safety quickly.
      </Text>
      <TouchableOpacity style={styles.linkButton} onPress={openMap}>
        <Text style={styles.linkText}>View Emergency Routes on Map</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Fire Prevention Guidelines</Text>
      <Text style={styles.text}>
        To minimize the risk of fire, follow these precautions:
      </Text>
      <View style={styles.listContainer}>
        <Text style={styles.text}>- Do not overload electrical outlets or power strips.</Text>
        <Text style={styles.text}>- Avoid leaving cooking appliances unattended.</Text>
        <Text style={styles.text}>- Store flammable materials safely and away from heat sources.</Text>
        <Text style={styles.text}>- Keep fire exits clear and accessible at all times.</Text>
      </View>

      <Text style={styles.footerText}>Stay Safe and Be Prepared</Text>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  listContainer: {
    marginBottom: 20,
  },
  contactContainer: {
    marginBottom: 20,
  },
  contactText: {
    fontSize: 18,
    color: '#007BFF',
    marginBottom: 10,
  },
  linkButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF6347',
    borderRadius: 8,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 30,
    textAlign: 'center',
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
