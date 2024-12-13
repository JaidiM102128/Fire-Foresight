import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert, ScrollView } from 'react-native';

export default function SafetyGuidelinesScreen({ navigation }) {

  const emergencyContact = () => {
    Alert.alert('Emergency Contacts', 'Dial 112 for Fire Emergency 🚒', [{ text: 'OK' }]);
  };

  const openMap = () => {
    Linking.openURL('https://maps.google.com');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.subTitle}>What to Do in Case of a Forest Fire 🌳🔥</Text>
        <Text style={styles.text}>In case of a forest fire, follow these steps to ensure your safety:</Text>
        <View style={styles.listContainer}>
          <Text style={styles.text}>1. Stay calm and alert 🚨.</Text>
          <Text style={styles.text}>2. Evacuate the area immediately 🚶‍♂️.</Text>
          <Text style={styles.text}>3. Avoid the smoke, as it can be toxic 🌫️.</Text>
          <Text style={styles.text}>4. If possible, go to a safe area, preferably near water 🌊.</Text>
          <Text style={styles.text}>5. Alert local authorities or fire services 🆘.</Text>
        </View>

        <Text style={styles.subTitle}>Forest Fire Safety Tips 🌳🔥</Text>
        <View style={styles.listContainer}>
          <Text style={styles.text}>- Clear brush and dry leaves near your home 🔥🍂.</Text>
          <Text style={styles.text}>- Keep fire breaks or gaps around wooded areas 🔨.</Text>
          <Text style={styles.text}>- Avoid outdoor fires in windy conditions 🌬️🔥.</Text>
          <Text style={styles.text}>- Be cautious when using tools like chainsaws, especially during dry weather 🔧.</Text>
        </View>

        <Text style={styles.subTitle}>Emergency Contacts 🚨</Text>
        <View style={styles.contactContainer}>
          <TouchableOpacity onPress={emergencyContact}>
            <Text style={styles.contactText}>🔥 Fire Emergency: 15</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={emergencyContact}>
            <Text style={styles.contactText}>🚔 Police Emergency: 19</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={emergencyContact}>
            <Text style={styles.contactText}>🚑 Ambulance: 150</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitle}>Forest Fire Prevention 🔥🌲</Text>
        <Text style={styles.text}>To prevent forest fires, follow these guidelines:</Text>
        <View style={styles.listContainer}>
          <Text style={styles.text}>- Never leave campfires unattended 🔥👀.</Text>
          <Text style={styles.text}>- Always fully extinguish fires after use 🔥💧.</Text>
          <Text style={styles.text}>- Avoid burning debris on windy days 🌬️.</Text>
          <Text style={styles.text}>- Follow local fire bans and restrictions 📜❌.</Text>
        </View>

        <Text style={styles.footerText}>Stay Safe, Stay Alert 🚨</Text>
      </ScrollView>

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
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 100, // Ensure enough space for scrolling content
  },
  
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6347',
    marginTop: 20,
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
    padding: 12,
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
  // Bottom Navigation
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Using space-evenly to evenly distribute nav items
    backgroundColor: '#fff',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '110%', // Ensure it spans the entire width of the screen
    paddingBottom: 0, // Adjust padding so it fits neatly at the bottom
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
    flex: 1, // Evenly distribute space between items
  },
  navText: {
    fontSize: 22, // Larger size for better visibility
    color: '#555',
  },
  activeNavText: {
    color: '#FF6347', // Highlight active screen icon
  },
});
